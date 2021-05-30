import React from 'react'
import photo from '../assets/images/pp.png'
import '../assets/css/style.css'

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

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  

import data from '../data.js';
import NavBar from './NavBar'

function CV() {
    return (
        <Router>
            <Switch>
                <div className='container'>
                    
                    <div className="top">
                        <NavBar/>
                    </div>

                    <div className='left-panel'>
                        <div className='content-left'>
                            <h1 className='h1'>Itzmar Franco</h1>
                            <img src={photo} alt='Man standing' className='profilePicture'/>
                            <div className='socials'>
                                <a className='social-link animate__animated animate__bounce' target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/kairi-franco-47a041198/'>
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

                    <div className='right-panel'>

                        <div className='content'>
                            <Route exact path="/">
                                {data[0]}
                            </Route>
                            <Route exact path="/resume">
                                {data[1]}
                            </Route>
                        </div>
                    </div>
                </div>
            </Switch>
        </Router>
    )
}

export default CV
