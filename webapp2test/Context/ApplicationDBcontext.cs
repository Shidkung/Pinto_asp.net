using Microsoft.EntityFrameworkCore;
using System;
using webapp2test.Models;

namespace webapp2test.Context
{
    public class ApplicationDBcontext : DbContext
    {
           public ApplicationDBcontext(DbContextOptions<ApplicationDBcontext>options)
            : base(options) { 
        
        
        }

        public DbSet<user> User{ get; set; }
        public DbSet<login> Logins { get; set; }
        
        public DbSet<Restaurant> restaurant { get; set; }
        public DbSet<Menu> menus { get; set; }

        public DbSet<Order> orders { get; set; }

        public DbSet<Queue> Queues { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Order>().Property(x => x.Foodname).HasColumnType("text[]");
            modelBuilder.Entity<Order>().Property(x => x.Price).HasColumnType("int[]");
            modelBuilder.Entity<Order>().Property(x => x.restaurantName).HasColumnType("text[]");
            modelBuilder.Entity<Order>().Property(x => x.Foodname).HasColumnType("text[]");
            modelBuilder.Entity<Order>().Property(x => x.Price).HasColumnType("int[]");

        }


    }
}
