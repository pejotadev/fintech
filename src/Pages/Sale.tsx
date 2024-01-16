import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../Hooks/useFetch'
import { ISales } from '../Types/ISales'
import Loading from '../Utils/loading'

type ISalesOmitData = Omit<ISales, 'data'>

export const Sale = () => {
  const { id } = useParams()
  const { data, loading } = useFetch<ISalesOmitData>(`https://data.origamid.dev/vendas/${id}`)

  if(!data){
    return <Loading />
  }
  
  return (
    <div>
      <div className="box mb">ID: {data.id}</div>
      <div className="box mb">Nome: {data.nome}</div>
      <div className="box mb">
        Preço:{" "}
        {data.preco.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
      <div className="box mb">Status: {data.status}</div>
      <div className="box mb">Pagamento: {data.pagamento}</div>
    </div>
  )
}
