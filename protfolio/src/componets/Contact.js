import React from 'react'
import './Contact.css'
import Gamil from './icons/Gmail logo.png'
import Github from './icons/Github svg.png'
import Linkdin from './icons/LinkedIn svg.png'
const Contact = () => {
    const gotogmil = () => {
        let email='sujitsalunkhe3738@gmail.com'
        window.open(email,'_blank');
    }
    const gotogithub = () => {
        let github = 'https://github.com/Sujit-Salunkhe'
        window.open(github,'_blank')
    }
    const gotolinkdin = () => {
        let Linkdin = 'https://www.linkedin.com/in/sujit-salunkhe-697a89244/'
        window.open(Linkdin,'_blank')
    }
  return (
    <div id='sixthcomponent'>
      <section>
        <p className='Contacttitle'>Contact</p>
      </section>
      <section className='Contactbody'>
            <div className='contactdigitally'>
                <p> Let’s contact</p> 
                <p>DIGITALLY</p>
            </div>
            <div className='contactdetails'>
                <ul >
                    <li><button onClick= {gotogmil}><img src={Gamil} alt='gmail'></img>Gmail</button></li>
                    <li><button onClick={gotogithub}><img src={Github} alt='github'></img>Github</button></li>
                    <li><button onClick={gotolinkdin}><img src={Linkdin} alt='linkdin'></img>Linkdin</button></li>
                </ul>
            </div>
      </section>
    </div>
  )
}

export default Contact
