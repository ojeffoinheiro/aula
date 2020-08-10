import React from 'react'

import PageHeader from '../../components/PageHeader';
import whatsIcone from '../../assets/images/icons/whatsapp.svg'

import './styles.css';
function Aluno() {
    return (
        <div id="page-aluno" className="container">
            <PageHeader titulo="Seus professores disponíveis são:">
                <form id="procura-prof">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                            <input type="text" id="subject" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="dia-semana">Dia da semana</label>
                            <input type="text" id="dia-semana" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="turno">Turno</label>
                            <input type="text" id="turno" />
                    </div>
                </form>
            </PageHeader>

            <main>
               <article className="prof-item">
                   <header>
                       <img src="https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4" alt="Jeef"/>
                       <div>
                           <strong>Diego</strong>
                           <span>Química</span>
                       </div>
                   </header>
                   <p>
                        Entusiasta das melhores tecnologias de química avançada.
                        <br /><br />
                        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
                    </p>
                   <footer>
                       <p>
                           Preço/hora
                           <strong>R$80,00</strong>
                        </p>
                        <button type="button" >
                            <img src={whatsIcone} alt="whats"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
            </main>
        </div>
    )
}

export default Aluno;