import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import './Contact.scss';

const Contact = () => {
    return (
        <section className="contact">
            <h2 className="contact-title">Contáctenos</h2>

            <div className="contact-info">
                <div className="data">
                    <h2>El Hinojo de Bru</h2>
                    <p>
                        <strong>Luis Jaime Bru</strong>
                        <br />
                        <a
                            href="https://wa.me/5492923640653"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <WhatsAppIcon
                                sx={{
                                    fontSize: {
                                        xs: 20,
                                        sm: 25,
                                        md: 30,
                                    },
                                    color: '#25D366',
                                }}
                            />
                            +54 0 2923 64-0653
                        </a>
                    </p>
                    <p>
                        <strong>Maria Marta</strong>
                        <br />
                        <a
                            href="https://wa.me/5492923640653"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <WhatsAppIcon
                                sx={{
                                    fontSize: {
                                        xs: 20,
                                        sm: 25,
                                        md: 30,
                                    },
                                    color: '#25D366',
                                }}
                            />
                            +54 9 2923 64-0653
                        </a>
                    </p>
                    <p>
                        <strong>Oficina Coronel Suárez</strong>
                        <br />
                        <a
                            href="https://wa.me/5492926432668"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <WhatsAppIcon
                                sx={{
                                    fontSize: {
                                        xs: 20,
                                        sm: 25,
                                        md: 30,
                                    },
                                    color: '#25D366',
                                }}
                            />
                            02926-432668
                        </a>
                        <br />
                        <a
                            href="https://wa.me/5492923448454"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <WhatsAppIcon
                                sx={{
                                    fontSize: {
                                        xs: 20,
                                        sm: 25,
                                        md: 30,
                                    },
                                    color: '#25D366',
                                }}
                            />
                            02923-448454
                        </a>
                    </p>
                    <p>
                        <a
                            href="https://www.facebook.com/elhinojodebrucabana"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FacebookIcon
                                sx={{
                                    fontSize: {
                                        xs: 20,
                                        sm: 25,
                                        md: 30,
                                    },
                                    color: '#1877F2',
                                }}
                            />
                            El Hinojo de Bru Cabaña
                        </a>
                    </p>
                    <p>
                        <a href="mailto:administración@elhinojodebru.com.ar">
                            <EmailIcon
                                sx={{
                                    fontSize: {
                                        xs: 20,
                                        sm: 25,
                                        md: 30,
                                    },
                                    color: '#fff',
                                }}
                            />
                            administración@elhinojodebru.com.ar
                        </a>
                    </p>
                    <p>
                        <a
                            href="https://www.instagram.com/elhinojodebrucabana"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <InstagramIcon
                                sx={{
                                    fontSize: {
                                        xs: 20,
                                        sm: 25,
                                        md: 30,
                                    },
                                    color: '#E4405F',
                                }}
                            />
                            @elhinojodebrucabana
                        </a>
                    </p>
                </div>

                <div className="report">
                    <h2>Informes</h2>
                    <p>
                        <strong>Guillermo di Carlo</strong>
                        <br />
                        <a
                            href="https://wa.me/5492302511536"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <WhatsAppIcon
                                sx={{
                                    fontSize: {
                                        xs: 20,
                                        sm: 25,
                                        md: 30,
                                    },
                                    color: '#25D366',
                                }}
                            />
                            02302-15-511536
                        </a>
                    </p>
                    <p>
                        <a href="mailto:gdicarlo@monasterio.com.ar">
                            <EmailIcon
                                sx={{
                                    fontSize: {
                                        xs: 20,
                                        sm: 25,
                                        md: 30,
                                    },
                                    color: '#fff',
                                }}
                            />
                            gdicarlo@monasterio.com.ar
                        </a>
                    </p>
                    <p>
                        <a
                            href="https://www.facebook.com/monasterio"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FacebookIcon
                                sx={{
                                    fontSize: {
                                        xs: 20,
                                        sm: 25,
                                        md: 30,
                                    },
                                    color: '#1877F2',
                                }}
                            />
                            Monasterio Tattersall
                        </a>
                    </p>
                    <p>
                        <a
                            href="https://www.instagram.com/monasterio_tattersall"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <InstagramIcon
                                sx={{
                                    fontSize: {
                                        xs: 20,
                                        sm: 25,
                                        md: 30,
                                    },
                                    color: '#E4405F',
                                }}
                            />
                            @monasterio_tattersall
                        </a>
                    </p>
                </div>
            </div>

            <div className="map-container">
                <iframe
                    title="Ubicación Cabaña El Hinojo de Bru"
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3172.25025457074!2d-62.135903!3d-37.72404999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzfCsDQzJzI2LjYiUyA2MsKwMDgnMDkuMyJX!5e1!3m2!1ses!2sar!4v1754922607317!5m2!1ses!2sar"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    );
};

export default Contact;
