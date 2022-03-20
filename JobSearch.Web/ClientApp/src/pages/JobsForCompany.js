import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

const JobsForCompany = () => {
    const { companyId } = useParams();
    const [jobs, setJobs] = useState([])
    const [company, setCompany] = useState('')


    const GetCompany = async () => {
        console.log(companyId);
        const { data } = await axios.get(`/api/jobsearch/getCompany?companyId=${companyId}`);
        setCompany(data);
        console.log(data)
    }
    const JobsForCompany = async () => {
        const { data } = await axios.get(`/api/jobsearch/getJobsForCompany?companyId=${companyId}`);
        setJobs(data);
        console.log(data)
    }

    useEffect(() => {
        JobsForCompany();
        GetCompany();
    }, []);
    return (
        <>
            <h1>Jobs at {company.name} </h1>
            <table className="table table-hover table-striped table-bordered table-hover">
                <thead>
                    <tr>
                        <th>Job Title</th>
                        <th>Compensation</th>
                        <th>Benefits Count</th>
                    </tr>
                </thead>
                <tbody>
                    {jobs && jobs.map(j => {
                        return <tr key={j.id}>
                            <td>{j.title}</td>
                            <td>{j.compensation}</td>
                            <td>{j.benefits.count}</td>
                        </tr>
                    })
                    }

                </tbody>
            </table>

            </>
        )
}
export default JobsForCompany