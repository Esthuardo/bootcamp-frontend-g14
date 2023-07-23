const botonCalcular=document.getElementById('Btncalcular')
const inputPeso=document.getElementById('peso');
const inputAltura=document.getElementById('altura');
const divResultado=document.getElementById('resultado')
//inputPeso.addEventListener('input',function (event) {
//    console.log(event.target.value)
//})

botonCalcular.addEventListener('click',function(event) {
    //console.log('click')
    const peso=inputPeso.value
    const altura=inputAltura.value/100
    const IMC=(peso)/(altura**2)
    console.log(IMC)
    let resultado
    if (IMC<18.5){
        resultado='Baja'
    }else if(IMC>=18.5 && IMC<=24.9){
        resultado='Normal'
    }else if(IMC>25 && IMC<=29.9){
        resultado='Sobrepeso'
    }else if(IMC>=30){
        resultado='Obeso'
    }else{
        resultado='Error de datos'
    }
    console.log(resultado)
    divResultado.innerText= 'Tu indice de masa corporal es: ' +resultado
})