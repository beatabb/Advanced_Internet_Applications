using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace WebApplication.Models
{
    public class MusicDbContext : DbContext
    {
        public DbSet<Song> Songs { get; set; }
        public ICollection<Song> Collection { get; set; }

        //public DbSet<Genre> Genres { get; set; }
        public System.Data.Entity.DbSet<WebApplication.Models.Genre> Genres { get; set; }

    }
}