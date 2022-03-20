import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const AddCompany = () => {
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [compensation, setCompensation] = useState('');
    const [companyId, setCompanyId] = useState(0);
    const [benefitsId, setBenefitsId] = useState([]);
    const [companies, setCompanies] = useState([]);
    const [benefitList, setBenefitList] = useState([]);
    const job = { title, compensation, companyId, benefitsId };

    useEffect(() => {
        const getCompanies = async () => {
            const { data } = await axios.get('/api/jobsearch/getcompanies');
            setCompanies(data);
        }
        const getBenefits = async () => {
            const { data } = await axios.get('/api/jobsearch/getbenefits');
            setBenefitList(data);
        }
        getCompanies();
        getBenefits();
    }, []);

    const onSubmit = async () => {
        await axios.post('/api/jobsearch/addJob', { job, benefitsId });
        history.push('/');
    }

    return (
        <div style={{ height: "70vh" }} className="row justify-content-center align-items-center">
            <div className="col-md-8">
                <h2>Add Job</h2>
                <input onChange={e => setTitle(e.target.value)}
                    value={title}
                    type="text"
                    className="form-control-lg form-control"
                    placeholder="Job Title" />
                <input onChange={e => setCompensation(e.target.value)}
                    value={compensation}
                    type="text"
                    className="form-control-lg form-control"
                    placeholder="Compensation" />

                <select id="companyId" className="form-control form-control-lg"
                    onChange={e => setCompanyId(e.target.value)}                >
                    <option>Select a Company</option>
                    {companies.map(c => {
                        return <option key={c.id} value={c.id}>{c.name}</option>
                    })
                    }                       
                </select>
                <select className="select form-control form-control-sm" multiple
                                 >
                    <option disabled>Select Benefits</option>
                    {benefitList.map(b => {
                        return <option key={b.id} value={b.id} onClick={e => setBenefitsId([...benefitsId, e.target.value])}   >{b.name}</option>
                    }
                        )}
                </select>

                <br>
                </br>
                <button onClick={onSubmit} className="btn btn-primary btn-block">Save</button>
            </div>
        </div>
    )
}

export default AddCompany;