import React from 'react'
import Chat from './components/Chat';
import Navbar from './components/Navbar';

import { ChatContext } from './context/ChatProvider'


const App = () => {

    const {usuario} =  React.useContext(ChatContext);

    return usuario != null ? (
        <div>
            <Navbar />
            {
                usuario.estado ? (
                    <Chat />
                ) : (
                    <>
                        <div className='lead text-center mt-5'>Debes de Iniciar Sesion</div>
                        <div className='lead text-center mt-5'>Enrique S. García</div>
                    </>
                    
                )
            }
        </div>
    ): (
        <div>Cargando Aplicacion...</div>
    )
}

export default App
