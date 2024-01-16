import React from 'react'
import { useDataContext } from '../Context/DataContext';
import DateRange from './Forms/DateRange';
import Months from './Months';
import { useLocation } from 'react-router-dom';

export const Header = () => {
  const {data} = useDataContext();
  const [title, setTitle] = React.useState('Resumo');
  const location = useLocation();

  React.useEffect(() => {
    switch(location.pathname){
      case '/':
        setTitle('Resumo')
        document.title = "Fintech | Resumo"
        break;
      case '/vendas':
        setTitle('Vendas')
        document.title = "Fintech | Vendas"
        break;

    }
    

  }, [location])


  if (!data) {
    return (
      <header className="mb">
        <div className="mb">
          <DateRange />
          <h1>Carregando...</h1>
        </div>
        <Months />
      </header>
    )
  }

  return (
    <header className="mb">
      <div className="mb">
        <DateRange />
        <h1 className='box bg-3'>{title}</h1>
      </div>
      <Months />
    </header>
  )
}
