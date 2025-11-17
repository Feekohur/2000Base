using _2000BaseNET.Data;
using _2000BaseNET.Models;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace _2000BaseNET.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GameController : ControllerBase
    {
        private readonly ChessbaseDbContext _context;

        public GameController(ChessbaseDbContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<List<Game>>> getGames()
        {
            List<Game> games = await _context.Games.ToListAsync();
            return Ok(games);
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Game>> getGame(int id)
        {
            Game? game = await _context.Games.FindAsync(id);
            if (game == null)
            {
                return NotFound();
            }
            return Ok(game);
        }
    }
}
