import React from 'react'
import getMonthName from '../../Utils/getMonthName'
import Button from './Button'
import setMonth from '../../Utils/setMonth';
import { useDataContext } from '../../Context/DataContext';
import getDate from '../../Utils/getDate';

const StyleButtonMonth: React.CSSProperties = {
  padding: "var(--gap) var(--gap-s)",
  backgroundColor: "var(--color-3)",
  border: "none",
  borderRadius: "var(--gap)",
  color: "var(--color-2)",
  fontWeight: "600",
  textTransform: "capitalize",
}


function ButtonMonth({ month }: { month: number }) {
  const {setInitialDate, setFinalDate} = useDataContext();
  const { firstDay, lastDay } = setMonth(month);

  function handleClick(n: number) {
    setInitialDate(getDate({date: firstDay}));
    setFinalDate(getDate({date: lastDay}));
  }
  
  return (
    <Button style={StyleButtonMonth} onClick={() => handleClick(month)}>
      {getMonthName({month})}
    </Button>
  )
}

export default ButtonMonth