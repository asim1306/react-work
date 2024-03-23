import React from 'react'
import hammer from '../dbz.jpg'
import Card from './card'


let desc = "Dragon Ball Z, an iconic anime series created by Akira Toriyama, is renowned for its epic battles, captivating storylines, and memorable characters. Following the adventures of Goku and his friends, the series explores themes of friendship, perseverance, and the eternal struggle between good and evil. With its dynamic fight scenes and power-ups, Dragon Ball Z has left an indelible mark on popular culture, inspiring countless fans worldwide. The series' fusion of martial arts, science fiction, and fantasy elements continues to captivate audiences of all ages, cementing its status as a beloved classic in the realm of anime.";


const Home = (props) => {
  return (
   <Card image={hammer} title={"Dragon Ball Franchise"} description={desc}/>
  )
}

export default Home
