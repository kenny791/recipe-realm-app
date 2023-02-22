import React from 'react'

export default ({ title, id, value, aid, prompt, required, updateEntry}) => {
  return (
    <div className="form-group m-3">
        <label htmlFor={id}>{title} 
            <span className="fw-light">{aid}</span>
        </label>
        <input type="text" className="form-control" 
            id={id} 
            value={value} 
            placeholder={prompt} 
            onChange={updateEntry} 
            required={required}/>
    </div>
  )
}


