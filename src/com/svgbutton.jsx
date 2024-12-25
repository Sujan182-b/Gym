function Svgbutton({text,classname}){
    return(
        <>
         <svg xmlns="http://www.w3.org/2000/svg" width="180" height="40" viewBox="0 0 185 45" fill="none" className={`cursor-pointer ${classname}`}>
<path d="M0 0H185L175.5 45H0V0Z" fill="#FF6201" fill-opacity="0.5"/>
<path d="M0 0H185L167.5 45H0V0Z" fill="#FF4601" />
<text fill="white" x="50%" y='50%' textAnchor="middle" dominant-baseline="middle">{text}</text>
</svg>
        </>
    )
}
export default Svgbutton;