import pokeball from '../assets/pokeball.svg'
import settings from '../assets/settings.svg'
import user from '../assets/user.svg'

const Header_Pokemons = ({title}) =>{
    return(
        <>
        <header className="flex w-[768px] m-auto justify-between text-white bg-red-500 p-2 px-5">
            <h1 className="text-3xl font-bold underline text-white">{title}</h1>
            <div className="flex gap-3">
                <img className='bg-red-900 rounded-full p-1 cursor-pointer w-[2.5rem] h-[2.5rem]' src={pokeball} alt="pokeball"></img>
                <img className='bg-red-900 rounded-full p-1 cursor-pointer w-[2.5rem] h-[2.5rem]' src={settings} alt="settings"></img>
                <img className='bg-red-900 rounded-full p-1 cursor-pointer w-[2.5rem] h-[2.5rem]' src={user} alt="user"></img>
            </div>
        </header>
        </>
    )
}
export default Header_Pokemons