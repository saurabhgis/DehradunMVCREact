using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using DehradunSS.Data;
using DehradunSS.Models;

namespace DehradunSS.Controllers
{
    public class TestModelsController : Controller
    {
        private readonly DataContext _context;
        public TestModelsController(DataContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> Busdepot(BusDepot model, string query)
        {
            if (query != null)
            {
                if (query != "")
                {
                    var q = query.Split("=");
                    Console.WriteLine(q[0]);
                    Console.WriteLine(q[1]);
                    if (q[0] == "name")
                    {
                        var testModel = _context.bus.Where(s => s.name.Contains(q[1]));
                        return View(testModel.ToList());
                    }
                }
            }
            
            return View(await _context.bus.ToListAsync());
            
        }
        [HttpPost]
        public async Task<IActionResult> Banks()
        {
            return View(await _context.bank.ToListAsync());
        }
        [HttpPost]
        public async Task<IActionResult> PoliceChowki()
        {
            return View(await _context.policechowki.ToListAsync());
        }
        [HttpPost]
        public async Task<IActionResult> Parking(Parking model,string query)
        {
            if (query != null)
            {
                var q = query.Split("=");
                Console.WriteLine(q[0]);
                Console.WriteLine(q[1]);
                if (q[0] == "name")
                {
                    var testModel = _context.parking.Where(s => s.name.Contains(q[1]));
                    return View(testModel.ToList());
                }
            }
            return View(await _context.parking.ToListAsync());
        }
       
        [HttpPost]
        public async Task<IActionResult> PostOffice(PostOffice model,string query)
        {
            if (query != null)
            {
                var q = query.Split("=");
                Console.WriteLine(q[0]);
                Console.WriteLine(q[1]);
                if (q[0] == "name")
                {
                    var testModel = _context.postoff.Where(s => s.name.Contains(q[1]));
                    return View(testModel.ToList());
                }
            }
            return View(await _context.postoff.ToListAsync());
        }
        [HttpPost]
        public async Task<IActionResult> MedicalStore(MedicalStore model, string query)
        {
            if (query != null)
            {
                var q = query.Split("=");
                Console.WriteLine(q[0]);
                Console.WriteLine(q[1]);
                if (q[0] == "area")
                {
                    var testmodel = _context.medical.Where(s => s.area.Contains(q[1]));
                    return View(testmodel.ToList());
                }
                else if (q[0] == "location")
                {
                    var testmodel = _context.medical.Where(s => s.location.Contains(q[1]));
                    return View(testmodel.ToList());
                }
                else if (q[0] == "sgovtbuild")
                {
                    var testmodel = _context.medical.Where(s => s.sgovtbuild.Contains(q[1]));
                    return View(testmodel.ToList());
                }
                else if (q[0] == "city")
                {
                    var testmodel = _context.medical.Where(s => s.city.Contains(q[1]));
                    return View(testmodel.ToList());
                }
            }
            return View(await _context.medical.ToListAsync());
        }
        [HttpPost]
        public async Task<IActionResult> Hospital(MedicalStore model, string query)
        {
            Console.WriteLine(query);
            if (query != null) {
                var q = query.Split("=");
                Console.WriteLine(q[0]);
                Console.WriteLine(q[1]);
                if (q[0] == "area")
                {
                    var testmodel = _context.hospital.Where(s => s.area.Contains(q[1]));
                    return View(testmodel.ToList());
                }
                else if (q[0] == "location")
                {
                    var testmodel = _context.hospital.Where(s => s.location.Contains(q[1]));
                    return View(testmodel.ToList());
                }
                else if (q[0] == "sgovtbuild")
                {
                    var testmodel = _context.hospital.Where(s => s.sgovtbuild.Contains(q[1]));
                    return View(testmodel.ToList());
                }
                else if (q[0] == "city")
                {
                    var testmodel = _context.hospital.Where(s => s.city.Contains(q[1]));
                    return View(testmodel.ToList());
                }
            }
            
            return View(await _context.hospital.ToListAsync());
        }
        [HttpPost]
        public async Task<IActionResult> FarmHouse(FarmHouse model,string query)
        {
            if (query != null)
            {
                var q = query.Split("=");
                Console.WriteLine(q[0]);
                Console.WriteLine(q[1]);
                if (q[0] == "name")
                {
                    var testModel = _context.farmhouse.Where(s => s.name.Contains(q[1]));
                    return View(testModel.ToList());
                }
            }
            return View(await _context.farmhouse.ToListAsync());
        }

        [HttpPost]
        public async Task<IActionResult> Railstaion()
        {
            return View(await _context.railstate.ToListAsync());
        }
        [HttpGet]
        public IActionResult PostOffDetails(int ID)
        {
            var course = _context.postoff.Where(x => x.gid == ID).FirstOrDefault();
            return View(course);
        }
        public IActionResult FarmHouseDetails(int ID)
        {
            var course = _context.farmhouse.Where(x => x.gid == ID).FirstOrDefault();
            return View(course);
        }
        public IActionResult HospitalDetails(int ID)
        {
            var course = _context.hospital.Where(x => x.gid == ID).FirstOrDefault();
            return View(course);
        }
        public IActionResult ParkingDetails(int ID)
        {
            var course = _context.parking.Where(x => x.gid == ID).FirstOrDefault();
            return View(course);
        }
        public IActionResult BusDepotDetails(int ID)
        {
            var course = _context.bus.Where(x => x.gid == ID).FirstOrDefault();
            return View(course);
        }
        public IActionResult MedicalStoreDetails(int ID)
        {
            var course = _context.medical.Where(x => x.gid == ID).FirstOrDefault();
            return View(course);
        }

        // GET: TestModels
        public async Task<IActionResult> Index()
        {
            return View(await _context.test.ToListAsync());
        }

        // GET: TestModels/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var testModel = await _context.test
                .FirstOrDefaultAsync(m => m.id == id);
            if (testModel == null)
            {
                return NotFound();
            }

            return View(testModel);
        }

        // GET: TestModels/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: TestModels/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("id,fname,lname,username,email,password")] UserData testModel)
        {
            if (ModelState.IsValid)
            {
                _context.Add(testModel);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(testModel);
        }

        // GET: TestModels/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var testModel = await _context.test.FindAsync(id);
            if (testModel == null)
            {
                return NotFound();
            }
            return View(testModel);
        }

        // POST: TestModels/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("id,fname,lname,username,email,password")] UserData testModel)
        {
            if (id != testModel.id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(testModel);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!TestModelExists(testModel.id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(testModel);
        }

        // GET: TestModels/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var testModel = await _context.test
                .FirstOrDefaultAsync(m => m.id == id);
            if (testModel == null)
            {
                return NotFound();
            }

            return View(testModel);
        }

        // POST: TestModels/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var testModel = await _context.test.FindAsync(id);
            _context.test.Remove(testModel);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool TestModelExists(int id)
        {
            return _context.test.Any(e => e.id == id);
        }
    }
}
