import { useMemo } from 'react';

function Preview({ path }){
    return(
      path &&  <div className='rounded p-1 m-5' style={{
            width:"100%",
            height:"300px",
            backgroundImage:`url(${path})`,
            backgroundSize:"cover",
            
        }}></div>
    );
}


function UploadForm({ isVisible,onChange,onSubmit,input}) {
    const isDisabled = useMemo(() => {
        return !!Object.values(input).some(input => !input)

    },[input])
  return (
    isVisible && <>
    <div className='row'>
        <div className='col-md-5'>
            <Preview {...input}/>
        </div>
        <div className='col-md-1'>

        </div>

        <div className='col-md-4'>
        <form onSubmit={onSubmit}>
      <h1>Upload stock image</h1>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label"></label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="title"
          onChange={onChange}
          name="title"
        />
      </div>
      <div className="input-group mb-3">
        <label htmlFor="file" className='input-group-text'>
          Image file
        </label><br/>
        <input type="file" id="the_file" className='form-control' name="file" onChange={onChange} />
      </div>
      <button type="submit" className="btn btn-success mb-5 float-end" disabled={isDisabled}>
    Save Changes
      </button>
    </form>
        </div>

    </div>
 
    </>
  );
}

export default UploadForm;
