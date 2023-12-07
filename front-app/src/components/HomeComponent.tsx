import React from 'react';
import "../styles/HomeComponent.scss";
import MicrofrontendComponent from '../MicrofrontendComponent';



const sendMessageToMicrofrontend = () => {
    const iframe = document.querySelector('iframe'); // Obtén la referencia al iframe del microfrontend
    if (iframe) {
      const message = {
        name: 'Nicolas S',
        room: 'Sala1',
        // Otra información que desees enviar
      };
      iframe.contentWindow?.postMessage(message, 'http://localhost:3031'); // Reemplaza con la URL correcta del microfrontend
    }
    console.log("enviado")
};


const HomeComponent = () =>{
  return(
    <div className="contenedor-primario">

    {/* Seccion del Navbar  HEADER * ***********************************************************************/}
    <div className="nav">
      <div className="seccion-izquierda-nav" title="Desplegar menu">
        <svg className="menu-icon" width="35" height="35" viewBox="0 0 24 24" role="presentation"><path d="M5 15h14v2H5zm0-8h14v2H5zm0 4h14v2H5z" fill="currentColor" fill-rule="evenodd"></path></svg>
      </div>

      <div className="seccion-medio-nav">
        <h1 className="titulo">MeetHub</h1>
      </div>

      <div className="seccion-derecha-nav">
        <i className="fas fa-user" title="Ir a mi perfil"></i>
        <i className="fas fa-cog p20l" title="Ir a configuraciones"></i>
      </div>
    </div>
    {/* **************************************************************************************************** */}

    <h1 className="dashboard">Dashboard</h1>

    {/* BODY *************************************************************************************************/}
    <div className="contenedor-padre">
      <div className="contenedor-ultimas-reuniones">
        <h1 title="Ir a reuniones">Ultimas reuniones</h1>
        {/* Botón para enviar el mensaje al microfrontend */}
        <button onClick={sendMessageToMicrofrontend}>Enviar Mensaje</button>
      </div>

      <div className="contenedor-actas">
        <h1 title="Ir a actas">Actas sin finalizar</h1>
      </div>

      <div className="contenedor-prox-compromisos">
        <h1 title="Ir a compromisos">Proximos compromisos</h1>

      </div>


      <div className="contenedor-compromisos-atrasados">
        <h1 title="Ir a compromisos">Compromisos atrasados</h1>
        <MicrofrontendComponent />
      </div>

    </div>
    {/* **************************************************************************************************** */}

  </div>
  )
}

export default HomeComponent;
