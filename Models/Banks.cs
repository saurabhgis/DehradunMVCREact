using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DehradunSS.Models
{
    [Table("bankforlandmark", Schema = "public")]
    public class Banks
    {
        [Key]
        public int gid { get; set; }
        public string name { get; set; }
        public string area { get; set; }
        public string dist { get; set; }
    }
}
