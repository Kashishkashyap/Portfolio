import React from 'react'
import './work.css'
// import Zoom from 'react-reveal/Zoom';

const Work = () => {
    return (
        <>
            <div className="container work my-5" id="work">
                <h2 className="container work-headline col-12 text-uppercase" style={{ borderLeft: " 5px solid #d60039" }}>Work History</h2>
                {/* <Zoom> */}
                <div className="work-content">
                    <h5 className="work-title">Web Developer Intern at Auriv Learning</h5>
                    <p>
                        💻Developed and integrated chatbot functionalities to enhance user engagement, leading to a 30% boost in interaction rates.
                    </p>
                    <p>
                        💻 Collaborated with team to optimize website features, resulting in a 25% increase in conversion rate.

                    </p>
                    <p>
                        💻 Managed various tech tasks across 4 departments, ensuring smooth project execution through collaboration.

                    </p>
                    <div className="text-muted">
                        Nov 2023 to Present
                    </div>
                    <br />
                    <h5 className="work-title">Backend Developer Intern at Fleksa</h5>
                    <p>
                        💻Proficiently documented the entire backend infrastructure using Swagger for comprehensive documentation, reducing onboarding time by 25%. This documentation proved invaluable for new team members, speeding up their integration and boosting overall productivity
                    </p>
                    <p>
                        💻 Efficiently wrote RESTful 3-4 APIs using TypeScript and Node.js with Prisma. This technical achievement not only expanded the platform's capabilities but also demonstrated expertise in seamless API writing skills, contributing to the overall success of the project.
                    </p>
                    <p>
                        💻 Designed responsive 5 templates using HTML/CSS to enhance user interfaces without relying on external frameworks.
                    </p>
                    <div className="text-muted">
                        Aug 2023 to Sep 2023
                    </div>
                </div>
            </div>
        </>
    )
}

export default Work