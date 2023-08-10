import { useState } from "react"
import { useEffect } from "react"
import PokemonsList from "./components/pokemons/PokemonsList"
import Header from "./components/Header"
import Header_Pokemons from "./components/Header_Pokemons"

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
      <Header_Pokemons title={'Poké Catalog'} />
      {/* {JSON.stringify(pokemons)} */}
      <main className="p-3 flex flex-col gap-3 w-[768px] items-center m-auto">
        <PokemonsList pokemons={pokemons}/>
      </main>
    </>
  )
}

export default App
