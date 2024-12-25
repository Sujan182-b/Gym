import Nav from './Nav.jsx'
import Heading from './heading.jsx'
import Classes from './classes.jsx'
import Instructor from './instructor.jsx'
import Client from './clinentfeed.jsx'
import Fotter from './footer.jsx'
function Main(){
return(
    <>
    <div className="main h-20vh relative ">
        <img src='/src/assets/1.png 'className='absolute h-20vh' ></img>
   <Nav/>
   
    </div>
    <Heading/>
    <Classes/>
    <Instructor/>
    <Client/>
  
<Fotter/>
    </>
) 
   
}
export default Main;