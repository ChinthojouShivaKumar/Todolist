import { useEffect, useState } from "react";
import './todo.css'
// import "./App.css"


function Todos(){

    let [todoo,setTodo] = useState([])
    let [val,setVal] = useState("")
    


    let Submitting=(e)=>{

        e.preventDefault()

            setVal(e.target[0].value)

        
        e.target[0].value = ''
    }

  

    useEffect(()=>{


        if(val!=''){
            setTodo([...todoo,val])
        } 

        
    }, [val])

    console.log(todoo);


    let dis = todoo.map((x,y,z)=>{

        return(
            <div>
                <p>{x}</p>

                <button id="btn1" class='btn1' onClick={()=>{
                    let a = prompt(`Edit the value of ${x}`)
                     
                    todoo.splice(y,1,a)

                    setTodo([...todoo])

                    
                }}>Edit</button>


                <button id="btn1" class='btn2' onClick={()=>{

                  
                    
                    todoo.splice(y,1)

                    setTodo([...todoo])
                    
                    console.log(todoo);
                }}>Delete</button>
            </div>
        )
    })

    

    return(


        <div>
            <h2>Todo list</h2>
            <form id="for" onSubmit={Submitting}>
                <input type="text" name="text"/>
                {/* <input  type="submit" value="submit" /> */}
                <button id='btnn' >Add</button>
                <h1>{dis}</h1>
                
            </form>
            
            
        </div>
    )
    
}

export default Todos

