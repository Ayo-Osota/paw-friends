import heroPaw from "../assets/hero-paw.svg";
import heroImage from "../assets/hero-image.png";
import puppySpot from "../assets/puppy-spot.svg";
import royalCanin from "../assets/royal-canin.svg";
import josera from "../assets/josera.svg";
import iamsCompany from "../assets/the-iams-company-inc.svg";
import drools from "../assets/drools.svg";
import { FaPaw } from "react-icons/fa";

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="even-columns container">
                <article className="flow">
                    <img src={heroPaw} alt="paw" className="display-sm-none" />
                    <h1>
                        Best Care Service For Your Lovely Fur Friends
                    </h1>
                    <p className="display-sm-none">
                        We know you love your fur friends more, we give them the best care you desire.
                    </p>
                    <div className="btn-wrapper display-sm-none">
                        <button type="button" className="btn">Get Started</button>
                        <button type="button" data-type="inverted" className="btn">Book a schedule</button>
                    </div>
                </article>
                <img src={heroImage} alt="paw care" />
            </div>
            <div className="partners-wrapper">
                <FaPaw />
                <FaPaw />
                <FaPaw />
                <FaPaw />
                <div className="container">
                    <img src={puppySpot} alt="puppy-spot" />
                    <img src={royalCanin} alt="royal-canin" />
                    <img src={josera} alt="josera" />
                    <img src={iamsCompany} alt="the iams company, inc" />
                    <img src={drools} alt="drools" />
                </div>
            </div>
        </section>
    )
}

export default HeroSection;