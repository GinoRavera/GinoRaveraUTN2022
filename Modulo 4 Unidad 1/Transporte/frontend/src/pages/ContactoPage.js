import '../styles/components/pages/ContactoPage.css';


const ContactoPage = (props) => {
    return (
        <main className="holder contacto">
            <div>
                <h2>Contacto Rápido</h2>
                <form action="" method="" className="formulario">
                    <p>
                        <label for="nombre">Nombre</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="telefono">Telefono</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="mensaje">Mensaje</label>
                        <textarea name=""></textarea>
                    </p>
                    <p class="acciones"><input type="submit" value="Enviar"/>
                    </p>
                </form>
            </div>
            <div class="datos">
                <h2>Otras vias de comunicacion</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere libero eu massa vehicula luctus. In hac habitasse platea dictumst. Nam vel erat urna. Sed luctus tempus mollis. Nulla luctus est in tristique molestie. Nunc ac aliquam sem, id feugiat velit. Praesent fermentum erat vel mi vulputate, nec hendrerit enim cursus. Morbi at nisl libero. Suspendisse potenti.
                </p>
                <ul>
                    <li>Teléfono: 41064500</li>
                    <li>Email: contacto@transportesx.com.ar</li>
                    <li>Facebook:</li>
                    <li>Twitter:</li>
                    <li>Skype:</li>
                </ul>
            </div>
        </main>
    );
}

export default ContactoPage;