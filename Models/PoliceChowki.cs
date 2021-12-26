using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace DehradunSS.Models
{
    [Table("policechowki", Schema = "public")]
    public class PoliceChowki
    {
        [Key]
        public int gid { get; set; }
        public string name { get; set; }
       
    }
}
