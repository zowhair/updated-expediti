// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import styles from "../styles/custom.module.css";

export default function Carousel({carouselImages}) {

    return (
        <>
            <Swiper className={styles.mySwiper}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                height="600px"
            >
               {carouselImages ? carouselImages.map((data) => {
                    return <SwiperSlide className={styles.swiperslide} >
                        <img src={'http://localhost:1337' +data.attributes.url} />
                    </SwiperSlide>

                }):""} 

                {/* {carouselElements.map((data) => {
                    return <SwiperSlide className={styles.swiperslide} >
                        <img src={data} />
                    </SwiperSlide>

                })} */}

            </Swiper>


        </>
    )
}