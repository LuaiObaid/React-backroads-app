import { footerLinks, SocialMedia } from "../data"; 
export const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {footerLinks.map((footer) => {
          return (
            <li key={footer.key}>
              <a href={footer} className="footer-link">
                {footer.text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="footer-icons">
        {SocialMedia.map((links) => {
          const { id, href, icon } = links;
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
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
};
