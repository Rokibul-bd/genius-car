import React from 'react';

const BannerItem = ({ slide }) => {
    const { image, id, prev, next } = slide
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='img-gradient'>
                <img src={image} className="w-full rounded-xl" alt="" />
            </div>
            <div className="absolute flex justify-end gap-2 transform -translate-y-1/2 left-5 top-1/4">
                <h3 className='text-6xl text-white font-bold'>This is Header Text</h3>
            </div>
            <div className="absolute flex justify-end gap-2 transform -translate-y-1/2 left-5 top-1/2">
                <p className='text-base text-white '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet omnis cupiditate vel quos, consectetur quidem debitis repudiandae facere animi aut.</p>
            </div>
            <div className="absolute flex justify-end gap-2 transform -translate-y-1/2 left-5 top-3/4">
                <button className="btn btn-active btn-warning">Button</button>
                <button className="btn btn-outline btn-warning">Button</button>
            </div>
            <div className="absolute flex justify-end gap-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;