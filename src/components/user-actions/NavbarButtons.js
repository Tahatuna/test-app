import React from 'react'

function NavbarButtons() {
    return (
        <div className='btn-group'>

            <ul className="navbar-nav">


                <button type="button" className="btn btn-outline-light me-2" data-bs-toggle="modal" data-bs-target="#signin">
                    Sign in
                </button>


                <button type="button" className="btn btn-outline-light me-2" data-bs-toggle="modal" data-bs-target="#signup">
                    Sign up
                </button>


            </ul>

        </div>
    )
}

export default NavbarButtons
