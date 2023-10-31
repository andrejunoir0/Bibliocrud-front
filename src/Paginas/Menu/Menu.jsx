import './Home.css';
import { Link } from "react-router-dom";

const Home = () => {

    return (

        <div className="home h1">

            <h2>Funcionário</h2>
            <div className="card">

                <div className="card-body">

                    <p className="p">Livros</p>

                    <input className="myInput" placeholder="Senha"></input>
                </div><br />
                <Link to="/Cadastro"><button className="botao">Entrar</button></Link>
            </div>

        </div>
    )

}

export default Home; 