

const Cadastro = () => {
    const handleClick =()=>{
        return(
            console.log("clicado")
        )
    }
    return (
        <div className="home h1">

            <h2 className="h2">Cadastro</h2>
            <div className="card">

                <div className="card-body">
                    <p className="p">Email</p>

                    <input className="myInput" placeholder="Login"></input>
                    <br />
                    <p className="p">Senha</p>

                    <input className="myInput" placeholder="Senha"></input>

                    <p className="p">Matricula</p>

                    <input className="myInput" placeholder="Senha"></input>
                </div><br />
                <button className="botao" onClick={handleClick}>Cadastrar</button>
            </div>

        </div>
    )
}
export default Cadastro;