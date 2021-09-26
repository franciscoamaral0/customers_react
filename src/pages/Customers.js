import axios from "axios"
import { useState, useEffect  } from "react"
import CustomerCard from "../components/CustomerCard"
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"





const Customers = props => {
    const [customers, setCustomers] = useState([])
    
    
    const useStyles =  makeStyles((theme) => ({
      root:{
        flexGrow: 1,
      },
      card: {
        margin: theme.spacing(2),
        
      }
    }))
    
    const classes = useStyles()
    
    
    const pickData = async () =>{
      
      

        const {data} =  await (await axios.get('https://reqres.in/api/users')).data
        setCustomers(data)
    }
    

    useEffect(() => {
        pickData()
    },[])


return (
  <>
      <Grid container>
        
          {customers.map(customer => 
            <Grid item  xs={12} md={6}>
              <CustomerCard {...customer} className={classes.card}/>
            </Grid>
          )}
      </Grid>
          
          
            
            
    </>
  )
}






export default Customers
