import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';




const useStyles = makeStyles(() => ({
  container: {
    padding: '20px 30px',
      
  }
}))

const Page = ({title, Component}) => {
  const classes = useStyles()
  return (
    <>
      <Typography variant='h3' >
        {title}
      </Typography>
      <Component />
    </>
  )
}


export default Page