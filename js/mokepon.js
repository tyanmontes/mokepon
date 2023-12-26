
    let ataqueJugador 
    let ataqueEnemigo 

    function iniciarJuego(){
        let botonMascotaJugador = document.getElementById('boton-mascota')
        botonMascotaJugador.addEventListener('click', alertaSeleccionasteMascota)


        // Creo las variables para seleccionar los botones del HTML
        let botonFuego = document.getElementById('boton-fuego')
        let botonAgua = document.getElementById('boton-agua')
        let botonTierra = document.getElementById('boton-tierra')

        // Escucho el evento click en los botones
        botonFuego.addEventListener('click', ataqueFuego)
        botonAgua.addEventListener('click', ataqueAgua)
        botonTierra.addEventListener('click', ataqueTierra)
    }


    // Funciones para seleccionar el ataque del jugador 

    function ataqueFuego(){
        ataqueJugador = 'FUEGO'
        ataqueAleatorioEnemigo()
    }
    function ataqueAgua(){
        ataqueJugador = 'AGUA'
        ataqueAleatorioEnemigo()
    }
    function ataqueTierra(){
        ataqueJugador = 'TIERRA'
        ataqueAleatorioEnemigo()
    }

    // Funcion para seleccionar el ataque del enemigo

    function ataqueAleatorioEnemigo(){
        let ataqueAleatorio = aleatorio(1,3); 

        if(ataqueAleatorio == 1){
            ataqueEnemigo ='FUEGO'

        }else if(ataqueAleatorio == 2){
            ataqueEnemigo ='AGUA'

        }else{
            ataqueEnemigo ='TIERRA'
        }
          combate();
    }

    // Funcion para seleccionar un numero aleatorio entre dos numeros
    function aleatorio(min,max){
        return Math.floor(Math.random() * (max - min + 1 ) + min)
    }

    // Funcion para el combate 
    function combate(){
        if(ataqueEnemigo == ataqueJugador){
            crearMensaje("EMPATE")    
        }else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA'){
            crearMensaje("GANASTE")  
        }else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO'){
            crearMensaje("GANASTE")  
        }else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA'){
            crearMensaje("GANASTE")
        }else {
            crearMensaje("PERDISTE")
        }
        
    }

    // Funcion para crear un mensaje
    function crearMensaje(resultado){
        console.log(resultado)
        let sectionMensajes = document.getElementById('mensajes')
        let parrafo = document.createElement('p')
        parrafo.innerHTML = "Tu mascota ataco con "+ ataqueJugador + " la mascota del enemigo ataco con "+ ataqueEnemigo + " - "+ resultado
        sectionMensajes.appendChild(parrafo)
    }
      
    function alertaSeleccionasteMascota(){
        let inputHipodoge = document.getElementById('hipodoge')
        let inputCapipepo = document.getElementById('capipepo')
        let inputRatigueya = document.getElementById('ratigueya')
        let inputLangotelvis = document.getElementById('langostelvis')
        let inputTucapalma = document.getElementById('tucapalma')
        let inputPydos = document.getElementById('pydos')
        let spanMascotaJugador = document.getElementById('mascota-jugador')

        if(inputHipodoge.checked){
            spanMascotaJugador.innerHTML = 'Hipodoge'
        }else if(inputCapipepo.checked){
            spanMascotaJugador.innerHTML = 'Capipepo'
        }else if(inputRatigueya.checked){
            spanMascotaJugador.innerHTML = 'Ratigueya'
        }else if(inputLangotelvis.checked){
            spanMascotaJugador.innerHTML = 'Langotelvis'
        }else if(inputTucapalma.checked){
            spanMascotaJugador.innerHTML = 'Tucapalma'
        }else if(inputPydos.checked){
            spanMascotaJugador.innerHTML = 'Pydos'
        }else{ 
            alert('Selecciona una mascota por favor')
        }

        if(spanMascotaJugador.innerHTML != ''){
            seleccionarMascotaEnemigo()
        }    
    }

    function seleccionarMascotaEnemigo(){
        let mascotaAleatorio = aleatorio(1,6)
        let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

        if(mascotaAleatorio == 1){
            //Hipodoge
            spanMascotaEnemigo.innerHTML = 'Hipodoge'
        }else if ( mascotaAleatorio == 2){
            //Capipepo
            spanMascotaEnemigo.innerHTML = 'Capipepo'
        }else if( mascotaAleatorio == 3){
            //Ratigueya
            spanMascotaEnemigo.innerHTML = 'Ratigueya'
        }else if( mascotaAleatorio == 4){
            //Langotelvis
            spanMascotaEnemigo.innerHTML = 'Langotelvis'
        }else if( mascotaAleatorio ==5){
            //Tucapalma
            spanMascotaEnemigo.innerHTML = 'Tucapalma'
        }else {
            //Pydos
            spanMascotaEnemigo.innerHTML = 'Pydos'
        }
    }

    window.addEventListener('load', iniciarJuego)






























