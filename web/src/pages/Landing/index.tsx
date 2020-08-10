import React from 'react'
import { Link } from 'react-router-dom'

import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'

import alunoIcone from '../../assets/images/icons/study.svg'
import professorIcone from '../../assets/images/icons/give-classes.svg'
import roxo from '../../assets/images/icons/purple-heart.svg'

import './styles.css'

function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container" >
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy" />
                    <h2>Sua plataforma de estudos online</h2>
                </div>

                <img 
                    src={landingImg} 
                    alt="Plataforma de estudos"
                    className="hero-image" />

                <div className = "botao-container">
                    <Link to="/aluno" className="aluno" >
                        <img src={alunoIcone} alt="Sou aluno"/>
                            Sou aluno
                    </Link>
                    <Link to="/prof" className="professor" >
                        <img src={professorIcone} alt="Sou professor"/>
                        Sou professor
                    </Link>
                </div>

                <span className="n-conexoes" >
                    Total de 200 conexões já realizadas
                    <img src={roxo} alt="coração roxo"/>
                </span>
                
            </div>
        </div>
    )
}

export default Landing;