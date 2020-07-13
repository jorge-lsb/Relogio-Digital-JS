setInterval(function atualiza_hora() {
    hora_atual = new Date().getHours();
    minuto_atual = new Date().getMinutes();
    segundo_atual = new Date().getSeconds();

    hora.innerHTML = hora_atual;
    minuto.innerHTML = minuto_atual;
    segundo.innerHTML = segundo_atual;

    if(String(segundo_atual).length == 1){
        segundo.innerHTML = `0${segundo_atual}`;
    }

    if(String(minuto_atual).length == 1){
        minuto.innerHTML = `0${minuto_atual}`;
    }

    if(String(hora_atual).length == 1){
        hora.innerHTML = `0${hora_atual}`;
    }

}, 1000)