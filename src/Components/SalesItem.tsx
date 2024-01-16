import { NavLink } from 'react-router-dom'
import { ISales } from '../Types/ISales'

export const SalesItem = ({ sales } : {
  sales: ISales
}) => {

  return (
    <div className='sales box'>
      <NavLink to={`/venda/${sales.id}`} style={{fontFamily: 'monospace'}}>
        {sales.id}
      </NavLink>
      <div>
        {sales.nome}
      </div>
      <div>
        {sales.preco.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}
      </div>

    </div>
  )
}
