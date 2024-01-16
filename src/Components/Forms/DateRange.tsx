import React from 'react'
import DateInput from './DateInput'
import { useDataContext } from '../../Context/DataContext'

function DateRange() {
  const { initialDate, setInitialDate , finalDate, setFinalDate }= useDataContext()

  return (
    <div className='box flex'>
      <DateInput 
        label='Data inicial' 
        labelId='data-inicial' 
        value={initialDate}
        onChange={({target}) => setInitialDate(target.value)}
        />
      <DateInput 
        label='Data final' 
        labelId='data-final' 
        value={finalDate}
        onChange={({target}) => setFinalDate(target.value)}
        />
    </div>
  )
}

export default DateRange