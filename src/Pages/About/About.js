import React from 'react';
import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero my-24">
            <div className="hero-content grid md:grid-cols-2 justify-between">
                <div className='relative'>
                    <img src={person} className="w-4/5 h-full rounded-lg shadow-2xl" alt="" />
                    <img src={parts} className="absolute w-3/5 right-5 -bottom-1/4 rounded-lg border-8 shadow-2xl" alt="" />
                </div>
                <div>
                    <p className='text-yellow-700 text-lg border-b-2 inline-block mb-8 border-yellow-600'>About Us</p>
                    <h1 className="text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
                    <p className="py-12">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn bg-red-600 border-none mt-8">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;