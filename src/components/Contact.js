import React from 'react'

const Contact = () => {
  return (
    <div>
      <form className='mt-5 m-5 border p-3 grey bg-info'>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <div className="form-floating mt-3 mb-3">
    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" ></textarea>
    <label for="floatingTextarea2">....</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
  
</form>
    </div>
  )
}

export default Contact
