using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace DehradunSS.Models
{
    [Table("UserData",Schema ="public")]
    public class UserData
    {
        [Key]
        public int id { get; set; }
        public string fname { get; set; }
        public string lname { get; set; }
        public string username { get; set; }
        public string email { get; set; }
        public string password { get; set; }
        public decimal mobno { get; set; }
        public bool adrole { get; set; }
    }
}
