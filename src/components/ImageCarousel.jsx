import React, {useContext, useState} from 'react';
import ForwardIcon from '@mui/icons-material/Forward';
import MyInfoContext from '../MyInfoContext';

const ImageCarousel = () => {
    const {heroImages} = useContext(MyInfoContext);
    const [carousel, setCarousel] = useState(
        {
            previous: heroImages[0].image,
            current: heroImages[1].image,
            next: heroImages[2].image,
        }
    );

    const carouselControls = (action) => {
        if(action == 'next'){
            console.log('next');
        }else if(action =='back'){
            console.log('back');
        }else {
            console.log('error');
        };
    };

    return (
        <section>
            <div className='landing-images' >
                <div className='hero-container' id='hero-3' >
                    <img src={carousel.previous} className='hero-images' />
                </div>
                <div className='hero-container' id='hero-1' >
                    <img src={carousel.current} className='hero-images' />
                </div>
                <div className='hero-container' id='hero-2' >
                    <img src={carousel.next} className='hero-images' />
                </div>
            </div>
            <div className='btn-container' >
                <ForwardIcon className='prev-btn' sx={{fontSize: '3rem', transform: 'rotate(180deg)', textAlign:'center' }} onClick={()=>carouselControls("back")} /><ForwardIcon className='next-btn' sx={{fontSize: '3rem'}} onClick={()=>carouselControls("next")} />
            </div>
        </section>
    )
}

export default ImageCarousel;