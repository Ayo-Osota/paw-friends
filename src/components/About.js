import huskiePuppies from "../assets/huskie-puppies.png";

const About = () => {
    return (
        <section className="about-section mt-5 container">
            <h2 className="heading text-center">About Us</h2>
            <div className="even-columns">
                <img src={huskiePuppies} alt="adorable-husky-puppies-lying-isolated" />
                <article className="flow">
                    <h2>
                        We are your fur's friends away from home
                    </h2>
                    <p>
                        We are the best caregiving agency for your fur friends. Like we said in the beginning, we give your fur friends the best care that you desire.
                    </p>
                    <ul role="list" className="flow">
                        <li><span>Licensed Doctors</span></li>
                        <li><span>10+ Years Experience</span></li>
                        <li><span>Licensed Groomers</span></li>
                        <li><span>Licensed dog Walkers</span></li>
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default About;