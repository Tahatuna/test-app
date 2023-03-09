import React from 'react'

function SignupModal() {
  return (
    <div>
      <div className="modal fade bg-dark" id="signup" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="signup" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5 mx-auto col-11 ms-4" id="signup">Create an account</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              ...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary mx-auto" style={{ width: 400 }}>Create account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupModal
