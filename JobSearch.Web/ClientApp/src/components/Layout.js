import React from 'react';
import { Link } from 'react-router-dom';


const Layout = ({ children }) => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-sm navbar-dark fixed-top bg-dark border-bottom box-shadow">
                    <div className="container">
                        <Link to='/' className="navbar-brand">Job Search</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                            <ul className="navbar-nav flex-grow-1">
                                <li className="nav-item"><Link to="/" className='nav-link text-light'>Home</Link></li>
                                <li className="nav-item"><Link to="/addCompany" className='nav-link text-light'>Add Company</Link></li>
                                <li className="nav-item"><Link to="/ViewJobs" className='nav-link text-light'>View Jobs</Link></li>
                                <li className="nav-item"><Link to="/addJob" className='nav-link text-light'>Add Job</Link></li>
                                <li className="nav-item"><Link to="/viewAllBenefits" className='nav-link text-light'>Benefits</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="container" style={{ marginTop: 60 }}>
                {children}
            </div>
        </div>
    )
}

export default Layout