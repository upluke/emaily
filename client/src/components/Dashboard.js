import React from 'react';
import {Link} from 'react-router-dom';

const Dashboard =()=>{
  return(
    <div>
      Dashboard ok
      <div className="fixed-action-btn">
        <Link to='/surveys/new' className="btn-floating btn-large green">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  )
}

export default Dashboard
