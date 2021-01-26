import {Formik,Form,Field} from 'formik'
import React from 'react';
export default () => {
    const handleSubmit = (val)=>{
console.log(val.name)  }
   return(
<Formik
initialValues = {{ name:""}}
onSubmit ={handleSubmit}
>
    {
        ()=>(
            <Form className = "form-controller">
 
 <Field type = "text" name = "name" className = " mt-3 form-control"/>

 <button type ="submit" className = " mt-3 btn btn-primary">Login</button>
            </Form>
        )
    }
</Formik>
   )
}
