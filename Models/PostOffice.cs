using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DehradunSS.Models
{
    [Table("postoffice", Schema = "public")]
    public class PostOffice
    {
        [Key]
        public int gid { get; set; }
        public string name { get; set; }
        
    }
}
