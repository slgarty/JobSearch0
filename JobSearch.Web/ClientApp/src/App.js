import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './pages/Home';
import AddCompany from './pages/AddCompany';
import ViewAllBenefits from './pages/ViewAllBenefits';
import AddJob from './pages/AddJob';
import AddBenefit from './pages/AddBenefit';
import JobsForCompany from './pages/JobsForCompany'
import ViewJobs from './pages/ViewJobs';

const App = () => {
    return (
        <Layout>
            <Route exact path='/' component={Home} />
            <Route exact path='/AddCompany' component={AddCompany} />
            <Route exact path='/ViewAllBenefits' component={ViewAllBenefits} />
            <Route exact path='/AddJob' component={AddJob} />
            <Route exact path='/AddBenefit' component={AddBenefit} />
            <Route exact path='/JobsForCompany' component={JobsForCompany} />
            <Route exact path='/ViewJobs' component={ViewJobs} />
        </Layout>
    );
}

export default App;