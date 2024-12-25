import Classesimg from "./classesimg";
import Image1 from '../assets/Rectangle 13.png'
import Image2 from '../assets/Rectangle 2.png'
import Image3 from '../assets/Rectangle 3.png'
function Classes(){
    return(
        <div className="cl relative h-5vh text-white  w-full">
            <img src="/src/assets/Rectangle 12.png" className="w-full h-5vh absolute "></img>
            <div className="mai  absolute h-60vh p-5 w-full  flex  mt-16">
                <h1 className=" font-bold font-roboto absolute left-1/2 top-2 md:text-xl">Classes</h1>
<Classesimg img={Image1} alt={'Image1'} p1={'Yoga'} p2={'Strength and sweat'} p3={'Instructor:Esther Howard'} p4={'No. of Classes:30'} p5={'Difficulty:Beginner'}/>
<Classesimg img={Image2} alt={'image2'} p1={'Fitness'} p2={'Total Body Burnout'} p3={'Instructor:Wade Warren'} p4={'No. of Classes:45'} p5={'Difficulty:Medium'}/>
<Classesimg img={Image3} alt={'image2'} p1={'Yoga'} p2={'Bootcamp Challenge'} p3={'Instructor:Robert Fox'} p4={'No. of Classes:52'} p5={'Difficulty:Hard'}/>
            </div>
        </div>
    )
}
export default Classes;