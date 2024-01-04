import React from 'react'
import '../styles/Home.css'
import profileImg from '../assests/profile.jpg'

function Home() {
  return (
    <>
    <div className="main">
      <div className="left-img">
        <img src={profileImg} alt="" />
        <div className="name">
          <div className="name1">Kruti</div>
          <div className="name2">Dewda</div>
        </div>
        
      </div>
      <div className="right">
        <div className="nav">
          <ul>
            <li>Home</li>
            <li>Projects</li>
            <li>Contacts</li>
          </ul>
        </div>
        <div className="head">
          <div className="title">
            <h1>Hello,</h1>
            <h1 className='underline'>Let's make your pictures weird</h1>
          </div>
          

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum reiciendis necessitatibus adipisci hic repudiandae consequatur porro quam iste natus explicabo eum voluptates tempora, maxime ea in quo officiis. Quod, quibusdam. Lorem ipsum dolor sit. </p>
          <br />
          <br />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem possimus reprehenderit, tenetur veritatis molestias pariatur eum earum delectus, hic saepe quisquam dolore voluptatem ducimus fugit at ea deserunt, sit aliquam! Lorem ipsum dolor sit amet.</p>
        <div className="submit">
        <button>PING ME</button>
        </div>
       
        </div>

        
      </div>
    </div>
    </>
  )
}

export default Home