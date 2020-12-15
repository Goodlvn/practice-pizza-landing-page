import 'react-slideshow-image/dist/styles.css';
import { Fade } from 'react-slideshow-image';

export default function Slideshow() {
    const fadeImages = [
        '/images/pepperoni.png',
        '/images/top_pizza.png',
    ];

    const fadeProps = {
        indicators: true,
        arrows: false
    }

    return (
        <div className="slide-container">
            <Fade {...fadeProps}>
                <div className="each-fade">
                    <div className="image-container">
                        <img src={fadeImages[0]} className="bannerImg" />
                    </div>
                </div>
                <div className="each-fade">
                    <div className="image-container">
                        <img src={fadeImages[1]} className="bannerImg" />
                    </div>
                </div>
            </Fade>
        </div>
    )
}
