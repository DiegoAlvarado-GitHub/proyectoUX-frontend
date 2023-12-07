// MicrofrontendComponent2.tsx
import React, { useEffect } from "react";

const MicrofrontendComponent2: React.FC = () => {
  useEffect(() => {
    const microfrontendA2 = document.getElementById('microfrontendA2');
    const iframeA = document.createElement('iframe');
    iframeA.src = 'http://localhost:3032/'; // Reemplaza con la URL correcta del microfrontend
    iframeA.style.width = '100%'; // Ancho del iframe al 100% del contenedor
    iframeA.style.height = '800px'; // Altura del iframe (por ejemplo, 400px)
    microfrontendA2?.appendChild(iframeA);
  }, []);

  return <div id="microfrontendA2"></div>;
};

export default MicrofrontendComponent2;
