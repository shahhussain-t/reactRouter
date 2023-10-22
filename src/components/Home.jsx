import React from 'react'
import Header from './Header'
import Footer from './Footer'
import style from './home.module.css'

const Home = () => {
  return (
    <>
    <Header/>
    <div className={style.HomeContainer}>
        <div className={style.HomeSubContainer}>

        <div className={style.homeHeading}>
            <h1>You got the travel plans, we got the travel vans.</h1>
        </div>

        <div className={style.HomePara}>
            <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
        </div>

        <div className={style.homeBtn}>
            <button className={style.findBtn}>Find your van</button>
        </div>
        </div>

    </div>

    <Footer/>


    </>
  )
}

export default Home