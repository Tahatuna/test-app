import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from '../Navbar';

function Tutors() {

    const [tutors, setTutors] = useState([]);

    useEffect(() => {

        (async () => {

            const response = await axios.get("http://localhost:8080/lessons/getAllLessons")
            console.log(response.data)
            setTutors(response.data)

        })();



    }, [])


    return (

        <>
            <div className='container'>
                <div className='row'>

                    {tutors.map((item) =>
                        <div className='col-lg-4 col-sm-12 mb-5' key={item.id}>
                            {/* {item.educater.userName} */}
                            <div className="card" style={{ width: 400 }}>
                                <div class="card bg-dark text-white">
                                    <img src={`data:image/png;base64,${item.educater.image.imageByte}`} class="card-img-top" alt={item.educater.image.fileName} />
                                    <div class="card-img-overlay h-100 d-flex flex-column justify-content-end">
                                        <h5 class="card-title fs-1">{item.educater.name + " " + item.educater.lastName}</h5>
                                        <p class="card-text">{item.category}</p>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">{item.description}</p>
                                    <div className='row'>
                                        <div className='col-8'>
                                            <a href="#" className="btn btn-lg btn-outline-primary">BOOK A LESSON</a>
                                        </div>
                                        <div className='col-4'>
                                            <p className='fs-2'>${item.price} </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </>
    );
}

export default Tutors
