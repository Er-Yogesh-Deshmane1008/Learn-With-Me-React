import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
     <div className = "w-full h-screen duration-200"
     style = {{backgroundColor:color}}
     >
      <div className="fixed flex flex-wrap 
      justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg
         text-white bg-white px-3 py-2 rounded-3xl">
         <button
         onClick={() => setColor("Yellow")}
         className="outline-none px-4 py-1 rounded-full
         text-white shadow-lg"
         style={{backgroundColor:"yellow"}}
         >Yellow</button> 
          <button
          onClick={() => setColor("Navy")}
         className="outline-none px-4 py-1 rounded-full
         text-white shadow-lg"
         style={{backgroundColor:"navy"}}
         >Navy</button> 
          <button
          onClick={() => setColor("green")}
         className="outline-none px-4 py-1 rounded-full
         text-white shadow-lg"
         style={{backgroundColor:"green"}}
         >Green</button> 
          <button
          onClick={() => setColor("purple")}
         className="outline-none px-4 py-1 rounded-full
          text-white shadow-lg"
         style={{backgroundColor:"purple"}}
         >purple</button> 
          <button
          onClick={() => setColor("Red")}
         className="outline-none px-4 py-1 rounded-full
         text-white shadow-lg "
         style={{backgroundColor:"red"}}
         >Red</button> 
          <button
          onClick={() => setColor("black")}
         className="outline-none px-4 py-1 rounded-full
         text-white shadow-lg"
         style={{backgroundColor:"black"}}
         >Black</button> 
          <button
          onClick={() => setColor("orange")}
         className="outline-none px-4 py-1 rounded-full
         text-white shadow-lg"
         style={{backgroundColor:"Orange"}}
         >Orange</button> 
         <button
         onClick={() => setColor("Maroon")}
         className="outline-none px-4 py-1 rounded-full
         text-white shadow-lg"
         style={{backgroundColor:"maroon"}}
         >Maroon</button> 
         <button
         onClick={() => setColor("silver")}
         className="outline-none px-4 py-1 rounded-full
         text-black shadow-lg "
         style={{backgroundColor:"silver"}}
         ><label>Search Color:  <input type="text"/></label>
          Silver</button> 
         </div></div>
     </div>
    </>
  )
}

export default App
