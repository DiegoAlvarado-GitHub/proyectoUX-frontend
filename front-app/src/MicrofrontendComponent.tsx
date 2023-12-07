// MicrofrontendComponent.tsx
import React, { useEffect } from "react";

const MicrofrontendComponent: React.FC = () => {
  useEffect(() => {
    const microfrontendA = document.getElementById('microfrontendA');
    const iframeA = document.createElement('iframe');
    iframeA.src = 'http://localhost:3031/'; // Reemplaza con la URL correcta del microfrontend
    iframeA.style.width = '100%'; // Ancho del iframe al 100% del contenedor
    iframeA.style.height = '800px'; // Altura del iframe (por ejemplo, 400px)
    microfrontendA?.appendChild(iframeA);
  }, []);

  return <div id="microfrontendA"></div>;
};

export default MicrofrontendComponent;
