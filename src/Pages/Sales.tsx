import React from 'react'
import { useDataContext } from '../Context/DataContext';
import { SalesItem } from '../Components/SalesItem';

export const Sales = () => {
  const {data} = useDataContext();

  if (!data) {
    return (
      <section>
        <h1>Carregando...</h1>
      </section>
    )
  }

  return (
    <ul>
      {data.map((venda) => (
        <li key={venda.id}>
          <SalesItem sales={venda} />
        </li>
      ))}
    </ul>
  )
}