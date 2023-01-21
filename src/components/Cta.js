import huskiePuppies from "../assets/husky-puppies-2.png";

const Cta = () => {
    return (
        <section className="cta-section">
                <article className="flow">
                    <p>
                        We know your fur friend is part of your family.
                    </p>
                    <h2>
                        Excited about our services?
                    </h2>
                    <div className="btn-wrapper">
                        <button type="button" className="btn">Book a schedule</button>
                        <button type="button" data-type="inverted" className="btn">Contact us</button>
                    </div>
                </article>
            <img src={huskiePuppies} className="display-sm-none" alt="adorable-husky-puppies-lying-isolated" />
        </section>
    )
}

export default Cta;