using webapp2test.Models;

namespace webapp2test.DTO
{
    public class UserDTO
    {
        public string? Username { get; set; }
        public string? Password { get; set; }
        public string? Phone { get; set; }
    }

    public class LoginDTO {
        public string? Username { get; set; } = null!;

        public string? password { get; set; } = null!;

    }

    public class RestaurantDTO {

 
      public string? name { get; set; } = null!;

    }

    public class MenuDTO {

    
        public string Name { get; set; } = null!;
        public int Price { get; set; }
        public int RestaurantId { get; set; }


    }

    public class orderDTO {

        public string RecieverName { get; set; } = null!;
        
        public string[] Foodname { get; set; } = null!;

      
        public int[] Price { get; set; } = null!;

       
        public string Phone { get; set; } = null!;

        public string[] restaurantName { get; set; } = null!;

    }
    public class MyViewModelDTO
    {
        public UserDTO? User { get; set; }
        public LoginDTO? Login { get; set; }

        public MenuDTO? Menu { get; set; }  
        public RestaurantDTO? Restaurant { get; set; }

        public orderDTO? Order { get; set; }
    }

    
}
