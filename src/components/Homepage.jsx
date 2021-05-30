//react imports
import React from 'react'
//style imports
import '../assets/css/homepage.css'

import photo from '../assets/images/pp.png'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import {
    faGithub,
    faFacebook,
    faTwitter,
    faLinkedinIn
  } from '@fortawesome/free-brands-svg-icons'

import {
    faEnvelope,
}  from '@fortawesome/free-solid-svg-icons'


function Homepage() {
    return (
        <div className='container'>
            <div className='background-image'>
                <div className='content'>

                    <div className=''>
                        <img src={photo} alt='Man standing' className='profile-picture'/>
                    </div>
                    <div className='right-panel'>
                        Hello, I'm <b>Kairi Franco</b> <br/>
                        <small>Software developer</small> <br/>
                        <strong>Work Experience</strong> <br/>
                        <ul>
                            <li>
                                <small>Software developer (freelance)</small>
                            </li>
                            <li>
                                <small>DevOps Engineer Jr. at Cloud Society</small>
                            </li>
                            <li>
                                <small>Remote Technical Support at HCL Technologies</small>
                            </li>
                        </ul>
                        <strong>Education</strong> <br/>
                        <ul>
                            <li>
                                <small>Sciences and Systems Engineering at USAC</small> <br/>
                            </li>
                        </ul>
                    </div>

                    <div className='bottom-bar'>
                        <div className='socials'>
                            <a className='social-link' target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/kairi-franco-47a041198/'>
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                            <a className='social-link' target='_blank' rel='noreferrer' href='https://github.com/itzmarfranco'>
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a className='social-link' target='_blank' rel='noreferrer' href='https://www.facebook.com/itzmarfranco/'>
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a className='social-link' target='_blank' rel='noreferrer' href='https://twitter.com/iItzmar'>
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a className='social-link' target='_blank' rel='noreferrer' href='mailto:kairifranco@rocketmail.com'>
                                <FontAwesomeIcon icon={faEnvelope}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            


        </div>
    )
}

export default Homepage
