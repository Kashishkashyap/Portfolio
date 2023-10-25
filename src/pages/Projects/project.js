import React from 'react'
import './project.css'
import project1 from './project1.jpg'
import project2 from './sortingVisualizar.png'
import project3 from './project3.png'
// import Fade from 'react-reveal/Fade';

const project = () => {
    return (
        <>
            <div className="container projects" id="projects">
                <h2 className="container projects-headline col-12  text-uppercase" style={{ borderLeft: " 5px solid #d60039" }}>My Projects</h2>
                <p className="porjects-content pb-3" style={{ color: 'grey' }}>
                    My top recent projects
                </p>
                {/* <Fade bottom> */}
                <div className="row ">
                    <div className="content my-3 col-md-3 col-sm-6  mx-2">

                        <img src={project1} alt="project2Photo" />
                        <div className="content-body">
                            <div className="text-center">
                                <span className="badge rounded-pill bg-warning text-dark mx-1">NodeJS</span>
                                <span className="badge rounded-pill bg-warning text-dark mx-1">ExpressJS</span>
                                <span className="badge rounded-pill bg-warning text-dark mx-1">Html</span>
                                <span className="badge rounded-pill bg-warning text-dark mx-1">Css</span>
                                <span className="badge rounded-pill bg-warning text-dark mx-1">Javascript</span>
                                <span className="badge rounded-pill bg-warning text-dark mx-1">MongoDB</span>
                            </div>
                            <div className="text-center">
                                <h5 className="content-title text-center my-3">Food-Wood Application</h5>
                                <a href="https://github.com/Kashishkashyap/Food-Wood" className="btn view-btn text-center">View</a>
                            </div>

                        </div>
                    </div>
                    <div className="content my-3 col-md-3  mx-2">

                        <img src={project2} alt="project2Photo" />
                        <div className="content-body">
                            <div className="text-center">
                                <span className="badge rounded-pill bg-warning text-dark mx-1">Html</span>
                                <span className="badge rounded-pill bg-warning text-dark mx-1">Css</span>
                                <span className="badge rounded-pill bg-warning text-dark mx-1">Javascript</span>
                            </div>
                            <div className="text-center">
                                <h5 className="content-title text-center my-3">Sorting Visualizer</h5>
                                <a href="https://github.com/Kashishkashyap/sortingVisualizer" className="btn view-btn text-center">View</a>
                            </div>

                        </div>
                    </div>
                    <div className="content my-3 col-md-3  mx-2">

                        <img src={project3} alt="project2Photo" />
                        <div className="content-body">
                            <div className="text-center">
                                <span className="badge rounded-pill bg-warning text-dark mx-1">ReactJS</span>
                            </div>
                            <div className="text-center">
                                <h5 className="content-title text-center my-3">NewsAPP</h5>
                                <a href="https://github.com/Kashishkashyap/NewsAPP" className="btn view-btn text-center">View</a>
                            </div>

                        </div>
                    </div>
                </div>
                {/* </Fade> */}
            </div>

        </>
    )
}

export default project