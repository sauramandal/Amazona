import { AppBar, Container, Toolbar, Typography } from '@mui/material'
import Head from 'next/head'
import useStyles from '../utils/styles'

const Layout = ({ children }) => {
    const classes = useStyles()
    return (
        <div>
            <Head>
                <title>Amazona</title>
            </Head>
            <AppBar position="static" className={classes.navbar}>
                <Toolbar>
                    <Typography>Amazona</Typography>
                </Toolbar>
            </AppBar>
            <Container className={classes.main}>{children}</Container>
        </div>
    )
}

export default Layout
