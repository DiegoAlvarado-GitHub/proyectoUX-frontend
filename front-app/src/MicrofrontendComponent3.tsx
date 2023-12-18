// MicrofrontendComponent2.tsx
import React, { useEffect } from "react";

const MicrofrontendComponent3: React.FC = () => {
  useEffect(() => {
    const microfrontendA3 = document.getElementById('microfrontendA3');
    const iframeA = document.createElement('iframe');
    iframeA.src = 'http://localhost:3033/'; // Reemplaza con la URL correcta del microfrontend
    iframeA.style.width = '100%'; // Ancho del iframe al 100% del contenedor
    iframeA.style.height = '800px'; // Altura del iframe (por ejemplo, 400px)
    microfrontendA3?.appendChild(iframeA);
  }, []);

  return <div id="microfrontendA3"></div>;
};

export default MicrofrontendComponent3;
