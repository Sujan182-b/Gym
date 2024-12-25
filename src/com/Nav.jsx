import Svgbutton from './svgButton.jsx';
 function Nav(){
    return(
        <>
          <div className="nav absolute -top-1 left-0 w-full p-7 font-medium flex justify-between items-center ">
           <h2 className="text-orange-500  text-xl md:text-2xl">Fitnes Freak</h2>
           <div className="con">
            <ul className="flex text-white gap-3 md:gap-7 cursor-pointer ml-2">
                <li >Classes</li>
                <li>Team</li>
                <li>AboutUs</li>
                <li>Gallery</li>
            </ul>
           </div>
           <Svgbutton text='Contact Us'/>
        </div>
        <div className="head absolute h-96 w-64 md:w-96  top-28 left-8 md:top-48 md:left-16 p-5 font-bold">
           <div className=" p-3  text-xl md:text-2xl" >
            <span style={{color:'#FF4300'}}>Unleash</span><span className='text-white'>Your</span><p className='text-white'>
            Inner Athlete</p>
           </div>
           <p className='font-medium text-white leading-relaxed mt-2 md:text-base font-pop'>Get ready to sweat it out and achieve your fitness goals with our high-energy fitness classes! Our classes are designed to cater to all fitness levels and provide a fun and motivating environment to help you reach your peak performance.</p>
<Svgbutton  text='Start free trail' classname='mt-5' />
        </div>
  </>
        
    )
}
export default Nav;