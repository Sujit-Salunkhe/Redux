import React from 'react'
import './education.css'
const Education = () => {
  return (
    <div>
      <section className='EducationTitle'>
        <p>EDUCATION</p>
      </section>
      <section className='educationbody'>
        <div className='degree'>
            <p className='title'>Bachelor of Accounting and Finance</p>
            <p className='body'>Western collage of Commerce and Busintess Management <br/>
CGPA:  7.69 / 10</p>
            <p className='year'>2020 - 2023</p>
        </div>
        <div className='hsc'>
            <p className='title'>Higher Secondary Education </p>
            <p className='body'>S.D.V College, Maharashtra Board <br />
HSC: 78.92</p>
            <p className='year' >2019 - 2020</p>
        </div>
        <div className='ssc'>
            <p className='title'>Secondary Education </p>
            <p className='body'>S.D.V College, Maharashtra Board <br/>
SSC: 78.20</p>
            <p className='year'>2017- 2018</p>
        </div>
      </section>
    </div>
  )
}

export default Education
