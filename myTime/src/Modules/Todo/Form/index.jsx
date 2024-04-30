import React from 'react'
import { useForm } from 'react-hook-form';
/**Importation de MIU */
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import Button from '@mui/material/Button';
import dayjs from 'dayjs';
import { useDispatch } from 'react-redux';
import { AddTodoSuccess } from '../../Redux/Todo/Reducers';
/**fin Mui */

function Form() {

  //POur le date et heure
  const today = dayjs();
  const todayStartOfTheDay = today.startOf('day');


  /**code pour les formulaires */
  const {register , handleSubmit,reset} = useForm();
  const dispatch = useDispatch();
  const onSubmitHandler = (data)=>{
    dispatch(AddTodoSuccess(data))
    reset();
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmitHandler)}
      sx={{
        '& > :not(style)': { m: 2, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
     
      <TextField id="standard-basic" label="Nom Taches" {...register('name' ,{required : true})} variant="standard" />
    
      <TextField id="filled-textarea" label="Description Taches" multiline variant="standard" {...register('description')} 
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
       
       
        {/**Date pour les taches */}
        <DemoItem label="Date de votre Taches">
          <DatePicker
            defaultValue={today}
            minDate={today}
            views={['year', 'month', 'day']}
            {...register('date')}
          />
        </DemoItem>
     
     
        {/**Date pour les taches */}
        <DemoItem label="TimePicker">
          <TimePicker defaultValue={todayStartOfTheDay} {...register('time')} />
        </DemoItem>
      </LocalizationProvider>

      <Button variant="contained" type='submit'>A faire</Button>

    </Box>
  )
}

export default Form
