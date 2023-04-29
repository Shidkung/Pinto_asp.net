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
using webapp2test.Data.Migrations;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using System;
using System.IO;

namespace webapp2test.Controllers

{
    public class userController : Controller
    {

        private readonly ApplicationDBcontext _DB;


        
       

        public userController(ApplicationDBcontext dB)
        {
            _DB = dB;
        }

        public IActionResult Waitorder(UserDTO user) {
      
            return View(user);
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
                var Menu = new Models.Menu
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

        [HttpPost("/api/order")]
        public IActionResult order([FromBody] orderwDTO order) {
            
            var orders = order.order;
            var orderSplit = orders.Split("");
            var total = order.total;
            var name = order.RecieverName;
            var Phone = order.Phone;


            
         


            List<string> foodnameList = new List<string>();
            List<string> restaurantnAme = new List<string>();
            List<int> PRICE = new List<int>();
           List<string> QTYY = new List<string>();

    
            var REsname = "";

            // วน ทาทุก orderlist เพื่อเอาไปใส่ list
            
            for (int i =0;i<orderSplit.Length-1;i++){

                var str = orderSplit[i];
                var s1 = str.Split("-") ;       // ได้ [ ชื่อร้าน , string ยาวๆ ] 
                var restaurantName = s1[0];     // ชื่อร้าน

                var s2 = s1[1];  
                if (restaurantName == "") {
                    restaurantName = REsname;
                    s1[0] = restaurantName;   
                }
                
                         // string ยาวๆ
               
                string input =s2;
                string qty = string.Empty;          // qty
                string remainingChars = string.Empty;       // string ที่เหลือ

                // Loop through the string until a non-digit character is found
                for (int j = 0; j < input.Length; j++){
                    if (Char.IsDigit(input[j])){
                        qty += input[j];
                    }
                    else{
                        remainingChars = input.Substring(j);
                        break;
                    }
                }

                string input2 = remainingChars;
                var parts = input2.Split('฿');

                string foodName = parts[0]; // "ชื่ออาหาร"
                string price = parts[1]; // "ราคา" str


                //int prices =  Convert.ToInt32(price);

                int strNum =0;
       
                int index = price.IndexOf(".");
                if (index != -1)
                {
                    string  strs = price.Substring(0, index);
                    int num = int.Parse(strs);
                    strNum = num;
                    Console.WriteLine(num);
                }
                else
                {
                    Console.WriteLine("Cannot find decimal point");
                }
    

                foodnameList.Add(foodName);
                restaurantnAme.Add(restaurantName);
                PRICE.Add(strNum);
                QTYY.Add(qty);

                
            }


        var entity = new Order() { 

                    Foodname = foodnameList.ToArray(), 
                    RecieverName = name,
                    Price = PRICE.ToArray(),
                    Phone = Phone,
                    restaurantName = restaurantnAme.ToArray(),
                    quantity = QTYY.ToArray(),
                    total = total
        };
            _DB.orders.Add(entity);
            _DB.SaveChanges();


            var User = new UserDTO()
            {

                Username = name,
                Phone = Phone

            };





           return RedirectToAction("show");


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

        [HttpPost]
       public async Task<IActionResult> Index2(UserDTO user)
        {   
            var User = await _DB.User.FirstOrDefaultAsync(e => e.Userame == user.Username);
            UserDTO Users = new UserDTO() { 
                    Username = User.Userame,
                    Phone = User.Phone,

            };
            return View(Users);
        }
        public IActionResult Index(string Username, string Phone)
        {

            UserDTO user = new UserDTO()
            {
                Username = Username,
                Phone = Phone

            };
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
                    return RedirectToAction("show");
                }
            }
            return BadRequest();
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
                        Phone = foundUser.Phone,
                    };
                    _DB.Logins.Add(entity);
                    _DB.SaveChanges();
                    var test = RedirectToAction("Index", User );
                    return test;
                }
            }
         return NotFound();
        }

        /// ทำ orderList ส่งไป db แล้ว redirect ไปหน้า index

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult createOrder(Order order)
        {
                _DB.orders.Add(order);
                _DB.SaveChanges();
                return RedirectToAction("Index");
        }


     


         

        [HttpGet("/api/test/{id}")]
        public IActionResult orderQueue(int id)
        {
  
               var queue = _DB.menus.Find(id);

            if (queue != null) {


                int rowIndex = _DB.menus .Where(e => e.Id <= queue.Id).Count();

                return Ok(rowIndex);


            }



            return View();
        }
        public IActionResult waitingOrder(UserDTO user) {
            if (user.Username == null || user.Phone == null)
            {
                user.Username = TempData["username"] as string;
                user.Phone= TempData["Phone"] as string;
            }
            ViewData["username"] = user.Username;
            ViewData["Phone"]=user.Phone;
            IEnumerable<Order> allOrder = _DB.orders;
            return View(allOrder);
        }

        public async Task<IActionResult> choose(int? Id , string? Username)
        {
          
            var user = await _DB.User.FirstOrDefaultAsync(e => e.Userame == Username);
            var data = _DB.orders.SingleOrDefault(e => e.Id == Id);
            ViewData["username"] = user.Userame;
            ViewData["Phone"] = user.Phone;
            if (data == null)
            {

                return NotFound();

            }
            data.status = 1;
            _DB.SaveChanges();

            return View(data);          
        }

        public async Task<IActionResult> cancelOrder(int? Id , string? Username)
        {

            var user = await _DB.User.FirstOrDefaultAsync(e => e.Userame == Username);
            var data = _DB.orders.Find(Id);
            TempData["username"] = user.Userame;
            TempData["Phone"] = user.Phone;
            if (data == null)
            {

                return NotFound();

            }
            data.status = 0;
            _DB.SaveChanges();

            return RedirectToAction("waitingOrder");
        }
        public async Task<IActionResult> DeleteOrder(int? Id ,string? Username)
        {

            var user = await _DB.User.FirstOrDefaultAsync(e => e.Userame == Username);
            TempData["username"] = user.Userame;
            TempData["Phone"] = user.Phone;
            var data = _DB.orders.Find(Id);

            if (data == null)
            {

                return NotFound();

            }
            _DB.orders.Remove(data);
            _DB.SaveChanges();

            return RedirectToAction("waitingOrder");
        }

        public async Task<IActionResult> AboutUs(string Username) {
            var user = await _DB.User.FirstOrDefaultAsync(e => e.Userame == Username);
            ViewData["Username"] = user.Userame;
            ViewData["Phone"] = user.Phone;
            return View();
        }

    }




}
