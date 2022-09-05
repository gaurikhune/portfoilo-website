import React from 'react';
import './Footer.css';
import ME from '../../../assets/Materials/images/blog.jpg';
import { BsAwardFill } from 'react-icons/bs'
import { ImUsers } from 'react-icons/im'
import { AiFillFolderAdd } from 'react-icons/ai'


const Footer = () => {
    return (

        <section id='about'>
            <div className='dark'>
                <h2> GET TO KNOW</h2>
                <h3> ABOUT ME</h3>


                <div className='about-container'>
                    <div className='know-about'>
                        <div className='know-about-img'>
                            <img src={ME} alt='About-img' />
                        </div>
                    </div>


                    <div className='content-about'>
                        <div className='contains'>
                            <article className='contain'>
                                <BsAwardFill className='about-icons' />


                                <h2> Experience</h2>
                                <small>3+ Year Experience</small>
                            </article>

                            <article className='contain'>
                                < ImUsers className='about-icons' />

                                <h2> client</h2>
                                <small>500+ worldwide</small>
                            </article>

                            <article className='contain'>
                                <AiFillFolderAdd className='about-icons' />

                                <h2> Project</h2>
                                <small>90+ completed</small>
                            </article>


                        </div>
                        <p> Passionate Full Stack Developer in developing scalable website/Application using wide range of front-end and back-end skills.
                            Exited to be At the deployement phase of my new career as a web Developer.
                        </p>
                        <a href='#contact' className='btn btn-primary'> Let's Talks</a>
                    </div>
                </div>
            </div>
        </section>
        // <div className='footer-container'>
        // <div className='footer-parent'>
        // <div class="Content">

        //   <div className='content-background'>

        //  </div>
        //  <div class="Content">

        // <h1>Enjoy on your TV.</h1>
        // <p>
        //    Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
        //       players and more.
        //    </p>
        //  </div>

        // </div>
        //  <h1>iuhdijhd8uihn fghfgh fgb</h1>
        // </div>
        // </div>








    );
}
export default Footer;