function headingim({src ,alt,text}){
    return(
        <div className="relative ">
            <img src={src} alt={alt} className="md:h-72  h-36 md:w-40 w-10  object-contain md:mt-8"></img>
            <div className=" absolute inset-0 flex items-center md:items-end  bg-black justify-center bg-opacity-50 text-white text-center">
                {text}
            </div>
        </div>
    )
}
export default headingim;