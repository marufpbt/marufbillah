import React from 'react';
import './Experience.css';
const Experience = () => {
  const educationHandler = () => {
    document.querySelector('.educationBtn').classList.add('active');
    document.querySelector('.experienceBtn').classList.remove('active');
    document
      .querySelector('.educationDetails')
      .style.setProperty('visibility', 'visible');
    document
      .querySelector('.experienceDetails')
      .style.setProperty('visibility', 'hidden');
  };
  const experienceHandler = () => {
    document.querySelector('.educationBtn').classList.remove('active');
    document.querySelector('.experienceBtn').classList.add('active');
    document
      .querySelector('.educationDetails')
      .style.setProperty('visibility', 'hidden');
    document
      .querySelector('.experienceDetails')
      .style.setProperty('visibility', 'visible');
  };

  const windowWidth = window.innerWidth;
  return (
    <section className='experience'>
      <div className='container'>
        <div className='row d-flex align-items-center flex-column'>
          <div className='toggleButtons'>
            <button
              className='experienceBtn mr-3 active'
              onClick={experienceHandler}>
              My Experience
            </button>
            <button className='educationBtn' onClick={educationHandler}>
              My Education
            </button>
          </div>
          <div className='experienceDetails  row'>
            <div
              className='col py-5 years mr-5 px-0'
              data-aos={windowWidth > 1000 ? 'fade-right' : 'fade-up'}
              data-aos-duration='700'
              data-aos-delay='300'>
              <p className='text-right mt-4 firstP'>January 2021 to present</p>
              <p className='text-right mt-4 secondP'>January 2017 to present</p>
              <p className='text-right mt-4 thirdP'>February 2016 to 2017</p>
            </div>
            <div className='line col'></div>
            <div
              className='experienceInfo col py-5 detailsInfo'
              data-aos={windowWidth > 1000 ? 'fade-left' : 'fade-up'}
              data-aos-duration='700'
              data-aos-delay='300'>
              <div className='firstExp'>
                <h4>Training</h4>
                <p>
                  Complete Web Development With Jhankar Mahbub <br />
                </p>
              </div>
              <div className='secondExp'>
                <h4>Web Developer (Freelancer)</h4>
                <p>Fiverr International Marketplace</p>
              </div>
              <div className='thirdExp'>
                <h4>Training</h4>
                <p>IT-Bari Institute</p>
              </div>

            </div>
          </div>
          <div className='educationDetails  row'>
            <div
              className='col py-5 years mr-5 px-0'
              data-aos={windowWidth > 1000 ? 'fade-right' : 'fade-up'}
              data-aos-duration='700'
              data-aos-delay='300'>
              <p className='text-right mt-4 firstP'>March 2019 to present</p>
              <p className='text-right mt-4 secondP'>2017-18</p>
            </div>
            <div className='line col'></div>
            <div
              className='experienceInfo col py-5 detailsInfo'
              data-aos={windowWidth > 1000 ? 'fade-left' : 'fade-up'}
              data-aos-duration='900'
              data-aos-delay='400'>
              <div className='firstExp'>
                <h4>BA In Arabic</h4>
                <p>
                 University of Chittagong <br />
                  Chittagong, Bangladesh
                </p>
              </div>
              <div className='secondExp'>
                <h4>HSC</h4>
                <p>
                 Varendra College <br />
                  Rajshahi, Bangladesh
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
