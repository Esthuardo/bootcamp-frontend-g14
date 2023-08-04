import { useState } from "react"

function App() {
  const [peso,Setpeso]=useState(180)
  const [altura,Setaltura]=useState(300)
  let [IMC, SetIMC]=useState(20)

  const handleChangePeso = (event) => {
    const value = event.target.value
    Setpeso(value)
  }
  const handleChangeAltura = (event) => {
    const value = event.target.value
    Setaltura(value)
  }
  const calcular = (event) =>{
    const value = (peso)/((altura/100)^2)
    console.log(value)
    SetIMC(value)
  }
  return (
    <>
      <section className=" w-96 mx-auto my-5 rounded-md bg-sky-500 ">
        <h1 className="text-3xl font-bold underline text-center text-white p-5">IMC APPs</h1>
        <div className=" bg-sky-200 p-5">
          <p className=" font-bold">Peso: {peso}kg</p>
          <input type="range" className="w-full" min='50' max='200' value={peso} onChange={handleChangePeso} />
          <p className=" font-bold">Height: {altura}cm</p>
          <input type="range" className="w-full" min='50' max='350' value={altura} onChange={handleChangeAltura}/>
          <button className="mx-36 bg-blue-600 p-2 items-center rounded-2xl text-white text-center bg-center " onClick={calcular}>Calcular</button>
          <p className=" font-bold text-2xl bg-orange-400 text-center p-5 mt-5">Tu IMC es {IMC}</p>
        </div>
      </section>
    </>
  )
}

export default App
