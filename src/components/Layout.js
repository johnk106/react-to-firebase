import NavBar from "./NavBar";
import UploadForm from "./uploadForm";


function LayOut({children,state,onChange,onSubmit,toggle}){
    return(
<>
        <NavBar />
        <div className="container text-center mt-5">
          <button className="btn btn-success float-end" onClick={() => toggle(!state.isCollapsed)} >{state.isCollapsed ? 'close' : 'Add Image'}</button>
          <UploadForm 
          isVisible = {state.isCollapsed}
          onChange = {onChange}
          onSubmit = {onSubmit}
          input = {state.input}
          />
          {children}
        </div>
    </>

    )
}

export default LayOut;