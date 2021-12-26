using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DehradunSS.Models
{
    [Table("bankforlandmark", Schema = "public")]
    public class dehracityhospital
    {
        [Key]
        public int gid { get; set; }
        public string name { get; set; }
        
    }
    [Table("funandentainmentarountme", Schema = "public")]
    public class funandentainmentarountme
    {
        [Key]
        public int gid { get; set; }
        public string name { get; set; }
    }
    [Table("touristforaroundme", Schema = "public")]
    public class touristforaroundme
    {
        [Key]
        public int gid { get; set; }
        public string name { get; set; }
    }
}
