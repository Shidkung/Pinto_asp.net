using NuGet.Packaging.Signing;
using System.ComponentModel.DataAnnotations;
using System.Runtime.CompilerServices;
using webapp2test.Data.Migrations;

namespace webapp2test.Models
{
    public class user
    {
        [Key]
        public int Id { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;


        [Required(ErrorMessage ="ใส่ไอสัส")]
        public string Userame { get; set; } = null!;

        [Required(ErrorMessage ="ใส่ไอสัส")]
        public string Password { get; set; } = null!;

        [Required(ErrorMessage = "ใส่ไอสัส")]
        public string Phone { get; set; } = null!;
    }

    public class login {
        [Key]
        public int id { get; set; }

        [Required(ErrorMessage = "ใส่ไอสัส")]
        public string Username { get; set; } = null!;

        [Required(ErrorMessage = "ใส่ไอสัส")]
        public string password { get; set; } = null!;
        public DateTime? Createdate { get; set; } = DateTime.UtcNow;

    }


    
    public class order
    {




    }

    public class queue {
    
    
    
    }
}
