using Microsoft.AspNetCore.Mvc;

namespace ProjectSchool_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProfessorController: Controller
    {
        public ProfessorController()
        {
            
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok();
        }

        [HttpGet("{AlunoId}")]
        public IActionResult Get(int professorId)
        {
            return Ok();
        }

        [HttpPost]
        public IActionResult Post()
        {
            return Ok();
        }

        [HttpPut("{ProfessorId}")]
        public IActionResult Put(int professorId)
        {
            return Ok();
        }

        [HttpDelete("{ProfessorId}")]
        public IActionResult Delete(int professorId)
        {
            return Ok();
        }

    }
}