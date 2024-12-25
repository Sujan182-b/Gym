import Clientimg from './clientimg'

import Image1 from '../assets/star.png'
import Image2 from '../assets/s1.png'
import Image3 from '../assets/s3.png'
import Image4 from '../assets/s2.png'

function Client(){
    const icon = Array(5).fill(Image1)
    return(
        <div className="client  h-5vh w-full   flex justify-center gap-8 text-white  items-center bg-red-600">
            <img src="/src/assets/Rectangle 12.png" className="w-full h-5vh absolute"></img>
            <h1 className='relative font-roboto font-bold md:font-2xl '>Client’s Feedback</h1>
            <Clientimg src={Image2} star={icon} p1={'Al-Balad is essentially Jeddah old town. It was once surrounded by a wall, but now only the gates re'} p2={'Courtney Henry'}/>
            <Clientimg src={Image3} star={icon} p1={'This a great historic site to visit. I rented a little cart and the driver was a really good friendl'} p2={'Brooklyn Simmon'}/>
            <Clientimg src={Image4} star={icon} p1={' had been to Al Balad several times. It is one of my favorite places in Jeddah. It is historic, ful'} p2={'Jane Cooper'}/>
        </div>
    )
}
export default Client;