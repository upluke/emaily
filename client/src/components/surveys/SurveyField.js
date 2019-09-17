// SurveyField contains loic to render a single label and text input

import React from 'react'

export default ({input,label, meta:{error, touched}})=>{  //two level's deep destructuring: looking into the meta object, give error and touched properties
  return(
    <div>
      <label>{label}</label>
      <input {...input} />
      <div className="red-text" style={{marginBottom: '20px'}}>
        {touched && error}
      </div>
    </div>
  )
}
