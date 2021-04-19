import React from 'react'

import Agregar from './Agregar'
import { ChatContext } from '../context/ChatProvider';


const Chat = () => {

    const {mensajes,usuario} = React.useContext(ChatContext);
    const refZonaChat = React.useRef(''); //

    React.useEffect( () => {
        //console.log(refZonaChat)

        //baja el scroll automaticamente, para poder ver los mensajes que he enviado
        refZonaChat.current.scrollTop = refZonaChat.current.scrollHeight; 
    },[mensajes])

    return (
        <div 
            className='mt-3 px-2'
            style={{ height: '75vh', overflow: 'scroll'  }}
            ref={ refZonaChat }//acedo al div
        >

            {
                mensajes.map(( item, index ) => (
                    usuario.uid === item.uid ? (
                        
                        <div className='d-flex justify-content-end mb-2' key={index}>
                            <span className='badge badge-pill badge-dark'>
                                {item.texto}
                            </span>
                        </div>

                    ) : (

                        <div className='d-flex justify-content-start mb-2' key={index}>
                            <span className='badge badge-pill badge-primary'>
                                { item.texto }
                            </span>
                        </div>

                    )
                ))
            }



            <Agregar />

        </div>
    )
}

export default Chat
