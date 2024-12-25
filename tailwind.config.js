/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { height: { '30vh': '160vh', '20vh': '159.6vh' , '25vh':'154vh','130vh': '30vh', '60vh': '170vh', '5vh':'120vh','2vh':'80vh','10vh':'80vh','8vh':'30vh'},
    colors:{
      black:'#010101'
    },
    inset:{
'1/7':'48%'
    },
    fontFamily:{
roboto:['Outfit'],
pop:['Poppins']
    }}
    ,},
 
  plugins: [],
}

