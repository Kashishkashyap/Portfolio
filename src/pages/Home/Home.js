import React from 'react'
import './home.css'
import Typewriter from 'typewriter-effect';
import Resume from '../../assets/docs/Resume.pdf'
import imageSource from '../../assets/docs/photo.png';
// import Fade from 'react-reveal/Fade';
// import Zoom from 'react-reveal/Zoom';

const Home = () => {
    return (
        <div className="container-fluid home-container d-flex" id="home">
            {/* <Fade left> */}
            <div className="container home-content">
                <p>Hi There, </p>
                <div style={{ display: 'inline' }}>
                    <h1>
                        <span style={{ color: 'white', display: 'inline' }}>I'm a</span>
                        <span style={{ display: 'inline' }}>
                            <Typewriter
                                options={{
                                    strings: ['Fullstack Developer!!', 'MERN Developer', 'Backend Developer'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </span>
                    </h1>
                </div>

                <div className="home-buttons">
                    <a href="https:/api.whatsapp.com/send?phone7906517673" rel="noreferrer" target="_blank" className="btn btn-hire">Hire Me</a>
                    <a href={Resume} download="Kashish.pdf" className="btn btn-cv">My Resume</a>
                </div>
            </div>
            {/* </Fade> */}
            {/* <Zoom> */}
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 home-img">
                <img src={imageSource} alt="my_photo" />
            </div>
            {/* </Zoom> */}
        </div>
    )
}

export default Home