import React from 'react'

export default ({ title, id, value, aid, prompt, updateEntry}) => {
  return (
    // <div className="form-group m-3">
    //     <label htmlFor="name">{title}</label>
    //     <input type="text" className="form-control" id={id} onChange={updateEntry} value={value} required/>
    // </div>
    <div className="form-group m-3">
        <label htmlFor={id}>{title} 
            <span className="fw-light">{aid}</span>
        </label>
        <input type="text" className="form-control" id={id} placeholder={prompt} onChange={updateEntry} value={value} required/>
    </div>
  )
}


