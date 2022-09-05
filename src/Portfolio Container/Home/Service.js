import React from "react";
import './Service.css'
import { FaCheckCircle } from 'react-icons/fa'
const Service = () => {
    return (

        <section id="services">
            <div className="dark">
                <h5> What I Offer </h5>
                <h2> services</h2>
                <div className="container services_container">
                    <article className="service">
                        <div className="service_head">
                            <h3> UI/UX Design</h3>
                        </div>
                        <ul className="service_list">
                            <li>
                                <FaCheckCircle className='service_list-icons' />
                                <p>Custom Web Design </p>
                            </li>
                            <li>
                                <FaCheckCircle className='service_list-icons' />
                                <p>Corporate Branding</p>
                            </li>
                            <li>
                                <FaCheckCircle className='service_list-icons' />
                                <p>Mobile App Design</p>
                            </li>
                            <li>
                                <FaCheckCircle className='service_list-icons' />
                                <p>Product Desig</p>
                            </li>
                            <li>
                                <FaCheckCircle className='service_list-icons' />
                                <p>Wireframing</p>
                            </li>
                            <li>
                                <FaCheckCircle className='service_list-icons' />
                                <p>Wearables App Design</p>
                            </li>
                        </ul>
                    </article>
                    <article className="service">
                        <div className="service_head">
                            <h3> Web developer</h3>
                        </div>
                        <ul className="service_list">
                            <li>
                                <FaCheckCircle className='service_list-icons' />
                                <p>Shopping Cart </p>
                            </li>
                            <li>
                                <FaCheckCircle className='service_list-icons' />
                                <p>Document Management System</p>
                            </li>
                            <li>
                                <FaCheckCircle className='service_list-icons' />
                                <p>Booking / Availability System</p>
                            </li>
                            <li>
                                <FaCheckCircle className='service_list-icons' />
                                <p>web development consulting</p>
                            </li>
                            <li>
                                <FaCheckCircle className='service_list-icons' />
                                <p>Email Newsletter</p>
                            </li>
                            <li>
                                <FaCheckCircle className='service_list-icons' />
                                <p>Social Media Integration</p>
                            </li>
                            <li>
                                <FaCheckCircle className='service_list-icons' />
                                <p>Mobile Application/iphone app</p>
                            </li>
                            <li>
                                <FaCheckCircle className='service_list-icons' />
                                <p>Password-Protected Pages</p>
                            </li>
                        </ul>
                    </article>
                    <article className="service">
                        <div className="service_head">
                            <h3> Content Creation</h3>
                        </div>
                        <ul className="service_list">
                            <li>
                                <FaCheckCircle className='service_list-icons' />
                                <p>Blog Posts.</p>
                            </li>
                            <li>
                                <FaCheckCircle className='service_list-icons' />
                                <p>Long-form content.</p>
                            </li>
                            <li>
                                <FaCheckCircle className='service_list-icons' />
                                <p>Content Optimization.</p>
                            </li>
                            <li>
                                <FaCheckCircle className='service_list-icons' />
                                <p>Content Reporting.</p>
                            </li>
                            <li>
                                <FaCheckCircle className='service_list-icons' />
                                <p>Online guides.</p>
                            </li>
                            <li>
                                <FaCheckCircle className='service_list-icons' />
                                <p>Micrographics.</p>
                            </li>

                        </ul>
                    </article>
                </div>

            </div>
        </section>

    );
}
export default Service;