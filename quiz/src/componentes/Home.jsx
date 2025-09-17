import React from 'react'
import './Home.css'

const Home = ({ onStartQuiz }) => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Quiz</h1>
        <p className="home-subtitle">boa sorte !</p>
        <div className="home-description">
          <p>Este quiz contém perguntas sobre:</p>
          <ul>
            <li>Programação Orientada a Objetos</li>
            <li>Bancos de Dados</li>
            <li>JavaScript</li>
            <li>Python</li>
          </ul>
        </div>
        <button className="start-button" onClick={onStartQuiz}>
          Começar o quiz
        </button>
      </div>
    </div>
  )
}

export default Home