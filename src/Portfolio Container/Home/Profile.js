import React from 'react'
import Typical from 'react-typical'
import "./Profile.css"
export default function Profile() {
    return (
        <div className='dark'>
            <div className='profile-container'>
                <div className='profile-parent'>
                    <div className='profile-details'>
                        <div className='colz'>

                            <div className='colz-icon'>

                            </div>

                            <a href='#'>
                                <i className='fa fa-facebook-square'></i>
                            </a>
                            <a href='https://www.apple.com/in/ipad/'>
                                <i className='fa fa-google-plus-square'></i>
                            </a>
                            <a href='#'>
                                <i className='fa fa-instagram'></i>
                            </a>
                            <a href='#'>
                                <i className='fa fa-youtube-square'></i>
                            </a>
                            <a href='#'>
                                <i className='fa fa-twitter'></i>
                            </a>
                        </div>

                        <div className='profile-details-name'>
                            <span className='primary-text'>
                                {" "}
                                Hello , I'm  <span className='highlighted-text'> GAURI </span>
                            </span>

                        </div>
                        <div className='profile-details-role'>
                            <span className='primary-text'>
                                {" "}
                                <h1>
                                    {" "}
                                    <Typical
                                        loop={Infinity}
                                        steps={[
                                            "Ethusiastic dev 😃",
                                            1000,
                                            "Full stack developer 😍",
                                            1000,
                                            "Mearn stack developer 🎓",
                                            1000,
                                            "Cross platform  dev ⭐",
                                            1000,
                                            "React native app 🔥",
                                            1000,
                                        ]}
                                    />
                                </h1>
                                <span className='profile-role-tagline'>
                                    knack of building application with front and back end operations.
                                </span>
                            </span>
                        </div>
                        <div className='profile-options'>
                            <button className='btn primary-btn'>
                                {" "}
                                Hire me{" "}
                            </button>
                            <a href="GAURI's resume.pdf" download="develper GAURI's Resume.pdf">
                                <button className="btn highlighted-btn"> Get Resume</button>
                            </a>

                        </div>
                    </div>
                    <div className='profile-picture'>
                        <div className='profile-picture-background'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
