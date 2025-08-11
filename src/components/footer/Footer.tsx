import { Link, NavLink } from 'react-router-dom';
import logoHeader from '@/assets/logo.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';
import './Footer.scss';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img
                        src={logoHeader}
                        alt="Logo Cabaña El Hinojo de Bru"
                        loading="lazy"
                        className="logo"
                        width={160}
                        height={48}
                    ></img>{' '}
                </div>

                <div className="footer-socials">
                    <Link to="https://www.instagram.com/elhinojodebrucabana/?hl=es">
                        <InstagramIcon fontSize="large" />
                        <p>@elhinojodebrucabana</p>
                    </Link>

                    <Link to="https://www.facebook.com/profile.php?id=100064117201231">
                        <FacebookIcon fontSize="large" />
                        <p>El Hinojo de Bru Cabaña</p>
                    </Link>

                    <Link to="/contact">
                        <MailIcon fontSize="large" />
                        <p>administración@elhinojodebru.com.ar</p>
                    </Link>
                </div>
                <div className="footer-credits">
                    <p className="footer-copyright">
                        © {new Date().getFullYear()} Cabaña El Hinojo de Bru —
                    </p>

                    <p
                        className=" footer-credits-link"
                        style={{ marginLeft: '4px' }}
                    >
                        Powered by
                        <NavLink
                            to="https://www.instagram.com/modo_cm/?hl=es"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ marginLeft: '4px' }}
                        >
                            modoCM | Idana Wagner Cabrera
                        </NavLink>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
