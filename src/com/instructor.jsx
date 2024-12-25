import Image1 from '../assets/Rectangle 17.png'
import Image2 from '../assets/Rectangle 18.png'
import Image3 from '../assets/Rectangle 19.png'
import Image4 from '../assets/Rectangle 20.png'
import Instructorim from './instructorim';
function Instructor(){
    return(
        <div className="in text-white h-96 bg-black p-5 flex gap-4 relative">
            <h1 className='absolute left-1/7 -top-8 md:-top-10 font-bold font-roboto text-xl '>Instructor</h1>
            <Instructorim src={Image1} p1={'Jacob Jones'} p2={'Gym trainer'}/>
            <Instructorim src={Image2}  p1={'Leslie Alexander'} p2={'Gym trainer'}/>
            <Instructorim src={Image3}  p1={'Cameron Williamso'} p2={'Gym trainer'}/>
            <Instructorim src={Image4}  p1={'Jane Cooper'} p2={'Gym trainer'}/>
        </div>
    )
}
export default Instructor;