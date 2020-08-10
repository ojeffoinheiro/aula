import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Aluno from './pages/Aluno'
import ProfForm from './pages/ProfForm'

function Routes() {
    return (
    <BrowserRouter>
        <Route path="/" exact component={Landing} />
        <Route path="/aluno" component={Aluno} />
        <Route path="/prof" component={ProfForm} />
    </BrowserRouter>
    )
}

export default Routes;