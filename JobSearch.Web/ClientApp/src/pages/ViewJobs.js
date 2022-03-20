import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const ViewJobs = () => {
    const [jobs, setJobs] = useState([]);

  
 

    return (
        <div>
            <button className="btn btn-primary" ><Link className='text-light' to="/addJob"> Add Job</Link></button>
            <table className="table table-hover table-striped table-bordered table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Compensation</th>
                        <th>Benefits</th>
                    </tr>
                </thead>
                <tbody>
                 
                </tbody>
            </table>
        </div>)

}
export default ViewJobs