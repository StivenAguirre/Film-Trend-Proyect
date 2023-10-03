import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');

const player = new Player(iframe);
/* throttle lo que hace en este caso es limitar las actualizaciones del tiempo de 
reproduccion a una vez por segundo */
player.on('timeupdate', throttle(function(data) {
    /*Data representa la posicion actual en segundos del evento timeupdate */
    const currentTime = data.seconds;
    //aqui enviamos este dato que se almacena al momento de cargar la pagina y 
    //que este pase a el localstore y quede guardado ahi
    localStorage.setItem('videoplayer-current-time', currentTime);
}, 1000));

//Aqui ya llamamos ese valor que quedo guardado en el locaSlStore con el nombre dado 
//Videoplayer-current-time.
const savedTime = localStorage.getItem('videoplayer-current-time');

if (savedTime !== null) {
    //aqui si el dato o los segundos guardados en saveTime son diferentes a nulo entonces 
    //al momento de darle click para reanudar va a tomar el dato que esta en savetime
    player.setCurrentTime(parseFloat(savedTime))
        .then(function(seconds) {
            player.play();
        })
        //Ya si el valor que esta en savetime es nulo pues se toma como valor inicial 0 y se reproduce
        .catch(function(error) {
            switch (error.name) {
                case 'RangeError':
                    player.setCurrentTime(0)
                        .then(function() {
                            player.play();
                        });
                    break;

                default:
                    console.error('Error al establecer el tiempo de reproducción:', error);
                    break;
            }
        });
}