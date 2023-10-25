import React from 'react'
import './about.css'
import imageSource from '../../assets/docs/photo.png';

const About = () => {
    return (
        <>
            <div className="row about" id="abouts">
                <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
                    <img src={imageSource} alt="my_photo" />
                </div>
                <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
                    <h1>About Me</h1>
                    <p>"My journey as a Fullstack Developer began when I discovered my passion for coding. I've always been captivated by the power of technology and its ability to transform ideas into practical solutions. This fascination led me to pursue a career in software development.</p>
                    <p>I'm Kashish, a versatile developer with expertise in HTML, CSS, and Bootstrap for crafting engaging user interfaces. JavaScript and TypeScript fuel my frontend skills, especially in React JS, while my backend proficiency lies in Node JS and Express JS. MongoDB serves as my data storage solution, and I'm a Git and GitHub aficionado for version control. With a background in C++, I'm well-prepared for diverse projects. I excel in API development and documentation, utilizing tools like Postman and Swagger. My passion for learning and collaborative spirit make me a dynamic addition to any tech team. Let's connect and create remarkable digital experiences!"</p>
                </div>
            </div>
        </>
    )
}

export default About