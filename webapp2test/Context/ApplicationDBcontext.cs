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
    }
}
