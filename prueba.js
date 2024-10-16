window.onload = () => {
    console.log("El documento ESTA READY PA MORIR");
    // marcarCasilla()
    // let casilla = document.querySelector('#casillaTemporal');
    // casilla.addEventListener('click',marcarCasilla) //HANDLER: marcarCasilla
    let casillas = document.querySelectorAll('.casilla');
    for (let casilla of casillas) {
        casilla.addEventListener('click', marcarCasilla) //HANDLER: marcarCasilla
    }
    // casilla.addEventListener('click', marcarCasilla) //HANDLER: marcarCasilla
}

function marcarCasilla(evento) {
    if (document.querySelector('#modoCasilla').checked) {
        // let casilla = document.querySelector('#casillaTemporal');
        // // casilla.style = "background-color: orangered";
        let casillas = document.querySelectorAll('.casilla');
        for (let casilla of casillas) {
            casilla.classList.remove("casillaSel") //HANDLER: marcarCasilla
        }
        evento.target.classList.add("casillaSel")
    }

}

let user = {nom: "Alvaro"};
console.log(nom in user);