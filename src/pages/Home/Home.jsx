import React from 'react'
import Header from '../../componets/Header/Header'
import './Home.scss';
import Posts from '../../componets/Feed/Posts/Posts';
import Footer from '../../componets/Footer/Footer';



const Home = () => {

  const lista = [1, 2, 3]
  return (
    <>
    <Header/>
    <main className='home-main'>


      
      {lista.map(()=>(
        <Posts />
      ))}

      <Posts />

    </main>
    <Footer />
    </>
  )
}

export default Home