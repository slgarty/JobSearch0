import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const ViewAllBenefits = () => {
    const [benefits, setBenefits] = useState([]);

    useEffect(() => {
        const getBenefits = async () => {
            const { data } = await axios.get('/api/jobsearch/getbenefits');
            setBenefits(data);
            console.log(data)
        }

        getBenefits();
    }, []);

    return (
        <div>
            <button className="btn btn-primary" ><Link className='text-light' to="/addBenefit"> Add Benefits</Link></button>
            <table className="table table-hover table-striped table-bordered table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>                        
                    </tr>
                </thead>
                <tbody>
                    {benefits.map(b => {
                        return <tr key={b.id}>
                            <td>{b.name}</td>
                            <td>{b.description}</td>                       
                        </tr>
                    })}
                </tbody>
            </table>
        </div>)

}
export default ViewAllBenefits