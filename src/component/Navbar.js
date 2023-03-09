import Logo from '../images/logo.svg'
import { pageLinks, SocialMedia } from "../data";
export const Navbar = () => {
    /*to format the code alt shft f */
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={Logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/*<!-- left this comment on purpose -->*/}
        <ul className="nav-links" id="nav-links">
          {pageLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.href} className="nav-link">
                  {link.text}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="nav-icons">
         {SocialMedia.map((links)=>{
             const {id, href, icon} = links
             return (
               <li key={id}>
                 <a
                   href={href}
                   target="_blank"
                   rel="noreferrer"
                   className="nav-icon"
                 >
                   <i className={icon}></i>
                 </a>
               </li>
             );
         })}
        </ul>
      </div>
    </nav>
  );
};
