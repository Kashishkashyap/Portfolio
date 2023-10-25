import React from 'react'
import './contact.css'
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai'
import { LiaPhoneSolid } from 'react-icons/lia'
import { IoLocationSharp } from 'react-icons/io'
const Contact = () => {
    return (
        <>
            <div className="container contact" id="contact">
                <h2 className="container contact-headline col-12  text-uppercase" style={{ borderLeft: " 5px solid #d60039" }}>Contact Me</h2>
                <p className=" pb-3" style={{ color: 'grey' }}>
                    Feel free to contact me any time
                </p>
                <div className="contact-content">
                    <h5 className="contact-title" style={{ borderLeft: '5px solid #d60039', padding: '5px', color: 'white' }}>Let's Talk</h5>
                    <div style={{ paddingLeft: '50px' }}>
                        <div>
                            <div>Phone</div>
                            <div><LiaPhoneSolid color='#d60039' /> +91 7906517673</div>
                        </div>
                        <div>
                            <div>Email</div>
                            <div><AiFillMail color='#d60039' /> kashyapkashish@gmail.com</div>
                        </div>
                        {/* <p>
                        <div>Address</div>
                        <div><IoLocationSharp /> Pantnagar, Uttarakhand</div>
                    </p> */}
                        <div style={{ paddingTop: '20px' }}>
                            <span className='mx-2'><a href="https://github.com/Kashishkashyap"><AiFillGithub size={30} color='#d60039' /></a></span>
                            <span className='mx-2'><a href="https://www.linkedin.com/in/kashishkashyap/"><AiFillLinkedin size={30} color='#d60039' /></a></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact