import React from 'react'
import image from '../../img/header.png'

function Header() {
    return (

        <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src={image} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                </div>
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold lh-1 mb-3">Start to shape your future</h1>
                    <p className="lead">Choose from thousands of online video courses and start to shape your future</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <input type="text" className="form-control" placeholder="find a tutor" aria-label="Username" aria-describedby="addon-wrapping" />
                        <button type="button" className="btn btn-outline-primary">Search</button>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Header
