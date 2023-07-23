console.log('java intermedio')
//Arrays
const num1=1
const num2=2
const num3=3

const listaNum=[num1,num2,num3,'esthuardo','quispe',true]
console.log(listaNum[4])
listaNum[2]=99
console.log(listaNum)
listaNum.push('javascript')
console.log(listaNum)
listaNum.pop()
console.log(listaNum)

//Objetos

const miObjeto={
    nombre:'Esthuardo',
    apellido: 'quispe',
    'mi edad': 29
}
console.log(miObjeto)

//Destructuring
const nombreValue=miObjeto.nombre
console.log(nombreValue)
const{nombre, apellido}=miObjeto
console.log(nombre,apellido)
const{nombre:NombreValor,apellido:ApellidoValor}=miObjeto
console.log(NombreValor,ApellidoValor)

//SPREAD OPERATOR
const producto={
    nombre: 'laptop',
    precio: 6000
}
const cliente={
    nombre: 'luis',
    isVip: true
}

const nuevoObjeto={...producto,...cliente}
console.log(nuevoObjeto)
const nuevoObjetoSinColisiones={
    producto:{...producto},
    cliente:{...cliente}
}
console.log(nuevoObjetoSinColisiones)