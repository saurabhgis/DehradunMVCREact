using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DehradunSS.Models
{
    [Table("hospitals", Schema = "public")]
    public class Hospital
    {
        [Key]
        public int gid { get; set; }
        public string sgovtbuild { get; set; }
        public string location { get; set; }
        public string area { get; set; }
        public string city { get; set; }
        
    }
}
