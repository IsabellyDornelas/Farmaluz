import './App.css'

import FormularioCategoria from '../src/components/Categoria/FormularioCategoria/FormularioCategoria'
import ListaCategoria from '../src/components/Categoria/FormularioCategoria/FormularioCategoria'
import Footer from '../src/components/Footer/Footer'
import Navbar from '../src/components/Navbar/NavBar'
import Home from './Pages/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';





import { AuthProvider } from './Context/AuthContext';
import ListaProdutos from '../src/components/Produtos/ListaProdutos/ListaProdutos';
import FormularioProdutos from '../src/components/Produtos/FormularioProdutos/Formularioprodutos';
import DeletarProdutos from '../src/components/Produtos/DeletarProdutos/DeletarProdutos';

// No seu componente App
function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Navbar />
                <div className='min-h-[80vh]'>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        
                        
                        <Route path="/home" element={<Home />} />
                        <Route path="/Categorias" element={<ListaCategoria />} />
                        <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
                        <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
                        
                        <Route path="/produtos" element={<ListaProdutos />} />
              <Route path="/cadastroprodutos" element={<FormularioProdutos />} />
              <Route path="/editarprodutos/:id" element={<FormularioProdutos />} />
              <Route path="/deletarprodutos/:id" element={<DeletarProdutos />} />
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;