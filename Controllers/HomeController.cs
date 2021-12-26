using DehradunSS.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using DehradunSS.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Http;
using System.Web;
using System.Security.Claims;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Identity;
using System.Net.Mail;
using System.Net;

namespace DehradunSS.Controllers
{
    //[AllowAnonymous]
    public class HomeController : Controller
    {
        private readonly DataContext _context ;
        private readonly ILogger<HomeController> _logger;
        public int id { get; set; }
        
        public HomeController(DataContext context, ILogger<HomeController> logger)
        {
            _context = context;
            _logger = logger;
        }
        public IActionResult AllMain()
        {
            return View();
        }


        [HttpPost]
        public async Task<IActionResult> SignIn(UserData model, string ReturnUrl)
        {
            Console.WriteLine("SignIn");
            bool isValid = _context.test.Any(x => (x.username == model.username && x.password == model.password));
            Console.WriteLine(isValid);
            if (isValid)
            {
                var usermodel =await _context.test.FirstOrDefaultAsync(x => (x.username == model.username));
                var claims = new List<Claim>();
                {
                    claims.Add(new Claim(ClaimTypes.AuthenticationMethod, model.username));
                    claims.Add(new Claim(ClaimTypes.Name, model.username));
                    Console.WriteLine(usermodel.adrole);
                    if (usermodel.adrole==true)
                    {
                        Console.WriteLine("Admin Aquire");
                        claims.Add(new Claim(ClaimTypes.Role, "Admin"));
                    }
                }
                var claimsIdentity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);
                //var ClaimPrincipal = new ClaimsPrincipal(claimsIdentity);
                await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, new ClaimsPrincipal(claimsIdentity));
                //await HttpContext.SignInAsync(ClaimPrincipal);
                //return Redirect(ReturnUrl == null ? "/Home/DehradunSS" : ReturnUrl);
                return RedirectToAction("DehradunSS", "Home");
            }
            else
            {
                ModelState.AddModelError("CustomError", "Invalid Username or password");
                return Redirect("/#/SignIn");
            }
        }
            

        [HttpPost]
        public IActionResult Create(UserData model)
        {
            Console.WriteLine("Hello Called");
            UserData test = _context.test.Where(b => b.email == model.email).FirstOrDefault();
            if (test is null)
            {
                _context.test.Add(model);
                _context.SaveChanges();
                return Redirect("/#/SignIn");
            }
            else
            {
                ModelState.AddModelError("SignUpError", model.email + " is already registered!!!");
                return Redirect("/#/SignUp");
            }
            
        }
        [HttpPost]
        public async Task<IActionResult> LogOut()
        {
            foreach (var cookie in HttpContext.Request.Cookies) {
                Response.Cookies.Delete(cookie.Key);
            }
            await HttpContext.SignOutAsync();
            //return RedirectToAction("SignIn", "Home");
            return Redirect("/#/SignIn");
        }
        [HttpPost]
        public async Task<IActionResult> Forgot(UserData model)
        {
            bool isValid = _context.test.Any(x => (x.email == model.email));
            if (isValid)
            {

                var testModel = await _context.test
                    .FirstOrDefaultAsync(x => (x.email == model.email));
                var body = "<h1>Your Password Is : " + testModel.password + "</h1>";
                var message = new MailMessage();
                message.To.Add(new MailAddress(model.email));
                message.From = new MailAddress("aagamshah4444@gmail.com");
                message.Subject = "Dehradun SmartCity";
                message.Body = string.Format(body, model.password);
                message.IsBodyHtml = true;
                using (var smtp = new SmtpClient())
                {
                    var credential = new NetworkCredential
                    {
                        UserName = "aagamshah4444@gmail.com",
                        Password = "aagam@123456789"
                    };
                    smtp.Credentials = credential;
                    smtp.Port = 587;
                    smtp.Host = "smtp.gmail.com";
                    smtp.EnableSsl = true;
                    await smtp.SendMailAsync(message);

                }
                return RedirectToAction("");
            }
            else
            {
                return Redirect("/#/ForgotPass");
            }

        }
        public IActionResult Index()
        {
            return View();
        }
        
        public IActionResult AdvanceSearch()
        {
            return View();
        }
        
        public IActionResult PredefineQuery()
        {
            return View();
        }
        
        public IActionResult About()
        {
            return View();
        }
        [HttpGet("Home/SignIn")]
        
        public IActionResult SignIn(string returnUrl)
        {
            ViewData["ReturnUrl"] = returnUrl;
            return View();
        }
        
        public IActionResult SignUp()
        {
            return View();
        }
        
        public IActionResult ForgotPass()
        {
            return View();
        }
        [Authorize]
        
        public IActionResult DehradunSS()
        {
            return View();
        }
        
        public IActionResult TestNav()
        {
            return View();
        }
        
        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
