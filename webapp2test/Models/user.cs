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


        [Required]
        public string Userame { get; set; } = null!;

        [Required]
        public string Password { get; set; } = null!;

        [Required]
        public string Phone { get; set; } = null!;
    }

    public class login {
        [Key]
        public int id { get; set; }

        [Required]
        public string Username { get; set; } = null!;

        [Required]
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
    public class Order
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

        [Required] 
        public string[] quantity { get; set; } = null!;

        [Required]
        public string total { get; set; } = null!;

        [Required]
        public int status { get; set; } = 0;
    }

    public class Queue {
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
