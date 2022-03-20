using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobSearch.Data
{
    public class Company
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string EmailAddress { get; set; }
        public DateTime DateResumeSent { get; set; }
        public DateTime? InterviewDate { get; set; }
        public List<Job> Jobs { get; set; }

    }
}
