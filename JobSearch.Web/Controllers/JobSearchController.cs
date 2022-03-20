using JobSearch.Data;
using JobSearch.Web.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JobSearch.Web.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobSearchController : ControllerBase
    {
        private readonly string _connectionString;

        public JobSearchController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }
        [HttpGet]
        [Route("GetCompanies")]
        public List<Company> GetCompanies()
        {
            var repo = new JobSearchRepository(_connectionString);
            return repo.GetCompanies();
        }
        [HttpGet]
        [Route("GetCompany")]
        public Company GetCompany(int companyId)
        {
            var repo = new JobSearchRepository(_connectionString);
            return repo.GetCompany(companyId);
        }
        [HttpPost]
        [Route("AddCompany")]
        public void AddCompany(Company company)
        {
            var repo = new JobSearchRepository(_connectionString);
            repo.AddCompany(company);
        }
        [HttpPost]
        [Route("addInterviewDate")] 
        public void AddInterviewDate(AddInterviewViewModel vm)
        {

            var repo = new JobSearchRepository(_connectionString);
            repo.SetInterviewDate(vm.CompanyId, vm.InterviewDate);
        }
        [HttpGet]
        [Route("GetBenefits")]
        public List<Benefit> GetBenefits()
        {
            var repo = new JobSearchRepository(_connectionString);
            return repo.GetBenefits();
        }
        [HttpPost]
        [Route("AddJob")]
        public void AddJob(AddJobViewModel vm)
        {
            var repo = new JobSearchRepository(_connectionString);
            repo.AddJob(vm.Job, vm.BenefitsId);
        }
        [HttpPost]
        [Route("AddBenefit")]
        public void AddBenefit(Benefit benefit)
        {
            var repo = new JobSearchRepository(_connectionString);
            repo.AddBenefit(benefit);
        }
        [HttpGet]
        [Route("getJobs")]
        public List<Job> GetJobs()
        {
            var repo = new JobSearchRepository(_connectionString);
            return repo.GetJobs();


        }
        [HttpGet]
        [Route("getJobsForCompany")]
        public List<Job> GetJobsForCompany(int companyId)
        {
            var repo = new JobSearchRepository(_connectionString);
            return repo.GetJobsByCompany(companyId);
        }


    }
}
