using System;
using System.Collections.Generic;
using Newtonsoft.Json;

namespace JobSearch.Data
{
    
    public class Job
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Compensation { get; set; }      
        public int CompanyId { get; set; }
        public List<Benefit> Benefits { get; set; }
        [JsonIgnore]
        public Company Company { get; set; }
       
    }
   
}
