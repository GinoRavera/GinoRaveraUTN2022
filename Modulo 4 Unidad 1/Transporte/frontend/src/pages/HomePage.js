import '../styles/components/pages/HomePage.css';

const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="img/home/img01.jpg" alt="Avion" />
            </div>
            <div className="columnas">
                <div className="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere libero eu massa vehicula luctus. In hac habitasse platea dictumst. Nam vel erat urna. Sed luctus tempus mollis. Nulla luctus est in tristique molestie. Nunc ac aliquam sem, id feugiat velit. Praesent fermentum erat vel mi vulputate, nec hendrerit enim cursus. Morbi at nisl libero. Suspendisse potenti.
                    </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere libero eu massa vehicula luctus. In hac habitasse platea dictumst. Nam vel erat urna. Sed luctus tempus mollis. Nulla luctus est in tristique molestie. Nunc ac aliquam sem, id feugiat velit. Praesent fermentum erat vel mi vulputate, nec hendrerit enim cursus. Morbi at nisl libero. Suspendisse potenti.
                    </p>
                    </div>
                <div className="testimonios">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span class="cita">Simplemente Excelente</span>
                        <span class="autor">Juan Perez-zapatos.com</span>
                    </div>
                </div>
            </div>

        </main>

    );
}

export default HomePage;