import React from 'react'
import { Link } from 'react-router-dom'

import logoIcone from '../../assets/images/logo.svg'
import backIcone from '../../assets/images/icons/back.svg'

import './styles.css'

interface PageHeaderProps {
    titulo: string;
}

const PageHeader: React.FC <PageHeaderProps>= (props) => {
    return (
        <header className="page-header">
                <div className="top-bar-container">
                    <Link to="/" >
                        <img src={backIcone} alt="Voltar"/>
                    </Link>
                    <img src={logoIcone} alt="Proffy"/>
                </div>
                <div className="header-content">
                    <strong>{props.titulo}</strong>
                    {props.children}
                </div>
            </header>
    );
}

export default PageHeader