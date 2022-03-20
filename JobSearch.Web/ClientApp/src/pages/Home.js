import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
    const [companies, setCompanies] = useState([]);
    const [interviewDate, setInterviewDate] = useState('');

    const getCompanies = async () => {
        const { data } = await axios.get('/api/jobsearch/getcompanies');
        setCompanies(data);
    }
   
    useEffect(() => {
        getCompanies();
    }, []);


    const onAddInterviewDate = async (companyId) => {
        await axios.post('/api/jobSearch/AddInterviewDate', { companyId, interviewDate });
        getCompanies();
    }

    return(
    <div>
            <button className="btn btn-primary" ><Link className='text-light' to="/addCompany"> Add Company</Link></button>
        <table className="table table-hover table-striped table-bordered table-hover">
            <thead>
                <tr>
                    <th>Company Name</th>
                    <th>Email</th>
                    <th>Date Resume Sent</th>
                        <th>Interview Date</th>
                        <th>View Jobs</th>
                </tr>
            </thead>
                <tbody>
                    {companies.map(c => {
                        return <tr key={c.id}>
                            <td>{c.name}</td>
                            <td>{c.emailAddress}</td>
                            <td>{c.dateResumeSent}</td>
                            <td>{c.interviewDate ? c.interviewDate : <> No Interview Scheduled Yet<br></br>
                                <input
                                    type='date'
                                    onChange={e => setInterviewDate(e.target.value)} />
                                <button className="btn btn-outline-secondary btn-sm "
                                    onClick={() => onAddInterviewDate(c.id, interviewDate)}>
                                    Add
                                        </button></>}
                            </td>
                            <td>
                                <a href={`/jobsForCompany?companyId=${c.id}`}>
                                <button className='btn btn-primary'>                                   
                                        Jobs      
                                </button>
                                </a>
                            </td>                                    
                          </tr>
                    })}
                </tbody>
        </table>
    </div>)

}

export default Home;