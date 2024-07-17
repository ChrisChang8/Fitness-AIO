import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import "swiper/css"
import { sliderSettings } from '../../utils/common'
import data from '../../utils/shop.json'

const Shop_Items = () => {

    {/*Button Functions*/}
    const SliderButtons = () =>{
        const swiper = useSwiper();
        return(
            <div className="flexCenter feature-buttons">
                <button onClick={() => swiper.slidePrev()}>&lt;</button>
                <button onClick={() => swiper.slideNext()}>&gt;</button>
            </div>
        );
    };

  return (
    <section>
        <div className='innerWidth feature-container'>
            {/*Title*/}
            <div class="feature-head">
                {/* <span class="orangeText">7 Unique Features</span> 
                <span class="primaryText flexCenter">Check Out These Features!</span>
                */}                
            </div>
            
            {/*Slider*/}
            <Swiper {...sliderSettings}>
                <div style={{marginTop:'30px', marginBottom:'55px'}}>
                    <SliderButtons />                
                </div>
                {
                    data.map((card, i) => (
                        <SwiperSlide key={i}>
                            <div className="flexCenter flexColCenter feature-card">
                                <img src={card.image} alt="template" />
                                
                                <span className="secondaryText">
                                    {/* <span style={{color: 'orange'}}>X </span> */}
                                    <span>{card.status}</span>
                                </span>

                                <span className="primaryText">{card.name}</span>
                                <span className="secondaryText">{card.detail}</span>

                            </div>

                        </SwiperSlide>                            
                    ))
                }
            </Swiper>

        </div>
    </section>
  )
}

export default Shop_Items