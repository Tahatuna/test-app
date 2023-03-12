import React, { useState, useEffect, } from 'react';
import userImage from '../../img/user.png'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import axios from 'axios';

function Profile() {

  const [isPupil, setIsPupil] = useState(false);
  const [user, setUser] = useState(null);
  const [render, setRender] = useState(null)
  const [requests, setRequests] = useState(null)
  const [notifications, setNotifications] = useState(null)

  useEffect(() => {
    const profile = localStorage.getItem('profile');
    if (profile === 'pupil') {
      setIsPupil(true);
      const userId = localStorage.getItem('userId');
      fetch(`http://localhost:8080/pupils/${userId}`)
        .then((response) => response.json())
        .then((data) => setUser(data));


      axios.get(`http://localhost:8080/demands/pupil/${userId}`).then(response => {
        setNotifications(response.data)
      }).catch(error => {
        console.log(error)
      })
    } else if (profile === 'educater') {
      setIsPupil(false);
      const userId = localStorage.getItem('userId');
      axios.post("http://localhost:8080/educater/getByIdEducater", { id: userId })
        .then(response => {
          setUser(response.data);
        })
        .catch(error => {
          console.log(error);
        });
      axios.get(`http://localhost:8080/demands/educater/${userId}`)
        .then(response => {
          setRequests(response.data)
          console.log(requests)
        }).catch(error => {
          console.log(error)
        })
    } else {
      setIsPupil(false);
      setUser(null);
    }
  }, []);


  const approve = async (id) => {
    await axios.put(`http://localhost:8080/demands/${id}/status/APPROVED`)
  }

  const reject = async (id) => {
    await axios.put(`http://localhost:8080/demands/${id}/status/REJECTED`)
  }

  return (
    <div className="container">
      {user && (

        <div className="row">
          <div className="col-4">
            <div className='border border-3 m-5 rounded-3'>
              <div className='col-12'>
                <img src={userImage} className="img-fluid m-3" alt="Bootstrap Themes" width="276" height="500" loading="lazy" />
                <div className='row'>
                  <h1 className='display-6 text-center'>{user.name} {user.lastName}</h1>
                </div>

                {isPupil && (
                  <div className="d-flex flex-column my-3">

                    <button className="btn btn-outline-primary mb-3" onClick={() => setRender("personelInfo")} >
                      Personel İnfo
                    </button>

                    <button className="btn btn-outline-primary mb-3" onClick={() => setRender("payments")} >
                      Payments
                    </button>

                    <button className="btn btn-outline-primary mb-3" onClick={() => setRender("notifications")} >
                      Notifications
                    </button>

                    {/* ** */}
                    <Link className="btn btn-outline-primary mb-3 disabled" tabIndex="-1" aria-disabled="true">
                      Tutors
                    </Link>
                    <Link className="btn btn-outline-primary mb-3 disabled" tabIndex="-1" aria-disabled="true">
                      Favorites
                    </Link>
                    <Link className="btn btn-outline-primary mb-3 disabled" tabIndex="-1" aria-disabled="true">
                      Messages
                    </Link>
                    {/* ** */}

                  </div>
                )}


                {!isPupil && (

                  <div className="d-flex flex-column my-3">

                    <button className="btn btn-outline-primary mb-3" onClick={() => setRender("personelInfo")} >
                      Personel İnfo
                    </button>

                    <button className="btn btn-outline-primary mb-3" onClick={() => setRender("lessons")} >
                      Lessons
                    </button>

                    <button className="btn btn-outline-primary mb-3" onClick={() => setRender("request")}>
                      Requests
                    </button>

                    {/* ** */}
                    <Link className="btn btn-outline-primary mb-3 disabled" tabIndex="-1" aria-disabled="true">
                      Tutors
                    </Link>
                    <Link className="btn btn-outline-primary mb-3 disabled" tabIndex="-1" aria-disabled="true">
                      Favorites
                    </Link>
                    <Link className="btn btn-outline-primary mb-3 disabled" tabIndex="-1" aria-disabled="true">
                      Messages
                    </Link>
                    {/* ** */}
                  </div>
                )}

              </div>
            </div>
          </div>
          <div className="col-8">

            {render === "personelInfo" ? <PersonelInfo /> : render === "payments" ? <Payments /> : render === "lessons" ? <Lessons /> : render === "request" ? <Requests /> : render === "notifications" ? <Notifications /> : null}

          </div>
        </div>
      )}
    </div>
  );

  function PersonelInfo() {
    return (
      <div>

        <div className="container mt-5">

          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">First Name</label>
            <input class="form-control" id="exampleFormControlInput1" placeholder={user.name}></input>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Last Name</label>
            <input class="form-control" id="exampleFormControlInput1" placeholder={user.lastName}></input>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Password</label>
            <input class="form-control" id="exampleFormControlInput1" placeholder="*******"></input>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">About me</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <button className='float-end btn btn-primary btn-md'>Save</button>
        </div>

      </div>
    );
  }


  function Payments() {

    return (

      <div>

        ödeme
      </div>
    );
  }

  function Requests() {
    return (
      <div className="container mt-5">
        {requests.map((item) => (
          <div className='mt-3' key={item.id}>
            <div className="card">
              <div className="card-header">{`Status: "${item.status}"`}</div>
              <div className="card-body">
                <h5 className="card-title">{`There is a request for your "${item.lesson.lessonName}" class`}</h5>
                <p className="card-text">{`request sent by ${item.pupil.userName} mail: ${item.pupil.mail} and phone number: ${item.pupil.telNo} you can contact ${item.pupil.userName} using contact details.`}</p>
                <button className="btn btn-success me-1" onClick={() => approve(item.id)} >Approve</button>
                <button className="btn btn-danger" onClick={() => reject(item.id)}>Reject</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }


  function Lessons() {
    return (
      <>
        <div className='container mt-5'>
          {user.lessons.map((item) => (
            <div key={item.id}>
              <div className="card border-black mb-3" style={{ maxWidth: '18rem' }}>
                <div className="card-header">{item.category}</div>
                <div className="card-body text-primary">
                  <h5 className="card-title">{item.lessonName}</h5>
                  <p className="card-text">{item.description}</p>
                  <p className="card-text">${item.price}</p>
                </div>
                <button className='btn btn-outline-danger'>Remove</button>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }


  function Notifications() {
    return (
      <div className="container mt-5">
        {notifications.lessons.map((item) => (
          <div className='mt-3' key={item.id}>
            <div className="card">
              <div className="card-header">{`Status: "${item.status}"`}</div>
              <div className="card-body">
                <h5 className="card-title">{`There is a request for your "${item.lessonName}" class`}</h5>
                <p className="card-text">{`request sent by ${item.pupil.userName} mail: ${item.pupil.mail} and phone number: ${item.pupil.telNo} you can contact ${item.pupil.userName} using contact details.`}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    )

  }

}

export default Profile;

