import React from 'react'

export default ({ title, aid, id, value, prompt, updateEntry}) => {
  return (
    // <div className="form-group m-3">
    //     <label htmlFor="description">{title}</label>
    //     <textarea className="form-control" id={id} onChange={updateEntry} value={value} required/>
    // </div>

    <div className="form-group m-3">
        <label htmlFor={id}>{title} 
            <span className="fw-light">{aid}</span>
        </label>
        <textarea className="form-control" id={id} placeholder={prompt} required onChange={updateEntry} value={value}/>
    </div>
  )
}

