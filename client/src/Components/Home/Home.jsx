import React from 'react'

import './Home.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import p from '../../assets/p.jpg'
import p1 from '../../assets/p1.jpg'
import p2 from '../../assets/p2.jpg'
import { Navbar } from './Homepage/Navbar';

export default function Home() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,

    };

    return (
        <div className="div">
          <Navbar/> 
          
<div className="slider">
            <Slider {...settings} className='slider'>

                <div ><div className='homeimages slidercont'>
                    <div className='img'><img src={p} alt="" /> </div>
                    <div className='content'><div className=''> <h1>Our Vission</h1></div>
                        <div className='h2content'><h2>"To build an inclusive and empowered society where every child receives care, protection, and quality education, and every woman is equipped with the skills and opportunities to achieve financial independence and social dignity. We strive to create a future where education and empowerment break the cycle of poverty, fostering a community of confident, self-reliant individuals who contribute to a better world."</h2> </div></div>
                </div></div>

                <div className="div"><div className='homeimages slidercont'>
                    <div className='img'><img src={p1} alt="" /> </div>
                    <div className='content'> <h1>Our Mission</h1>
                        <div className='h2content'><h2>"  Our mission is to empower underprivileged children and women through education, skill development, and social welfare initiatives. We strive to create a world where every child has access to quality education and every woman has the opportunity to lead a dignified and independent life. Through compassion, innovation, and community support, we work to break the cycle of poverty and build a brighter, more equitable future for all.  "</h2></div>
                    </div></div>
                </div>

                <div className="div"><div className='homeimages slidercont'>
                    <div className='img'><img src={p2} alt="" /> </div>
                    <div className='content'><div><h1>Core Value :  <span spanheading>"SHINE"</span>  </h1></div>

                        <div className="shine "> <ul>
                            <li><span>S</span> - <span>Support</span> </li>
                            <li><span>H</span> - <span>Hope</span></li>
                            <li><span>I</span> - <span>Inspiration</span> </li>
                            <li><span>N</span> - <span>Nurture</span></li>
                            <li><span>E</span>- <span>Education</span> </li></ul>
                        </div>

                    </div></div>
                </div>



            </Slider>
            </div>

            <div className="slider2">    
                
                    <Slider {...settings} className='slider2'>

<div ><div className='slidercont2'>
    <div className='img2'><img src={p2} alt="" /> </div>
    <div className='content2'><div > <h1>Our Vission</h1></div>
        <div className='h2content2'><h2>"To build an inclusive and empowered society where every child receives care, protection, and quality education, and every woman is equipped with the skills and opportunities to achieve financial independence and social dignity. We strive to create a future where education and empowerment break the cycle of poverty, fostering a community of confident, self-reliant individuals who contribute to a better world."</h2> </div></div>
</div></div>

<div ><div className=' slidercont2'>
    <div className='img2'><img src={p1} alt="" /> </div>
    <div className='content2'><div > <h1>Our Mission</h1></div>
        <div className='h2content2'><h2>" Our mission is to empower underprivileged children and women through education, skill development, and social welfare initiatives. We strive to create a world where every child has access to quality education and every woman has the opportunity to lead a dignified and independent life. Through compassion, innovation, and community support, we work to break the cycle of poverty and build a brighter, more equitable future for all.  "</h2> </div></div>
</div></div>

<div ><div className=' slidercont2'>
    <div className='img2'><img src={p} alt="" /> </div>
    <div className='content2'><div > <h1>Core Value :  <span spanheading>"SHINE"</span> </h1></div>
        <div className='h2content2'>
            
        <div className="shine2 "> <ul>
                            <li><span>S</span> - <span>Support</span> </li>
                            <li><span>H</span> - <span>Hope</span></li>
                            <li><span>I</span> - <span>Inspiration</span> </li>
                            <li><span>N</span> - <span>Nurture</span></li>
                            <li><span>E</span>- <span>Education</span> </li></ul>
                        </div>
            
             </div></div>
</div></div>





</Slider></div>


        </div>

    )
}













