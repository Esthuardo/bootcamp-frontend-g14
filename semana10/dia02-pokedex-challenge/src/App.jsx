import { useState } from "react"
import { useEffect } from "react"
import PokemonsList from "./components/pokemons/PokemonsList"
import Header from "./components/Header"

function App() {
  const [pokemons,setPokemons] = useState({})
  useEffect(()=>{
    const fetchPokemons = async()=>{
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
      const data = await response.json()
      setPokemons(data)
    }
    fetchPokemons()
    console.log('ME EJECUTO')
  },[])
  return (
    <>
      <Header title={'Poke catalog'} />
      {/* {JSON.stringify(pokemons)} */}
      <main className="p-3 flex">
        <PokemonsList pokemons={pokemons}/>
      </main>
    </>
  )
}

export default App
