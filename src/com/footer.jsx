import  { FaFacebookSquare , FaInstagram ,FaTwitterSquare} from "react-icons/fa";
function Fotter(){
    return(
        <div className="fotter bg-red w-full  bg-black absolute flex justify-center items-center">
            <img src="/src/assets/fotter.png "className="h-auto mt-2 w-full " ></img>
            <div className="main h-auto w-2/3 absolute mt-0 p-5 ">
                  <h2 className="text-orange-500  text-xl md:text-4xl font-bold text-center ">Fitnes Freak</h2>
                  <p className="mt-2 text-white font-roboto text-sm md:text-base lg:text-lg">Join us today and experience the transformative power of our fitness classes. Don't wait to start your fitness journey. Take the first step towards a healthier, stronger you. Let's sweat, have fun, and make fitness a way of life together!</p>
                  <div className="icon flex gap-3 items-center text-center mt-3 md:ml-80  text-white">
                      <FaFacebookSquare/>
                      <FaInstagram/>
                   <FaTwitterSquare/>
                     
                    
                  </div>
                
            </div>
          
           
        </div>
    )
}
export default Fotter;