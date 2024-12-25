import Clienti from './clienti.jsx'
function ClientImg({src,alt,star,p1,p2}){
    return(
        <div className="clientimg h- w-64 bg-black text-white relative p-8  grid justify-around rounded-md  mt-14 ">
           <p className='mt-4'>{p1}</p>
           <div className="im ">
             <div className="flex space-x-2 mt-4"> {star.map((star, i) => ( <Clienti key={i} src={star} alt={`Star icon ${i + 1}`} /> ))} </div>
           </div>
           <div className="il flex mb-5 justify-center ">
            <img src={src} className=' w-12 h-12 '></img>
            <p className='mt-2 ml-3 text-sm font-roboto'>{p2}</p>
           </div>
          
          
        </div>
    )
}
export default ClientImg;