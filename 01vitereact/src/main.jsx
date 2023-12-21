import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function Mynewapp(){
    return(
        <p>new app</p>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <><App />
    <Mynewapp />
    </>
    
    
  
    
)
