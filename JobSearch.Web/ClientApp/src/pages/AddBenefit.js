import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const AddBenefit = () => {
    const history = useHistory();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
  
    const onSubmit = async () => {
        await axios.post('/api/jobsearch/addBenefit', { name, description});
        history.push('/viewAllBenefits');
    }

    return (
        <div style={{ height: "70vh" }} className="row justify-content-center align-items-center">
            <div className="col-md-8">
                <h2>Add Benefit</h2>
                <input onChange={e => setName(e.target.value)}
                    value={name}
                    type="text"
                    className="form-control-lg form-control"
                    placeholder="Benefit Name" />
                <input onChange={e => setDescription(e.target.value)}
                    value={description}
                    type="text"
                    className="form-control-lg form-control"
                    placeholder="Description" />
                <br>
                </br>
                <button onClick={onSubmit} className="btn btn-primary btn-block">Save</button>
            </div>
        </div>
    )
}

export default AddBenefit;