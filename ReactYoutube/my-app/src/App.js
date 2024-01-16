import MyButton from "./Components/MyButton";
import YoutubeLogo from "./Components/Images/youtube.png";
import User from "./Components/User";
import './App.css'

function App() {
  return (
   <>
   
   {/* <MyButton />  */}
   <div id="cen">
   <MyButton /><img src={YoutubeLogo} style={{width:30, heigth:30,}}></img> <b>Youtube</b>
   </div>
    <User />
   <h1> hello friends</h1>
   
   </>
  );
}

export default App;
