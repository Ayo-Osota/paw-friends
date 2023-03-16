import logoPaw from '../assets/logo-paw.svg'
import { links } from '../constants';
import { MdClose } from "react-icons/md";

const Sidebar = ({ isSidebarOpen, closeSidebar }) => {
  return <div>
    <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-header flex">
        <a className='logo' to="/">
          <img src={logoPaw} alt="paw" />
          <h4 className='text-primary-400'>Paw Care</h4>
        </a>
        <button type='button' className='close-btn' onClick={closeSidebar}>
          <MdClose />
        </button>
      </div>
      <ul role="list" className="links">
        {links.map((link) => {
          const { id, text, url } = link;
          return <li key={id}><a onClick={closeSidebar} href={url}>
            {text}
          </a></li>
        })}
        <li><a onClick={closeSidebar} href="/checkout">sign in</a></li>
      </ul>
    </aside>
  </div>
}

export default Sidebar
