//surveyform shows a form for a user to add input
import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form'; // is more like connect helper
import {Link} from 'react-router-dom'
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails'


const FIELDS=[
  {label:'Survey Title', name:'title'},
  {label:'Subject Line', name:'subject'},
  {label:'Email Body', name:'body'},
  {label:'Recipient List', name:'emails'}
];


class SurveyForm extends Component {
  renderFields(){
    return FIELDS.map(({label, name})=>{
      return (
        <Field key={name} component={SurveyField} type="text" label={label} name={name}  />
      );
    });
  }


  render(){
    return(
      <div>
        <form onSubmit={this.props.handleSubmit(values=>console.log(values))}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors={};
  // reudxForm automatically matches up the errors are returning from that function to the different fields you're rendering
    errors.emails=validateEmails(values.emails|| '')
    FIELDS.forEach(({name})=>{
     if(!values[name]){
       errors[name]='You must provide a value';
     }
   })

  return errors;
}

export default reduxForm({
  validate,
  form:'surveyForm'
})(SurveyForm);
