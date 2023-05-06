import { createContext } from "react";
import { useReducer } from "react";


export const context = createContext();

const photos = [
  
];
const initialState = {
  items:photos,
  count:photos.length,
  input:{title:null,file:null,path:null},
  isCollapsed:false

}

const handleOnChange = (state,e) => {
  if(e.target.name === 'file'){
    const objectUrl = URL.createObjectURL(e.target.files[0]);
    return { ...state.input, file: e.target.files[0], path: objectUrl };
  }else{
    return {...state.input,title:e.target.value}
  }
};

function reducer(state,action){
  switch(action.type){
    case 'setItem':
      return {
        ...state,
        items:[state.input,...state.items],
        count:state.items.length + 1,
        input:{title:null,file:null,path:null}

      }
    case 'setInput':
      return{
        ...state,
        input:handleOnChange(state,action.payload.value)
      }
    case 'collapse':
      return {
        ...state,
        isCollapsed:action.payload.bool
      }
    default: return state
  }

}



const Provider = ({children}) => {
    const [state,dispatch] = useReducer(reducer,initialState)

    return <context.Provider value={{state,dispatch}}>{children}</context.Provider>
}

export default Provider;