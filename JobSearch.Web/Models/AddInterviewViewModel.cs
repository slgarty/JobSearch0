using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JobSearch.Web.Models
{
    public class AddInterviewViewModel
    {
        public int CompanyId { get; set; } 
        public DateTime InterviewDate { get; set; }
    }
}
