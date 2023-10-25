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
                    <h5 className="work-title">Backend Developer Intern</h5>
                    <p>
                        💻Proficiently documented the entire backend infrastructure using
                        Swagger for comprehensive documentation.
                    </p>
                    <p>
                        💻 Successfully integrated backend functionalities and APIs using
                        TypeScript and Node.js with Prisma.
                    </p>
                    <p>
                        💻 Skillfully crafted responsive templates using HTML and CSS to
                        enhance user interfaces without relying on external frameworks.
                    </p>
                    <div className="text-muted">
                        Aug 2023 to Sep 2023
                    </div>
                </div>
                {/* </Zoom> */}
                {/* <div className="container my-5">
                    <div className="card-body">
                        <h5 className="card-title">Backend Developer Intern</h5>
                        <p className="card-text">Fleksa</p>
                        <p>
                            Proficiently documented the entire backend infrastructure using
                            Swagger for comprehensive documentation.
                        </p>
                        <p>
                            Successfully integrated backend functionalities and APIs using
                            TypeScript and Node.js with Prisma.
                        </p>
                        <p>
                            Skillfully crafted responsive templates using HTML and CSS to
                            enhance user interfaces without relying on external frameworks.
                        </p>
                        <a href="#" className="btn btn-success">View Certificate</a>
                    </div>
                    <div className="card-footer text-muted">
                        Aug 2023 to Sep 2023
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default Work