import Card from "./components/Card";
import { useState,useEffect,useReducer, useContext } from "react";
import LayOut from "./components/Layout";
import { context } from "./context";
import app from './lib/firebase.config';




function App() {
  const {dispatch,state} = useContext(context);
  const [count,setCount] = useState();
  const handleOnChange = (e) => dispatch({type:'setInput',payload:{value:e}});

  useEffect(() => {
    app();
  })

 

  const  handleOnSubmit = (e) => {
    e.preventDefault();
    //setItems([input.path,...items]);
    dispatch({type:'setItem'});
    toggle(!state.isCollapsed)
  
  };

  const toggle = (bool) => dispatch({type:'collapse',payload:{bool}})

  useEffect(() => {
    console.log(state)

  })

  useEffect(() => {
    setCount(`You have ${state.items.length} image${state.items.length > 1 ? 's' : ''} `);
  },[state.items]);

  return (
   
     

       <LayOut 
       state = {state}
       toggle={toggle}
       onChange = {handleOnChange}
       onSubmit = {handleOnSubmit}
       >
       <div className="clearfix mb-5"></div>
        <h1>Gallery</h1>
        <h6>{count}</h6>
        <div className="clearfix mb-5"></div>
        <div className="row">
          {state.items.map((item,index) => (
            <Card {...item} key = {index}/>
          ))}
        </div>
       </LayOut>
   
   
  );
}

export default App;
