import './App.css';
import Home from './Paginas/Home/Home';
import Aluno from './Paginas/Aluno/Aluno';
import Cadastro from './Paginas/Cadastro/cadastro';
import Login from './Paginas/Login/Login';
import LoginFuncionario from './Paginas/LoginFuncionario/LoginFuncionario';
import Funcionario from './Paginas/Funcionario/Funcionario'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './Componentes/NavBar/NavBar';


function App() {

  return (
    <BrowserRouter>
    <div className='App'>
      <NavBar/>
    <div className='container'>

      
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/Aluno' element={<Aluno />} />
        <Route path='cadastro' element={<Cadastro/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/LoginFuncionario' element={<LoginFuncionario/>}/>
        <Route path='/Funcionario' element={<Funcionario/>}/>


      </Routes>
     
    </div>
    </div>
    </BrowserRouter>

  )
}

export default App
