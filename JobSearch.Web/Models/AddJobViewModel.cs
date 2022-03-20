using JobSearch.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JobSearch.Web.Models
{
    public class AddJobViewModel
    {
        public List<int> BenefitsId { get; set; }
        public Job Job { get; set; }
    }
}
