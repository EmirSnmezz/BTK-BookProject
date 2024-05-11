import { BookModel } from "./book-model.interface";
import { Categories } from "./categories.const";

export const BookData: BookModel[] = [
    {
        "name": "Dune",
        "author": "Frank Herbert",
        "year": "1965",
        "star": "2.20",
        "imageUrl": "https://example.com/dune.jpg",
        "category": "Science Fiction",
        "description": "A complex tale set in the distant future."
    },
    {
        "name": "1984",
        "author": "George Orwell",
        "year": "1949",
        "star": "4.16",
        "imageUrl": "https://example.com/1984.jpg",
        "category": "Science Fiction",
        "description": "A dystopian novel set in a totalitarian state."
    },
    {
        "name": "Foundation",
        "author": "Isaac Asimov",
        "year": "1951",
        "star": "4.20",
        "imageUrl": "https://example.com/foundation.jpg",
        "category": "Science Fiction",
        "description": "The beginning of a vast galactic empire."
    },
    {
        "name": "The Hitchhiker's Guide to the Galaxy",
        "author": "Douglas Adams",
        "year": "1979",
        "star": "4.21",
        "imageUrl": "https://example.com/hitchhikers.jpg",
        "category": "Science Fiction",
        "description": "An eccentric adventure across space."
    },
    {
        "name": "Neuromancer",
        "author": "William Gibson",
        "year": "1984",
        "star": "3.89",
        "imageUrl": "https://example.com/neuromancer.jpg",
        "category": "Science Fiction",
        "description": "A pioneering cyberpunk novel."
    },
    {
        "name": "Ender's Game",
        "author": "Orson Scott Card",
        "year": "1985",
        "star": "4.30",
        "imageUrl": "https://example.com/endersgame.jpg",
        "category": "Science Fiction",
        "description": "A military science fiction novel."
    },
    {
        "name": "Brave New World",
        "author": "Aldous Huxley",
        "year": "1932",
        "star": "3.99",
        "imageUrl": "https://example.com/bravenewworld.jpg",
        "category": "Science Fiction",
        "description": "A dystopian novel exploring a future society."
    },
    {
        "name": "The War of the Worlds",
        "author": "H.G. Wells",
        "year": "1898",
        "star": "3.81",
        "imageUrl": "https://example.com/waroftheworlds.jpg",
        "category": "Science Fiction",
        "description": "An early science fiction novel depicting an alien invasion."
    },
    {
        "name": "Snow Crash",
        "author": "Neal Stephenson",
        "year": "1992",
        "star": "4.03",
        "imageUrl": "https://example.com/snowcrash.jpg",
        "category": "Science Fiction",
        "description": "A post-cyberpunk novel set in a near-future Los Angeles."
    },
    {
        "name": "The Left Hand of Darkness",
        "author": "Ursula K. Le Guin",
        "year": "1969",
        "star": "4.07",
        "imageUrl": "https://example.com/lefthandofdarkness.jpg",
        "category": "Science Fiction",
        "description": "A science fiction novel exploring themes of gender and sexuality."
    },
    {
        "name": "Hyperion",
        "author": "Dan Simmons",
        "year": "1989",
        "star": "4.22",
        "imageUrl": "https://example.com/hyperion.jpg",
        "category": Categories.Science,
        "description": "A space opera set in the far future."
    },
    {
        "name": "Fahrenheit 451",
        "author": "Ray Bradbury",
        "year": "1953",
        "star": "3.99",
        "imageUrl": "https://example.com/fahrenheit451.jpg",
        "category": Categories.Science,
        "description": "A dystopian novel set in a future where books are banned."
    },
    {
        "name": "I, Robot",
        "author": "Isaac Asimov",
        "year": "1950",
        "star": "4.19",
        "imageUrl": "https://example.com/irobot.jpg",
        "category": Categories.Science,
        "description": "A collection of interconnected short stories exploring robotics."
    },
    {
        "name": "The Martian",
        "author": "Andy Weir",
        "year": "2011",
        "star": "4.40",
        "imageUrl": "https://example.com/martian.jpg",
        "category": Categories.Adventure,
        "description": "A survival story set on Mars."
    },
    {
        "name": "Starship Troopers",
        "author": "Robert A. Heinlein",
        "year": "1959",
        "star": "4.00",
        "imageUrl": "https://example.com/starshiptroopers.jpg",
        "category": Categories.Adventure,
        "description": "A military science fiction novel."
    },
    {
        "name": "The Time Machine",
        "author": "H.G. Wells",
        "year": "1895",
        "star": "3.88",
        "imageUrl": "https://example.com/timemachine.jpg",
        "category": Categories.Adventure,
        "description": "A science fiction novella exploring time travel."
    },
    {
        "name": "Do Androids Dream of Electric Sheep?",
        "author": "Philip K. Dick",
        "year": "1968",
        "star": "4.08",
        "imageUrl": "https://example.com/doandroids.jpg",
        "category": Categories.Drama,
        "description": "The basis for the film Blade Runner."
    },
    {
        "name": "The Hunger Games",
        "author": "Suzanne Collins",
        "year": "2008",
        "star": "4.33",
        "imageUrl": "https://example.com/hungergames.jpg",
        "category": Categories.Drama,
        "description": "A dystopian novel set in a post-apocalyptic nation."
    },
    {
        "name": "The Forever War",
        "author": "Joe Haldeman",
        "year": "1974",
        "star": "4.15",
        "imageUrl": "https://example.com/foreverwar.jpg",
        "category": Categories.Drama,
        "description": "A military science fiction novel."
    },
    {
        "name": "Childhood's End",
        "author": "Arthur C. Clarke",
        "year": "1953",
        "star": "2.10",
        "imageUrl": "https://example.com/childhoodsend.jpg",
        "category": Categories.Drama,
        "description": "A science fiction novel depicting the evolution of humanity."
    }
]
