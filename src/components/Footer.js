import logoPaw from '../assets/logo-paw.svg';

const Footer = () => {
    return (
        <footer className="container">
            <div>
                <article className='flow'>
                    <a className='logo' to="/">
                        <img src={logoPaw} alt="comfysloth" />
                        <h4 className='text-primary-400'>Paw Care</h4>
                    </a>
                    <p>
                        Pawsitively Caring for Your Canine Companion. We trustworthy and Professional Dog Care Services
                    </p>
                </article>
                <ul className="company" role="list">
                    <li><h6>company</h6></li>
                    <li><a href="">about</a></li>
                    <li><a href="">service</a></li>
                    <li><a href="">accessories</a></li>
                </ul>
                <ul className="help" role="list">
                    <li><h6>help</h6></li>
                    <li><a href="">Customer Support</a></li>
                    <li><a href="">Terms & Conditions</a></li>
                    <li><a href="">Privacy Policy</a></li>
                </ul>
                <form action="">
                    <div className="form-control">
                        <label htmlFor='email'>newsletter</label>
                        <input type="text" id='email' placeholder='Enter your email address' />
                    </div>
                    <button type='submit' className='btn newsletter-btn'>Subscribe Now</button>
                </form>
            </div>
            <p className='text-center'>© Copyright {new Date().getFullYear()}, All Rights Reserved by paw care</p>
        </footer>
    )
}

export default Footer;