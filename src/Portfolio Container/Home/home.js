import React from "react";
import './home.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Home = () => {
    return (
        <div className="dark">
            <section id="home">
                <h5>What Skills I Have</h5>
                <h2> My Experience</h2>
                <div className="container home_container">
                    <div className="home_frontend">
                        <h3> Frontend Development</h3>
                        <div className="home_content">
                            <article className="home_details">
                                <BsPatchCheckFill className="details-img" />

                                <div>
                                    <h4> HTML </h4>
                                    <small className="text-light"> Experience</small>
                                </div>
                            </article>
                            <article className="home_details">

                                <BsPatchCheckFill className="details-img" />

                                <div>
                                    <h4> CSS </h4>
                                    <small className="text-light"> Intermediate</small>
                                </div>
                            </article>
                            <article className="home_details">
                                <BsPatchCheckFill className="details-img" />
                                <div>
                                    <h4> Bootstrap </h4>
                                    <small className="text-light"> Experience</small>
                                </div>
                            </article>
                            <article className="home_details">
                                <BsPatchCheckFill className="details-img" />
                                <div>
                                    <h4> Javascript </h4>
                                    <small className="text-light"> Experience</small>
                                </div>
                            </article>
                            <article className="home_details">
                                <BsPatchCheckFill className="details-img" />
                                <div>
                                    <h4>Tailwind </h4>
                                    <small className="text-light"> Experience</small>
                                </div>
                            </article>
                            <article className="home_details">
                                <BsPatchCheckFill className="details-img" />
                                <div>
                                    <h4>React </h4>
                                    <small className="text-light"> Experience</small>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div className="home_backend">
                        <h3> Backend Development</h3>
                        <div className="home_content">
                            <article className="home_details">
                                <BsPatchCheckFill className="details-img" />
                                <div>
                                    <h4> javascript </h4>
                                    <small className="text-light"> Experience</small>
                                </div>
                            </article>
                            <article className="home_details">
                                <BsPatchCheckFill className="details-img" />
                                <div>
                                    <h4> PHP </h4>
                                    <small className="text-light"> Intermediate</small>
                                </div>
                            </article>
                            <article className="home_details">
                                <BsPatchCheckFill className="details-img" />
                                <div>
                                    <h4> Mongodb </h4>
                                    <small className="text-light"> Intermediate</small>
                                </div>
                            </article>
                            <article className="home_details">
                                <BsPatchCheckFill className="details-img" />
                                <div>
                                    <h4> SQL </h4>
                                    <small className="text-light"> Basic</small>
                                </div>
                            </article>
                            <article className="home_details">
                                <BsPatchCheckFill className="details-img" />
                                <div>
                                    <h4> Express </h4>
                                    <small className="text-light"> Experience</small>
                                </div>
                            </article>
                            <article className="home_details">
                                <BsPatchCheckFill className="details-img" />
                                <div>
                                    <h4>Python </h4>
                                    <small className="text-light"> Intermediate </small>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}
export default Home;