import '../styles/components/pages/HomePage.css';
function HomePage(props) {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="img/home/img01.jpg" alt="Avión" />
            </div>
            <div className="columnas">
                <div className="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dui nisl, volutpat eu fringilla non, feugiat a quam. Nunc lacinia erat ante, id sodales purus aliquam condimentum. Nulla odio magna, dignissim at nunc in, egestas dictum est. Phasellus ac sem nisl. Aliquam ut dapibus leo. Vivamus in porta sapien. In tempor est at interdum tristique.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dui nisl, volutpat eu fringilla non, feugiat a quam. Nunc lacinia erat ante, id sodales purus aliquam condimentum. Nulla odio magna, dignissim at nunc in, egestas dictum est. Phasellus ac sem nisl. Aliquam ut dapibus leo. Vivamus in porta sapien. In tempor est at interdum tristique.</p>
                </div>
                <div className="testimonios">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span class="cita">Simplemente Excelente</span>
                        <span class="autor"> Juan Perez-zapatos.com</span>
                    </div>
                </div>
            </div>

        </main>

    );
}

export default HomePage;