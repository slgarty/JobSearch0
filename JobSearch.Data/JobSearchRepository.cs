using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobSearch.Data
{
    public class JobSearchRepository
    {
        private readonly string _connectionString;
        public JobSearchRepository(string connectionString)
        {
            _connectionString = connectionString;

        }
        public Company GetCompany(int companyId)
        {
            using var context = new JobSearchContext(_connectionString);
            return context.Companies.FirstOrDefault(c=>c.Id==companyId);
        }
        public List<Company> GetCompanies()
        {
            using var context = new JobSearchContext(_connectionString);
            return context.Companies.Include(j => j.Jobs).ToList();
        }
        public List<Job> GetJobsByCompany(int companyId)
        {
            using var context = new JobSearchContext(_connectionString);
            return context.Jobs.Where(j=>j.CompanyId==companyId).Include(b => b.Benefits).ToList();
        }
        public List<Benefit>GetBenefits()
        {
            using var context = new JobSearchContext(_connectionString);
            return context.Benefits.ToList();
        }
        public Job GetJob(int jobId)
        {
            using var context = new JobSearchContext(_connectionString);
            return context.Jobs.Where(j => j.Id == jobId).Include(b => b.Benefits).FirstOrDefault();
        }
        public void AddCompany(Company company)
        {
            using var context = new JobSearchContext(_connectionString);
            context.Companies.Add(company);
            context.SaveChanges();
        }
        public void AddJob(Job job, List<int> benefitsId)
        {
            job.Benefits = new List<Benefit>();
            
            using var context = new JobSearchContext(_connectionString);
            foreach (int bId in benefitsId)
           {

                    job.Benefits.Add(context.Benefits.FirstOrDefault(b => b.Id == bId));
            }
            context.Jobs.Add(job);
            context.SaveChanges();
            
        }
        public void AddBenefit(Benefit benefit)
        {
            using var context = new JobSearchContext(_connectionString);
            context.Benefits.Add(benefit);
            context.SaveChanges();
        }
        public void SetInterviewDate(int companyId, DateTime interviewDate)
        {
            using var context = new JobSearchContext(_connectionString);
            context.Database.ExecuteSqlInterpolated($"UPDATE Companies SET interviewDate = {interviewDate} WHERE Id = {companyId}");
        }
        public List<Job> GetJobs()
        {
            using var context = new JobSearchContext(_connectionString);
            return context.Jobs.Include(j=> j.Company).Include(b => b.Benefits).ToList();
        }
    }
}
