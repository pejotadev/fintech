import ButtonMonth from './Forms/ButtonMonth'

function Months() {
  return (
    <div className="flex">
      <ButtonMonth month={-3} />
      <ButtonMonth month={-2} />
      <ButtonMonth month={-1} />
      <ButtonMonth month={0} />
    </div>
  )
}

export default Months