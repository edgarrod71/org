import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(../../src/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://www.aluracursos.com/'>
                <img src="src/img/facebook.png" alt='Facebook' />
            </a>
            <a href='https://www.aluracursos.com/'>
                <img src="src/img/twitter.png" alt='twitter' />
            </a>
            <a href='https://www.aluracursos.com/'>
                <img src="src/img/instagram.png" alt='instagram' />
            </a>
        </div>
        <img src='src/img/Logo.png' alt='org' />
        <strong>Desarrollado por edgarrod71@gmail.com</strong>
    </footer>
}

export default Footer