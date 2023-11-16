import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

const App = () => (
  // <div className="mt-10 text-3xl mx-auto max-w-6xl">
  //   <div>Name: front-app</div>
  //   <div>Framework: react</div>
  //   <div>Language: TypeScript</div>
  //   <div>CSS: Tailwind</div>
  // </div>

  <div className="contenedor-primario">


    {/* Seccion del Navbar  HEADER */}
    <div className="nav">



      <div className="seccion-izquierda-nav">
        <svg width="35" height="35" viewBox="0 0 24 24" role="presentation"><path d="M5 15h14v2H5zm0-8h14v2H5zm0 4h14v2H5z" fill="currentColor" fill-rule="evenodd"></path></svg>
      </div>

      <div className="seccion-medio-nav">
        <h1 className="titulo">MeetHub</h1>
      </div>

      <div className="seccion-derecha-nav">

        <i className="fas fa-user"></i>
        
        <i className="fas fa-cog p20l"></i>
      </div>
    </div>

    <h1 className="dashboard">Dashboard</h1> 
    
    {/* BODY */}
    <div className="contenedor-padre">
        <div className="contenedor-ultimas-reuniones">
          <h1>Ultimas reuniones</h1>
        </div>

        <div className="contenedor-actas">
          <h1>Actas sin finalizar</h1>
        </div>

        <div className="contenedor-prox-compromisos">
          <h1>Proximos compromisos</h1>
        </div>
      

        <div className="contenedor-compromisos-atrasados">
          <h1>Compromisos atrasados</h1>
        </div>

    </div>
  </div>

);
ReactDOM.render(<App />, document.getElementById("app"));
