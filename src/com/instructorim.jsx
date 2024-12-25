function Instructorim({src,p1,p2}){
    return(
        <div className="im h-80 w-64 grid justify-center text-center p-5 font-roboto">
            <img src={src} className="h-64 rounded-md"></img>
            <p className="mt-2">{p1}</p>
            <p>{p2}</p>
        </div>
    )
} 
export default Instructorim;