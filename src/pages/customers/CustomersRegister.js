
import { useState } from "react"
import { TextField, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"
import axios from "axios"


import Toasty from '../../components/Toasty'
const useStyles = makeStyles((theme) =>({
  wrapper:{
    margin: theme.spacing(4)
  }
}))


const CustomersRegister = () => {
  
const [useForm, setUseForm] = useState({
    name: {
      value:'',
      error: false, 
    },
    job:{
      value: '',
      error: false,
    }
  })

const [openToasty, setOpenToasty] = useState({
  open: false,
  message: '',
  severity: ''

})

// const toastyStatus ={
//   error:
// }
// const errorToasty = () =>{
//   setOpenToasty({
//     open: false,
//     message: 'Register Fail',
//     severity: 'error'
//   })
// }

const postNewUser = async () =>{
    const sendData = await axios.post('https://reqres.in/api/users', {
      name: useForm.name.value,
      job: useForm.job.value
    })
    console.log(sendData)
    
    setOpenToasty({
      open: true,
      message: 'success',
      severity: 'success'
    })
  
  }

const handleForm = (e) => {
  const {name, value} = e.target
  setUseForm({
    ...useForm,
    [name]:{
      value,
    },

  })
  }

const handleRegisterButton = () => {
  let newFormState = {
    ...useForm,
  }
  let hasError = false
 if(!useForm.name.value) {
   hasError = true
    newFormState.name = {
      value: useForm.name.value,
      error: true,
      helperText: 'enter the name correctly'
    }
    
  }
  if(!useForm.job.value) {
    hasError = true
    newFormState.job = {
      value: useForm.job.value,
      error: true,
      helperText: 'enter the job correctly'

    }
  }
  
  if(hasError){
    
  return setUseForm(newFormState)
  
  }
  
  
  postNewUser()
}

  const classes = useStyles()
  return (
    <>
    <div className={classes.wrapper}>
        <TextField helperText={useForm.name.error ? useForm.name.helperText : ''} error={useForm.name.error} id="standard-basic" name='name' value={useForm.name.value} onChange={handleForm} label="User Name" variant="standard" />
    </div>
    <div className={classes.wrapper}>
        <TextField helperText={useForm.job.error ? useForm.job.helperText : ''}  error={useForm.job.error} id="standard-basic" name='job' value={useForm.job.value}  onChange={handleForm} label="User Job" variant="standard" />
    </div>
    <div className={classes.wrapper}>
    <Button variant='contained' color='primary' onClick={handleRegisterButton}>Confirm Register</Button>
    </div>
    <Toasty open={openToasty.open} severity={openToasty.severity} text={openToasty.message} onClose={() => setOpenToasty({open: false})}/>
    </>
  )
}

export default CustomersRegister
