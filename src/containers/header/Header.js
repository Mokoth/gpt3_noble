import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Let's Build Something with ChatGPT-3 OpenAI</h1>
        <p>Welcome to the ultimate course, where you will learn how to take Figma designs, turn them into four modern, responsive, beautifully-designed applications, and get hired as a front-end developer.</p>
        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Your Email Address' />
          <button type='button'>Get started</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt='gpt3 subscribers waiting list'/>
          <p>1600 requested access in the last 24hrs</p>
        </div>
      </div>
        <div className='gpt3-__header-content__ai'>
          <img src={ai} alt='open AI ina action'/>
        </div>
    </div>
  )
}

export default Header