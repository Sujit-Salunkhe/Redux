import React from 'react'
import './achievement.css'
import hackerankmedles from './icons/hackerankbade.png'
const Achievement = () => {
  return (
    <div id='fourthcomponent'>
      <section className='achievementtitle'>
        <p>ACHIEVEMENT</p>
      </section>
      <section className="achievementbody">
        <section className='hackerrankBadges'>
        <li> HackerRank Badges </li><br/>
            <img src={hackerankmedles} alt='hackerrank badges'></img>
        </section>    
        <section className='complitinglinkdin'>
            <li>Completing 100 days of code challenge on LINKDIN </li>
        </section>
      </section>
    </div>
  )
}

export default Achievement
