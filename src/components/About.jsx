import React from 'react'
import Header from './Header'
import Footer from './Footer'
import style from './about.module.css'


const About = () => {
  return (
    <>
    <Header/>

    <div className={style.AboutContainer}>

        <div className={style.aboutImage}>

        </div>

<div className={style.aboutDescContainer}>


        <div className={style.aboutDesc}>
            <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
            <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
(Hitch costs extra 😉)
<br />
<br />

Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>

        </div>

        <div className={style.aboutExplore}>
            <h1>Your destination is waiting. <br/>
Your van is ready.</h1>
            <button className={style.aboutBtn}>Explore our vans</button>

        </div>
 </div>

    </div>


    <Footer/>
    </>
  )
}

export default About