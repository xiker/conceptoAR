document.addEventListener('DOMContentLoaded', function() {
    console.log("XXXXXXXXXXXXXX...........Contenido cargado.....");


    if (navigator.xr) {
        navigator.xr.isSessionSupported('immersive-ar').then((supported) => {
          if (supported) {
            console.log('WebXR AR está soportado en este navegador');
          } else {
            document.querySelector(".mensajeLoading").innerHTML = "WebXR AR no está soportado en este navegador";
            console.log('WebXR AR no está soportado en este navegador');
          }
        }).catch((err) => {
          console.log('Error al comprobar el soporte de WebXR: ', err);
        });
      } else {
        console.log('WebXR no está disponible en este navegador');
      }


    window.addEventListener("arjs-nft-loaded", (event) => {
        // Hide loading overlay

        console.log("XXXXXXXXXXXXXXX.................arjs-nft-loaded");
    });

      document.querySelector('a-scene').addEventListener('loaded', () => {
        console.log('XXXXXXXXX...............Escena completamente cargada');
      });


      document.querySelector('[gltf-model]').addEventListener('loaded', () => {
        console.log('XXXXXXXXXX............Modelo GLTF cargado');
      })

      document.body.addEventListener('arjs-initialized', (event) => {
        console.log('XXXXXXXXXXX.............AR.js está inicializado');
      });

      // Detectar cuándo se ha encontrado el marcador
        document.querySelector('a-nft').addEventListener('markerFound', () => {
            console.log('XXXXXXXXXXXX..............Marcador encontrado');
        });
  
        // Detectar cuándo se pierde el marcador
        document.querySelector('a-nft').addEventListener('markerLost', () => {
            console.log('XXXXXXXXXXXXXX.............Marcador perdido');
        });

        document.body.addEventListener('xrSessionStarted', (event) => {
            console.log('XXXXXXXXXXXXX...........La sesión WebXR ha comenzado');
          });

        document.body.addEventListener('xrSessionEnded', (event) => {
            console.log('XXXXXXXXXX.............La sesión WebXR ha terminado');
        });

});//fin dom loaded