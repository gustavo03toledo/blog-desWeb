import React from 'react'
import Header from '../../componets/header/Header'
import Footer from '../../componets/Footer/Footer'
import logoAzul from '../../img/logoBlog2.svg'
import netflix from '../../img/netflix.svg'
import hbo from '../../img/hbo.svg'
import prime from '../../img/prime.svg'
import apple from '../../img/apple.svg'
import './Sobre.scss'

const Sobre = () => {
  return (
    <>
    <Header />
    <main className='main-sobre'>
        <div className='container-sobre' >
            <img src={logoAzul} alt="" />
            <p>Bem-vindo ao "Cine Vibes" – Sua dose semanal de boas histórias!</p>
            <p>Se você é apaixonado por cinema e está sempre em busca de novos filmes para assistir, está no lugar certo!</p>
            <p> Aqui no Cine Vibes, trago as melhores dicas para todos os gostos: desde clássicos que marcaram época até lançamentos imperdíveis, passando por dramas emocionantes, comédias divertidas, e, claro, aquela sessão especial para maratonar no fim de semana.</p>
            <p>Cada recomendação vem com uma breve sinopse e meus comentários sobre o que mais me chamou atenção em cada filme – sem spoilers, prometo! A ideia é compartilhar experiências e ajudar você a escolher o que vale a pena assistir hoje à noite.</p>
            <p>Prepare a pipoca e vamos nessa!</p>
        </div>
        <div className='div-logos'>
            <img className='logoStrimme' src={netflix} alt="" />
            <img className='logoStrimme' src={hbo} alt="" />
            <img className='logoStrimme' src={prime} alt="" />
            <img className='logoStrimme' src={apple} alt="" />
        </div>
    </main>
    <Footer />
    </>
  )
}

export default Sobre