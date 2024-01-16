import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './Components/Header';
import Sidenav from './Components/Sidenav';
import { DataContextProvider } from './Context/DataContext';
import { Resume } from './Pages/Resume';
import {Sales} from './Pages/Sales';
import { Sale } from './Pages/Sale';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <DataContextProvider>
          <Sidenav />
          <main>
            <Header />
            <Routes>
              <Route path='/' element={<Resume />} />
              <Route  path='/vendas' element={<Sales />} />
              <Route path='/venda/:id' element={<Sale />} />
            </Routes>
          </main>
        </DataContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;