import React from 'react'

import PageHeader from '../../components/PageHeader';

import './styles.css';
import ProfItem from '../../components/ProfItem';
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
               <ProfItem />
               <ProfItem />
               <ProfItem />
               <ProfItem />
               <ProfItem />
            </main>
        </div>
    )
}

export default Aluno;