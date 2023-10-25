import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoIosSchool } from 'react-icons/io'
import './education.css'

const Education = () => {
    return (
        <>
            <div className="container education" id="education">
                <h2 className=" education-headline col-12 text-uppercase" style={{ borderLeft: " 5px solid #d60039" }}>Education</h2>
                <div className="timeline my-5" style={{ backgroundColor: "#16161d" }}>
                    <VerticalTimeline >
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#16161d', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  #16161d' }}
                            date="2019 - 2023"
                            iconStyle={{ background: '#16161d', color: '#fff' }}
                            icon={<IoIosSchool />}
                        >
                            <h3 className="vertical-timeline-element-title">B.Tech</h3>
                            <h4 className="vertical-timeline-element-subtitle">Information Technology</h4>
                            <p style={{ lineHeight: '0.5' }}>OGPA: 7.898</p>
                            <p style={{ color: 'grey', lineHeight: '0.2' }}>
                                G.B. Pant University of Agriculture and Technology
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#16161d', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  #16161d' }}
                            date="2019 - 2023"
                            iconStyle={{ background: '#16161d', color: '#fff' }}
                            icon={<IoIosSchool />}
                        >
                            <h3 className="vertical-timeline-element-title">Intermediate</h3>
                            <p style={{ lineHeight: '0.5' }}>Percentage: 93.2%</p>
                            {/* <h4 className="vertical-timeline-element-subtitle">Information Technology</h4> */}
                            <p style={{ color: 'grey', lineHeight: '0.2' }}>
                                Campus School, Pantnagar
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#16161d', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  #16161d' }}
                            date="2019 - 2023"
                            iconStyle={{ background: '#16161d', color: '#fff' }}
                            icon={<IoIosSchool />}
                        >
                            <h3 className="vertical-timeline-element-title">High School</h3>
                            {/* <h4 className="vertical-timeline-element-subtitle">Information Technology</h4> */}
                            <p style={{ lineHeight: '0.5' }}>CGPA: 10.00</p>
                            <p style={{ color: 'grey', lineHeight: '0.2' }}>
                                Campus School, Pantnagar
                            </p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
            </div>
        </>
    )
}

export default Education