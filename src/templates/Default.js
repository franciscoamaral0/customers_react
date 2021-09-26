import React from 'react'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import { Header } from '../partials/Header/Header'


const useStyles = makeStyles(() => ({
    container: {
        padding: '20px 30px',
        
    }
}))

const Default = ({children}) => {
    const classes = useStyles()
    return (
        <>
            <Header/>
                <Container className={classes.container}>
                    {children}
                </Container>
        </>
    )
}


export default Default