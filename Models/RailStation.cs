using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace DehradunSS.Models
{
    [Table("railstation", Schema = "public")]
    public class RailStation
    {
        [Key]
        public int gid { get; set; }
        public string rsname { get; set; }
        public string location { get; set; }
        public string city { get; set; }
        
    }
}
