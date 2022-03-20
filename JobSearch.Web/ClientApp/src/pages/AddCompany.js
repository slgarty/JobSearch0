import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const AddCompany = () => {
    const history = useHistory();
    const [name, setName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [dateResumeSent, setDateResumeSent] = useState('');


    const onSubmit = async () => {
        await axios.post('/api/jobsearch/addCompany', { name, emailAddress, dateResumeSent });
        history.push('/');
    }

    return (
        <div style={{ height: "70vh" }} className="row justify-content-center align-items-center">
            <div className="col-md-8">
                <h2>Add Company</h2>
                <input onChange={e => setName(e.target.value)}
                    value={name}
                    type="text"
                    className="form-control-lg form-control"
                    placeholder="Company Name" />
                <input onChange={e => setEmailAddress(e.target.value)}
                    value={emailAddress}
                    type="text"
                    className="form-control-lg form-control"
                    placeholder="Email Address" />               
                <input onChange={e => setDateResumeSent(e.target.value)}
                    type="date"
                    value={dateResumeSent}
                    className="form-control-lg form-control"
                    placeholder="Date Sent Resume" />
                <label>Date Resume Sent</label>
                <br />
                <button onClick={onSubmit} className="btn btn-primary btn-block">Save</button>
            </div>
        </div>
    )
}

export default AddCompany;