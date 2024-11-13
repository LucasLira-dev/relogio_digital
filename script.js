

const hours = document.getElementById('horas')
const minutes = document.getElementById('minutos')
const seconds = document.getElementById('segundos')

const relogio = setInterval(function time() {
    let dateToday = new Date()
    let hora = dateToday.getHours()
    let minutos = dateToday.getMinutes()
    let segundos = dateToday.getSeconds()

    if(hora < 10) hora= '0' + hora;

    if(minutos < 10) minutos= '0' + minutos;

    if(segundos < 10) segundos= '0' + segundos;

    hours.innerHTML= hora
    minutes.innerHTML= minutos
    seconds.innerHTML= segundos
})

