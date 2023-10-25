import React from 'react'
import './tech.css'
import { TechstackList } from '../../utils/techstack'
// import Fade from 'react-reveal/Fade';

const tech = () => {
    return (
        <>
            <div className="container tech" id="tech">

                <h2 className="container tech-headline col-12 text-uppercase" style={{ borderLeft: " 5px solid #d60039" }}>Technology Stack</h2>
                <p className=" container tech-content pb-3 " style={{ color: 'grey' }}>
                    All technologies including databases, libraries
                </p>
                <div className="row">
                    {/* <Fade left> */}
                    {TechstackList.map(tech => (
                        <div key={tech._id} className="col-lg-3 col-md-4 col-sm-6">
                            <div className="card m-2">
                                <div className="card-content">
                                    <div className="card-body">
                                        <div className="media d-flex justify-content-center">
                                            <div className="align-self-center mx-3">
                                                <tech.icon className="tech-icon" />
                                            </div>
                                            <div className="media-body align-self-center">
                                                <h5>{tech.name}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                    {/* </Fade> */}
                </div>
            </div >

        </>
    )
}

export default tech