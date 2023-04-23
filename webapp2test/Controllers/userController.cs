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

        [HttpGet("/api/user/{id}")]
        public async Task<ActionResult<user>> GetProduct(int id)
        {
            var product = await _DB.User.FindAsync(id);

            if (product == null)
            {
                return NotFound();
            }

            return product;
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
        public IActionResult create(user user)
        {
            if (ModelState.IsValid) {
                _DB.User.Add(user);
                _DB.SaveChanges();
                return RedirectToAction("Index");
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
