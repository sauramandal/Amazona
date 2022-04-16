import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useStyles from '../utils/styles'

type Props = {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    const classes = useStyles()
    return (
        <div>
            <Head>
                <title>Amazona</title>
            </Head>
            <nav className="navbar navbar-dark navbar-expand-sm bg-dark fixed-top p-2">
                <a href="/" className="navbar-brand">
                    <i className="fas fa-blog"></i> &nbsp; Amazona
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarCollapse"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div id="navbarCollapse" className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a href="" className="nav-link active">
                                Blog
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link active">
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link active">
                                Contact
                            </a>
                        </li>
                    </ul>
                    <form className="d-flex form-inline my-2 mx-4 my-lg-0 w-50">
                        <input
                            className="form-control mr-sm-2"
                            type="search"
                            placeholder="Search Products"
                            aria-label="Search"
                        />
                        <button
                            className="btn btn-outline-success my-2 my-sm-0 mx-2"
                            type="submit"
                        >
                            Search
                        </button>
                    </form>
                    {/* Add cart icons to the right */}
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="#" className="nav-link active">
                                <i className="fa-light fa-cart-shopping"></i>
                                Login
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className={classes.main}>{children}</div>
        </div>
    )
}

export default Layout
