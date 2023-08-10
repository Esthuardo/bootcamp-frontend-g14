const BaseTag = ({label,type}) =>{
    return(
        <div className="rounded-md py-3 capitalize font-extrabold bg$-{type}-400/20 text-center">
            <span className="text-3xl mr-2 text-emerald-400">*</span>{label}
        </div>
    )
}
export default   BaseTag