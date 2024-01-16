import Image from "../Components/Images/MyImage.png";

const user = {
    name :' Yogesh',
    lastName : 'Deshmane',
    image : Image,
    
}

export default function profile(){
    return(
        <>
        <h1>{user.name}</h1>
        <div id='img'>
        <img 
        className='Avatar'
        src = {user.image}
        alt={'Photo of ' + user.name}
        Style =
        {{
           
        }}
        />
        </div>
        
        </>
    );
}