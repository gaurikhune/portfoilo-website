import React from 'react'

import './Testimonial.css'
import Profile1 from '../../assets/Materials/images/profile1.jpg'
import Profile2 from '../../assets/Materials/images/profile2.jpg'
import Profile3 from '../../assets/Materials/images/profile1.jpg'
import Profile4 from '../../assets/Materials/images/profile2.jpg'


import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';



const data = [
    {
        profile: Profile1,
        name: 'gauri khune',
        review: 'During the course, the trainers provided a lot of assignments that enhanced my user profile in the field of full stack development and helped me build my portfolio through my GitHub page. Highly recommended!'
    },
    {
        profile: Profile2,
        name: 'Zaheer Baig',
        review: 'It was a great experience, within 6 months, I was able to develop a Full Stack Web application. I can now code as per industry demands and requirements.'
    },
    {
        profile: Profile3,
        name: 'bhakti gaikwad',
        review: 'I attended TechFit Program for Full Stack Development and learned JavaScript, CSS, HTML, Bootstrap, MongoDB, NodeJS & React JS. I got placed at Qrata & would definitely recommend it for budding full stack developers.'
    },
    {
        profile: Profile4,
        name: 'shree gaikwad',
        review: 'The curriculum is well designed and thought-out and is focused on the JavaScipt (MEAN) stack as opposed to other bootcamps that use Rails. Due to this, I became extremely proficient in one language with clear fundamentals and concepts.'
    },
]



const Testimonial = () => {
    return (
        <div className='dark'>
            <section id='testimonials'>
                <h2> Testimonials</h2>
                <h5> What my client say about me</h5>

                <Swiper className='container testimonials_container'
                    modules={[Pagination]}
                    spaceBetween={40}
                    slidesPerView={1}

                    pagination={{ clickable: true }}>

                    {
                        data.map(({ profile, name, review }, index) => {
                            return (
                                <SwiperSlide key={index} className='testimonial'>
                                    <div className='client_profile'>
                                        <img src={profile} alt='prp' />

                                    </div>

                                    <h5 className='client_name'>{name}</h5>
                                    <small className='client_review'>{review}</small>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>

            </section>
        </div>
    )
}
export default Testimonial;