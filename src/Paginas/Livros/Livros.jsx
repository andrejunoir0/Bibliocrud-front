import './Livros.css';

const Livros = () => {

    
    const livro = {
        nome: 'Livro Exemplo',
        autor: 'Autor Exemplo',
        isbn: '1234567890',
        editora: 'Editora Exemplo',
        data: '01/01/2023'
    };

    return (
        <div>
            <div className="card">
                <a href="/cadastro" className='text'>+ Adicionar Livros</a>
                <h3 className='text2'>Livros</h3>
                <br />

                <ul className='ul'>
                    <li className='li'><strong className='li strong'>Nome:</strong> {livro.nome}</li>
                    <li><strong>Autor:</strong> {livro.autor}</li>
                    <li><strong>ISBN:</strong> {livro.isbn}</li>
                    <li><strong>Editora:</strong> {livro.editora}</li>
                    <li><strong>Data:</strong> {livro.data}</li>
                </ul>
            </div>
        </div>
    )
}

export default Livros;
