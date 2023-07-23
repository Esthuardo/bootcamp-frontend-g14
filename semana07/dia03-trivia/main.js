const ButtonQuestion = document.querySelectorAll('.next')
const Correctas = document.querySelectorAll('.correcto')
const Incorrectas = document.querySelectorAll('.incorrecto')
const Questions = document.querySelectorAll('.question')

const PreguntaX = document.querySelector('.active')
const Visualizar = document.querySelector('.Visualizar')
const Reiniciar = document.querySelector('.reinicio')
const Puntaje = document.querySelector('.puntaje')
const RptaCorrectas = document.querySelector('.rptaCorrectas')
const Imagen = document.querySelector('.Win_Lose')

const Preguntas = [...Correctas,...Incorrectas] //Variable que contiene todos los elementos de ambas clases

let index = 1
let contadorCorrectas = 0

const desplazamiento = -384
const nuevoAlto = 500
const altoNormal = 328

const clasesCorrecta = [
    'text-white',
    'border',
    'border-green-600',
    'bg-green-600',
    'font-medium',
    'rounded-lg',
    'text-sm',
    'px-5',
    'py-2.5',
    'text-left',
    'mr-2',
    'mb-2',
    'w-full'
];
const clasesIncorrecta = [
    'text-white',
    'border',
    'border-red-600',
    'bg-red-600',
    'font-medium',
    'rounded-lg',
    'text-sm',
    'px-5',
    'py-2.5',
    'text-left',
    'mr-2',
    'mb-2',
    'w-full'
]
const clasesNeutra = [
    'text-blue-700',
    'hover:text-white',
    'border',
    'border-blue-700',
    'hover:bg-blue-800',
    'font-medium',
    'rounded-lg',
    'text-sm',
    'px-5',
    'py-2.5',
    'text-left',
    'mr-2',
    'mb-2',
    'w-full'
];


//Deshabilitar los otros botones
function Deshabilitar(Questions){
    Questions.forEach(question => {
        question.disabled = true
    });
}

//Habilitar los botones nuevamente
function Habilitar(Questions){
    Questions.forEach(question => {
        question.disabled = false
    });
}


//Desplazamiento de las preguntas
ButtonQuestion.forEach(button => {
    button.addEventListener('click',function (event) {
        if (PreguntaX) {
            PreguntaX.style.marginTop = (index * desplazamiento) +'px'
            index = index + 1
            if (parseInt(PreguntaX.style.marginTop) <= -1152){
                Visualizar.style.height = nuevoAlto + 'px'
                RptaCorrectas.textContent = 'Respondiste ' + contadorCorrectas + " de 3" 
                Puntaje.textContent = "Y este es tu puntaje: " + (contadorCorrectas*10)
                if (contadorCorrectas<=1) {
                    Imagen.src = 'Perdiste.png'
                } else{
                    Imagen.src= 'Ganaste.png'
                }
            }
        }
        Habilitar(Questions)
    })
});
//Reincio de al inicio
Reiniciar.addEventListener('click',function (event) {
    PreguntaX.style.marginTop = '0px'
    Visualizar.style.height = altoNormal + 'px'
    index=1
    contadorCorrectas = 0
    //reiniciamos el estado de cada pregunta
    Preguntas.forEach(pregunta => {
        pregunta.classList.remove(...clasesCorrecta)
        pregunta.classList.remove(...clasesIncorrecta)
        pregunta.classList.add(...clasesNeutra)
    });
    Habilitar(Questions)
})

//Dado estilo al presionar en el correcto
Correctas.forEach(correcta => {
    correcta.addEventListener('click',function(event){
        correcta.classList.remove(...clasesNeutra)
        correcta.classList.add(...clasesCorrecta)
        contadorCorrectas = contadorCorrectas + 1
        Deshabilitar(Questions)
    })
});

//Dado estilo al presionar en el incorrecto
Incorrectas.forEach(incorrecta => {
    incorrecta.addEventListener('click',function(event){
        incorrecta.classList.remove(...clasesNeutra)
        incorrecta.classList.add(...clasesIncorrecta)
        Deshabilitar(Questions)
    })
});

