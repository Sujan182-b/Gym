import Svgbutton from "./svgButton";
function Classesimg({img ,alt ,p1,p2,p3,p4,p5}){
    return(
        <div className="pic md:h-10vh h-64 w-96  grid   justify-center text-white mt-7 font-roboto leading-3">
<img src={img} alt={alt} className="md:h-24 h-10 mt-5"></img>
<p>{p1}</p>
<h1>{p2}</h1>
<p>{p3}</p>
<p>{p4}</p>
<p>{p5}</p>


  <Svgbutton text={'Start free trial'}/>
</div>
        
    )
}
export default Classesimg;