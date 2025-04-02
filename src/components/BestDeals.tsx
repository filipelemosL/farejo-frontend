import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Header.css';
import './BestDeals.css';
import Slider from "react-slick";

const BestDeals: React.FC = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <>
            <div className='component dbg'>
                <div className='component-header dbg'>
                    <h5 className='dbg'>Melhores ofertas</h5>
                    <a className='dbg'>Ver tudo</a>
                </div>
                <div className='carousel dbg'>
                    <Slider className='dbg slide-container' {...settings}>
                        <div className='slide dbg'>
                            
                        </div>
                        <div className='slide dbg'>
                            
                        </div>
                        <div className='slide dbg'>
                           
                        </div>
                        <div className='slide dbg'>
                            
                        </div>
                    </Slider>
                </div>
            </div>
        </>

    );
};

export default BestDeals;
