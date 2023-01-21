import { services } from "../constants";

const Services = () => {
    return (
        <section className="services-section mt-5 container">
            <h2 className="heading">
                Our Services
            </h2>
            <div className="flow">
                {services.map((service) => {
                    const { id, image, title, text } = service;
                    return (
                        <div key={id} className="even-columns">
                            <article className="flow">
                                <h3>{title}</h3>
                                <p className="display-sm-none">{text}</p>
                                <button type="button" className="btn">Book a schedule</button>
                            </article>
                            <img src={image} alt={title} />
                            <p className="display-lg-none">{text}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Services;