using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using DehradunSS.Models;

namespace DehradunSS.Data
{
    public class DataContext: IdentityDbContext
    {
        public DataContext(DbContextOptions<DataContext> options): 
            base(options)
        {
        }
        //public virtual DbSet<TestModel> test{ get; set; }
        public virtual DbSet<UserData> test { get; set; }
        public virtual DbSet<BusDepot> bus { get; set; }
        public virtual DbSet<Banks> bank { get; set; }
        public virtual DbSet<RailStation> railstate { get; set; }
        public virtual DbSet<FarmHouse> farmhouse { get; set; }
        public virtual DbSet<PostOffice> postoff { get; set; }
        public virtual DbSet<Parking> parking { get; set; }
        public virtual DbSet<MedicalStore> medical { get; set; }
        public virtual DbSet<Hospital> hospital { get; set; }
        public virtual DbSet<PoliceChowki> policechowki { get; set; }


        //public virtual DbSet<touristforaroundme> tour { get; set; }
        //public virtual DbSet<funandentainmentarountme> fun { get; set; }
        //public virtual DbSet<dehracityhospital> dehhosp { get; set; }
    }
}
