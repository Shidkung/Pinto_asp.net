using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Net.Security;
using webapp2test.Context;
using webapp2test.Models;
using System.Net.Http.Headers;
using System.Xml;
using System.Data;
using Microsoft.EntityFrameworkCore;
using webapp2test.DTO;
using System.Net;

namespace webapp2test.Controllers

{
    public class userController : Controller
    {

        private readonly ApplicationDBcontext _DB;


        
       

        public userController(ApplicationDBcontext dB)
        {
            _DB = dB;
        }

        public IActionResult show() {
            
          return View();
        
        }
        [HttpGet("/api/user")]
        public IActionResult GetCustomers()
        {
            IEnumerable<user> alluser = _DB.User;
            return Ok(alluser);
        }

        [HttpPost("/api/restaurant")]
        public  IActionResult AddRestaurant([FromBody] RestaurantDTO restaurant)
        {   

            var word = "success";
            if (ModelState.IsValid)
            {
                var Restaurant = new Restaurant { 
                
                    name = restaurant.name
                
                };
                _DB.restaurant.Add(Restaurant);
                _DB.SaveChanges();
                return Ok(word);
            }
            return BadRequest();
        }


        [HttpPost("/api/Add/menu")]
        public IActionResult Addmenu([FromBody] MenuDTO menu)
        {

            var word = "success";
            if (ModelState.IsValid)
            {
                var Menu = new Menu
                {
                  Name = menu.Name,
                  Price = menu.Price,
                  RestaurantId = menu.RestaurantId,
      
                };
                _DB.menus.Add(Menu);
                _DB.SaveChanges();
                return Ok(word);
            }
            return BadRequest();
        }

        [HttpPost("/api/order/test")]
        public IActionResult order([FromBody] orderDTO order) {

            var myArray = new order() { 
                    
                    Foodname = order.Foodname, 
                    RecieverName = order.RecieverName,
                    Price = order.Price,
                    Phone = order.Phone,
                    restaurantName = order.restaurantName,
            
            };
             _DB.orders.Add(myArray);
            _DB.SaveChanges();

            return Ok(myArray);


        }
        [HttpPost("/api/Delete/menu/{id}")]
        public IActionResult Deletemenu(int id)
        {

            if (ModelState.IsValid)
            {
                var found = _DB.menus.Find(id);
                if (found == null) { 
                    return BadRequest();
                }


                _DB.menus.Remove(found);
                _DB.SaveChanges();
                return Ok(found);
            }
            return BadRequest();
        }
        public IActionResult Index(string Username, string Phone)
        {
            UserDTO user = new UserDTO();
            user.Username = Username;
            user.Phone = Phone;
            var test = View(user);
            return View(user);
        }
        
        // GET
        public IActionResult create() { 
            return View();
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> create(UserDTO user)
        {
            if (ModelState.IsValid) {
                var foundUser = await _DB.User.FirstOrDefaultAsync(e => e.Userame == user.Username);
                if (foundUser != null)
                {
                    return BadRequest("fail");
                }
                else
                {
                    var User = new user() { 
                        Userame = user.Username,
                        Password = user.Password,
                        Phone = user.Phone
                    
                    };
                    _DB.User.Add(User);
                    _DB.SaveChanges();
                    return RedirectToAction("Index");
                }
            }
            return View(user);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> login(LoginDTO login)
        {
           
            if (ModelState.IsValid)
            {
              var foundUser =  await _DB.User.FirstOrDefaultAsync(e => e.Userame == login.Username);
                if (foundUser == null) { 
                    return BadRequest(login.Username);  
                }
               
                if (foundUser.Password == login.password) {

                    var entity = new login()
                    {

                        Username = login.Username,
                        password = login.password,

                    };

                    var User = new UserDTO()
                    {
                        Username = foundUser.Userame,
                        Phone   =   foundUser.Phone,
                    };
                    _DB.Logins.Add(entity);
                    _DB.SaveChanges();
                    var test = RedirectToAction("Index", User );
                    return test;

                }
            }
         return NotFound();
        }

        public IActionResult login() {
            return View();
        }

      

       

       
       

    }

   
}
