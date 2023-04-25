using NuGet.Packaging.Signing;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
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


    public class Restaurant{
        [Key]
        public int Id { get; set; }
        [Required]
        public string name { get; set; } = null!;
    }

    public class Menu {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; } = null!;
        [Required]
        public int Price { get; set; }
        [Required]
        public int RestaurantId { get; set; }

    }
    public class order
    {
        [Key]
        public int Id { get; set; }

        public DateTime? Createdate { get; set; } = DateTime.UtcNow;

        [Required]
        public string RecieverName { get; set; } = null!;
        [Required]
        public string[] Foodname { get; set; } = null!;

        [Required]
        public int[] Price { get; set; } = null!;

        [Required]

        public string Phone { get; set; } = null!;

        [Required]
        public string[] restaurantName { get; set; } = null!;
    }

    public class queue {
        [Key]
        public int Id { get; set; }

        public DateTime? Createdate { get; set; } = DateTime.UtcNow;

        [Required]

        public string SenderName { get; set; }= null!;

        [Required]
        public string RecieverName { get; set; } = null!;
        [Required]
        public string[] Foodname { get; set; } = null!;

        [Required]
        public int[] Price { get; set; } = null!;

        [Required]

        public string Phone { get; set; } = null!;


        [Required]

        public string[] restaurantName { get; set; } = null!;

    }
}
