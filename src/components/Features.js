import { features } from "../constants";

const Features = () => {
    return (
        <section className="features-section mt-5 container">
            <h2 className="heading">
                We look after your fur friends in the best and reliable way
            </h2>
            <ul role="list" className="mt-5">
                {features.map((feature) => {
                    const { id, icon, title, text } = feature;
                    return (
                        <li key={id}>
                            <div>{icon}</div>
                            <article className="flow">
                                <h3>{title}</h3>
                                <p>{text}</p>
                            </article>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default Features;