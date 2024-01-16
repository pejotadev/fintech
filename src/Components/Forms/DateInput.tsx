import React from 'react'
import Input from './Input'

type IDateInput = React.ComponentProps<'input'> & {
  label: string;
  labelId: string;
};

function DateInput({label, labelId, ...props}: IDateInput) {
  return (
    <Input label={label} labelId={labelId} type='date'  
      {...props}
    />
  )
}

export default DateInput