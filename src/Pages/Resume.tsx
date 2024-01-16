import SalesChart from '../Components/SalesChart';
import { useDataContext } from '../Context/DataContext'

export const Resume = () => {
  const {data} = useDataContext();

  if (!data) {
    return (
      <section>
        <h1>Carregando...</h1>
      </section>
    )
  }

  return (
    <section>
      <div className='resumo flex mb'>
        <div className='box'>
          <h2>Vendas</h2>
          <span>
          {data.reduce((acc, venda) => acc + venda.preco, 0).toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}
          </span>
        </div>     
        <div className='box'>
          <h2>Recebido</h2>
          <span>
          {data
            .filter((venda) => venda.status === "pago")
            .reduce((acc, venda) => acc + venda.preco, 0)
            .toLocaleString("pt-BR", {
              style: "currency", currency: "BRL"
            })
          }
          </span>
        </div>  
        <div className='box'>
          <h2>Processando</h2>
          <span>
          {data
            .filter((venda) => venda.status === "processando")
            .reduce((acc, venda) => acc + venda.preco, 0)
            .toLocaleString("pt-BR", {
              style: "currency", currency: "BRL"
            })
          }
          </span>
        </div>
      </div>
      <div className='box mb'>
        <SalesChart data={data} />
      </div>
    </section>
  )
}
