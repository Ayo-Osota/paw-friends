import logoPaw from '../assets/logo-paw.svg';
import { links } from '../constants';
import { MdSegment } from "react-icons/md";

const Nav = ({ openSidebar }) => {
  return <nav>
    <div className="nav-center flex container">
      <div className="nav-header flex">
        <a className='logo' to="/">
          <img src={logoPaw} alt="comfysloth" />
          <h4 className='text-primary-400'>Paw Care</h4>
        </a>
        <button type='button' onClick={openSidebar} className='nav-toggle display-lg-none'>
          <MdSegment/>
        </button>
      </div>
      <ul role="list" className="nav-links flex display-sm-none">
        {links.map((link) => {
          const { id, text, url } = link
          return (
            <li key={id}>
              <a href={url}>{text}</a>
            </li>
          )
        })}
      </ul>
      <ul className='flex display-sm-none' role="list">
        <li>
          <a href="#">sign in</a>
        </li>
        <li>
          <a className='btn' href="#">Get started</a>
        </li>
      </ul>
    </div>
  </nav>
}

export default Nav
