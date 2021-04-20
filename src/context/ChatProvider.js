import React from 'react'
import { db, provider, auth } from '../firebase';

export const ChatContext = React.createContext();


const ChatProvider = (props) => {


    const dataUsuario = {uid: null, email: null, estado: null}
    const [ usuario, setUsuario ] = React.useState(dataUsuario);
    const [ mensajes, setMensajes ] = React.useState([]);

    React.useEffect( () =>{
        detectarUsuario()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    const detectarUsuario = () => {

        //--- trae un usuario ---//
        auth.onAuthStateChanged( user => {
            if (user) {
                
                //--- si existe me trae la informacion del usuario dcon sus datos ---//
                setUsuario({uid: user.uid, email: user.email, estado: true} )  
                cargarMensajes()//cargo los mensajes
            }else{
                setUsuario({ uid: null, email: null, estado: false })
            }
        })
    }


    const ingresoUsuario = async () => {

        try {

            await auth.signInWithPopup(provider)
            
        } catch (error) {
            console.log(error)
        }

    }


    const cargarMensajes = () =>{

        db.collection('chat').orderBy('fecha')  

            /**
             * cada vez que agrege un nuevo mensaje, se 
             * va a ejecuatar el onSnapshot y se va a actualizar
             * el arrayMensajes, funciona en tiempo real
             * *solo se necesita para usarlo en actualizaciones en tiempo real(onSnapshot)
             */
            .onSnapshot(query => {
                const arrayMensajes = query.docs.map(item => item.data())
                setMensajes(arrayMensajes)
            })
    }

    const agregarMensajes = async (uidChat, textoInput) => {

        try {
            
            await db.collection('chat').add({
                fecha: Date.now(),
                texto: textoInput,
                uid: uidChat
            })

        } catch (error) {
            console.log(error)
        }

    }


    const cerrarSesion = () => {
        auth.signOut()
    }


    return (
        <ChatContext.Provider value={{usuario, ingresoUsuario, cerrarSesion, mensajes, agregarMensajes}}>
                {props.children}
        </ChatContext.Provider>
    )
}

export default ChatProvider
