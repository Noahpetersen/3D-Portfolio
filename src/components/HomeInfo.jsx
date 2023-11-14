import React from 'react'
import { Link } from 'react-router-dom'
import arrow from '../assets/icons/arrow.svg'

const InfoBox = ({ text, link, btnText}) => {
    return (
        <div className='info-box'>
            <p className='font-medium sm:text-xl text-center'>{text}</p>
            <Link to={link} className='neo-brutalism-white neo-btn'>
                {btnText}
                <img src={arrow} className='w-4 h-4 object-contain' />
            </Link>
        </div>
    )
}

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-semibold'>Noah</span> 👋
            <br/>
            A <span className='font-semibold'>Software Engineer</span> based in Aarhus
        </h1>
    ),
    2: (
        <InfoBox 
        text={`Passionate about web development, 
            I am currently immersed in my studies, acquiring a diverse set 
            of skills that enhance my ability to create immersive and ${<br/>} effective digital solutions.`}
        btnText='Learn more'
        link='/about'
        />
    ),
    3: (
        <InfoBox 
        text={`Discover my selected projects — a reflection of the hands-on learning journey that shaped my practical skills.`}
        btnText='Visit my Work'
        link='/projects'
        />
    ),
    4: (
        <InfoBox 
        text={`Passionate about web development, 
            I am currently immersed in my studies, acquiring a diverse set 
            of skills that enhance my ability to create immersive and ${<br/>} effective digital solutions.`}
        btnText='Learn more'
        link='/contact'
        />
    )
}


const HomeInfo = ( { currentStage } ) => {
  return (
    renderContent[currentStage] || null
  )
}

export default HomeInfo