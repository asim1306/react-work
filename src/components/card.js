import React from 'react'



const Card = (props) => {
  return (
    <div>
       <div className="card mb-3 mt-5 m-5">
  <img src={props.image} className="card-img-top " alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description}</p>
    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
    <h5>{props.subtitle}</h5>
    <p>{props.members}</p>
  </div>
</div>
    </div>
  )
}

export default Card
