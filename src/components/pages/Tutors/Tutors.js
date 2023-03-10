import React, { useEffect, useState } from 'react';
import image from '../../img/development.jpg'
import axios from 'axios';

function Tutors({ category }) {

    const [tutors, setTutors] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let response;
            if (category) {
                response = await axios.get(`http://localhost:8080/lessons/getLessonsByCategory?category=${category}`);
                console.log("category buraya istek geldi")
            } else {
                response = await axios.get(`http://localhost:8080/lessons/getAllLessons`);
                console.log(category)
            }
            setTutors(response.data);
        };
        fetchData();
    }, [category]);

    return (
        <>

            <div className="container col-xxl-12 px-5">
                <div className="row flex-lg-row align-items-center g-5 py-5 mb-3">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <h1 className='fs-4'>All Tutors</h1>
                        <p className='lead'>lorem ipsum lorem ipsum sit amela dolor</p>
                        <img src={image} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-6 fw-bold lh-1 mb-3 text-center">IMPROVE YOUR DEVELOPMENT SKILLS</h1>
                        <div className="d-grid d-md-flex justify-content-md-center">

                            <div class="card" style={{ width: 500 }}>
                                <div class="card-body">
                                    <p class="card-text display-6">Lorem ipsum dolora site amea quasi ipsam facilis cum obcaecati sunt animi.</p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>


                {/* *** */}

                <div className='row'>
                    {tutors.map((item) => (
                        <div className='col-lg-4 col-sm-12 mb-5' key={item.id}>
                            <div className='card' style={{ width: 400 }}>
                                <div class='card bg-dark text-white'>
                                    <img src={`data:image/png;base64,${item.educater.image.imageByte}`} class='card-img-top' alt={item.educater.image.fileName} />
                                    <div class='card-img-overlay h-100 d-flex flex-column justify-content-end'>
                                        <h5 class='card-title fs-1'>{item.educater.name + ' ' + item.educater.lastName}</h5>
                                        <p class='card-text'>{item.category}</p>
                                    </div>
                                </div>
                                <div className='card-body'>
                                    <p className='card-text'>{item.description}</p>
                                    <div className='row'>
                                        <div className='col-8'>
                                            <a href='#' className='btn btn-lg btn-outline-primary'>
                                                BOOK A LESSON
                                            </a>
                                        </div>
                                        <div className='col-4'>
                                            <p className='fs-2'>${item.price} </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    );
}

export default Tutors;
