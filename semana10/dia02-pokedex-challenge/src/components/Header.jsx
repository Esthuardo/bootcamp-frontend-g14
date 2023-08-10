const Header = ({title}) =>{
    return(
        <header className=" m-auto bg-red-500 items-center justify-between p-5 w-[768px]">
            <h1 className="text-3xl font-bold underline text-white">{title}</h1>
        </header>
    )
}
export default Header   