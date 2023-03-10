import React, { useContext, useState } from 'react'
import { useFormik } from 'formik';
import validationSchema from "./validations"
import axios from 'axios';

function SigninModal() {

    const [errorLogin, setErrorLogin] = useState({ message: "", messageCode: "" });

    const { handleSubmit, handleChange, values, errors } = useFormik({
        initialValues: {
            userName: '',
            password: '',
        },
        onSubmit: async values => {
            try {
                const response = await axios.post('http://localhost:8080/login', values);
                console.log(response.data);

                if (!response.data.messageCode) {

                    if (!response.data.subscriptionStatus) {
                        console.log("educater profili saglandi")
                        localStorage.setItem("profile", "educater")
                    } else {
                        console.log("pupil profili saglandi")
                        localStorage.setItem("profile", "pupil")
                        localStorage.setItem("subscribed", response.data.subscriptionStatus)
                    }
                    localStorage.setItem("userId", response.data.id)
                    localStorage.setItem("userName", response.data.userName)
                    window.location.reload(false);
                } else {
                    setErrorLogin(JSON.stringify(response.data.message))
                    alert(errorLogin)
                }

            } catch (error) {
                console.error(error.response.data);
            }
        },
        validationSchema
    });


    return (
        <div class="modal fade bg-dark" id="signin" data-bs-backdrop="static" data-bs-keyboard="true" tabindex="-1" aria-labelledby="signin" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content" style={{ height: 550 }}>
                    <div class="modal-header">
                        <h1 class="modal-title fs-5 mx-auto col-11 ms-4 m-3" id="signin">Welcome to Pupilty</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">

                        <form onSubmit={handleSubmit}>

                            <div class="container">

                                <div class="row col-10 mx-auto mb-4">

                                    <label htmlFor="userName" className='text-start mt-4 fs-5' style={{ marginLeft: -10 }}>Username</label>
                                    <input className=" form-control" id="userName" name="userName" placeholder="Jane" onChange={handleChange} value={values.userName} />
                                    {errors.userName && (<div className="text-start fs-9">Username must be longer than 5 characters</div>)}
                                </div>

                                <div class="row col-10 mx-auto mb-5">

                                    <label htmlFor="password" className='text-start fs-5' style={{ marginLeft: -10 }}>Password</label>
                                    <input className="form-control" id="password" name="password" type="password" placeholder="*****" onChange={handleChange} value={values.password} />
                                    {errors.password && (<div className="text-start fs-9">Password must be longer than 5 characters</div>)}
                                </div>
                                <button type="submit" class="btn btn-primary mt-3 mx-auto" style={{ width: 372 }}>Log in</button>
                            </div>

                        </form>

                    </div>
                    <div className="modal-footer">
                        <p className='fs-8 text-center col-12'>Don't have an account yet? <a data-bs-toggle="modal" href='#signup'>Sign up</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SigninModal;
