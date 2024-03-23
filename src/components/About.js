import React from 'react'
import Card from './card'
import logo from './logo.svg'

let project="This is a react project in which we made re-usable Navbar and a Card. We created three pages Home, About ,Contact and use the router dom to connect them"

let mem = "The members of our team are Asim Kalim, Bikram Barman , Piyush Chauhan."
const About = () => {
  return (
    <div className='w-50 m-auto'>
      <Card image={logo} title={"About Project"} description={project} subtitle={"Team Members"} members={mem}/>
    </div>
  )
}

export default About
