import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    navbar: {
        backgroundColor: '#203040',
        '& a': {
            color: '#ffffff',
            marginLeft: 10,
        },
    },
    brand: {
        fontWeight: 'bold',
        fontSize: '1.5rem'
    },
    main: {
        minHeight: '80vh',
    },
    grow: {
        flexGrow: 1
    }
})

export default useStyles
