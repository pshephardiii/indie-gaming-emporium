require('dotenv').config();
require('./database');

const Genre = require('../models/genre');
const GameDescription = require('../models/gameDescription')
const Game = require('../models/game');

(async function() {

  await Genre.deleteMany({});
  const genres = await Genre.create([
    {name: 'adventure', sortOrder: 10},
    {name: 'action', sortOrder: 20},
    {name: 'rpg', sortOrder: 30},
    {name: 'horror', sortOrder: 40},
    {name: 'casual', sortOrder: 50}
  ]);

  await GameDescription.deleteMany({});
  const gameDescriptions = await GameDescription.create([
    {opening: 'Embark on an extraordinary co-op adventure in Forgotten Worlds, a thrilling tomb exploration game designed for up to four players. Delve into the enigmatic depths of ancient tombs, where untold treasures, mysterious puzzles, and perilous traps await. Team up with friends to uncover the secrets of long-forgotten civilizations, but beware the past holds both wonder and danger in this cooperative journey into the heart of exploration.',
    synopsis: 'Forgotten Worlds beckons you and your companions to unravel the mysteries concealed within ancient tombs, where the echoes of forgotten civilizations resonate through the hallowed halls. Form a team of up to four players, each with unique skills and abilities, and embark on a cooperative quest to unlock the secrets hidden beneath layers of history. The tombs are fraught with challenges, but with teamwork and cunning, the treasures of the Forgotten Worlds can be unearthed.',
    features: `Cooperative Tomb Exploration: Join forces with up to three friends, either locally or online, to embark on an unforgettable cooperative journey. Teamwork is essential as you navigate complex puzzles, overcome traps, and face the challenges that lie within each forgotten tomb.
    Unique Character Roles: Choose from a diverse roster of explorers, each with their own specialized skills. Whether you're a nimble acrobat adept at traversing treacherous terrain, a historian with a knack for deciphering ancient scripts, or a skilled combatant ready to face supernatural threats, every character brings a unique contribution to the team.
    Dynamic Puzzles and Traps: Encounter a variety of puzzles and traps that demand collaboration and strategic thinking. Solve riddles, activate ancient mechanisms, and overcome ingenious traps designed to protect the tombs' most guarded secrets. The journey into Forgotten Worlds is as much about wit as it is about skill.
    Procedurally Generated Tombs: Explore an ever-changing landscape of tombs with procedurally generated layouts. No two expeditions are alike, ensuring a fresh and unpredictable experience with every playthrough. Adapt your strategies as the tombs reveal new challenges and mysteries.
    Supernatural Adversaries: Uncover the supernatural forces that guard the forgotten treasures. Face off against spectral guardians, animated guardians, and otherworldly creatures that test your combat skills and demand cooperation to overcome.
    Resource Management: Carefully manage your resources, from torches and grappling hooks to ancient artifacts, as you navigate the tombs. Cooperation is key in ensuring that your team has the tools necessary to brave the unknown and emerge victorious.
    Captivating Environments: Immerse yourself in visually stunning tomb environments, from sprawling underground caverns to ancient temples bathed in ethereal light. The detailed landscapes enhance the atmosphere, making each tomb a living, breathing puzzle waiting to be unraveled.
    `,
    closing: `Forgotten Worlds invites you and your fellow explorers to embark on a cooperative journey through time and mystery. Will your team unveil the secrets hidden within the forgotten tombs, or will you become one with the mysteries that lie beneath? Gather your allies, gear up, and prepare to venture into the heart of exploration in Forgotten Worlds.`
    }
  ])

  await Game.deleteMany({});
  const games = await Game.create([
    {name: 'Forgotten Worlds', image: '', description: gameDescriptions[0], genre: genres[0], price: 19.99},
    {name: `Roscoe's Journey`, image: '', description: null, genre: genres[0], price: 9.99},
    {name: 'Summit', image: '', description: null, genre: genres[0], price: 19.99},
    {name: 'Katana Sunset', image: '', description: null, genre: genres[1], price: 34.99},
    {name: 'Ex Nihilo: Phantom Glitch', image: '', description: null, genre: genres[1], price: 29.99},
    {name: 'Rusted Gauge', image: '', description: null, genre: genres[1], price: 24.99},
    {name: 'Homeward', image: '', description: null, genre: genres[2], price: 19.99},
    {name: 'Oblivion Rainbow', image: '', description: null, genre: genres[2], price: 29.99},
    {name: 'Sacrilege', image: '', description: null, genre: genres[2], price: 39.99},
    {name: `Devil's Playground`, image: '', description: null, genre: genres[3], price: 29.99},
    {name: 'Quiet Plateau: Sins of the Father', image: '', description: null, genre: genres[3], price: 19.99},
    {name: 'Traumatica', image: '', description: null, genre: genres[3], price: 14.99},
    {name: 'Ball Boy Mania!', image: '', description: null, genre: genres[4], price: 4.99},
    {name: 'Tax Audit Simulator', image: '', description: null, genre: genres[4], price: 14.99},
    {name: 'Bubble Buddy', image: '', description: null, genre: genres[4], price: 9.99},

  ]);

  console.log(games)

  process.exit();

})();

