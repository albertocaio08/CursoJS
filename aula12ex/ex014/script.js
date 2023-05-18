function carregar (){
    var msg = window.document.getElementById(`msg`)
    var img = window.document.getElementById(`imagem`)
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        img.src = 'manha.png'
        document.body.style.background = `#e3ccb3`
        msg.innerHTML = `Bom dia, agora são ${hora} horas!`
    }else if(hora >= 12 && hora < 18){
        //BOA TARDE
        img.src = 'tarde.png'
        document.body.style.background = `#dfa156`
        msg.innerHTML = `Boa tarde, agora são ${hora} horas!`
    }else{
        //BOA NOITE
        img.src = 'noite.png'
        document.body.style.background = `#0266a0`
        msg.innerHTML = `Boa noite, agora são ${hora} horas!`
    }
}