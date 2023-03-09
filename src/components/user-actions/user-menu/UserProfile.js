import React from 'react'

function UserProfile() {



    const removeStorage = () => {

        localStorage.removeItem("userName")
        localStorage.removeItem("userId")
        localStorage.removeItem("profile")
        localStorage.removeItem("subscription")

        window.location.reload(false)

    }

    return (
        <>
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <a className="nav-link" href="#">BECOME A TUTOR</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                        </svg>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <hr/>
                        <li><a className="dropdown-item" href="#">Help</a></li>
                        <li><a className="dropdown-item" href="#" onClick={removeStorage} >Log-out</a></li>
                    </ul>
                </li>
            </ul>
        </>
    )
}

export default UserProfile
