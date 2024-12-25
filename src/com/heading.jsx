import React from 'react';
import Headingim from './headingimag.jsx'
import Image1 from '../assets/image 10.png';
import Image2 from '../assets/image 11.png';
import Image3 from '../assets/image 12.png'
import Subhead from './subhead.jsx'

function heading(){
    return(
        <div className="h-20vh md:h-25vh bg-black  w-full p-10 text-white ">
            <h2 className=" text-center">Find what moves you</h2>
<div className="desc  h-90vh p-5 flex justify-between">
    <div className="im">
        <img src="/src/assets/image 9.png" className="h-48 mt-3"></img>
        <div className="cont  w-80 font-thin flex  p-2 leading-5 gap-2 mt-2">
            <span className=" mt-6 ">GYM</span>
            <p className='font-roboto'>Expect a heart-pumping workout that will leave you feeling energized and accomplished. Our supportive community of like-minded individuals.</p>
        </div>
    </div>
      <Headingim src={Image1} text={'Zumba'}/>
      <Headingim src={Image2} text={'Yoga'}/>
      <Headingim src={Image3} text={'Martial Arts'}/>
</div>
<Subhead/>
        </div>
    )
}
export default heading;