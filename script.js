const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}
/*
const books = getBooks();
books;

const book = getBook(2);

// const title = book.title
// const author = book.author
// title;
// author;
// destructing object
const { title, author, genres, pages, publicationDate, hasMovieAdaptation } =
  book;
console.log(title, author, genres, pages, publicationDate, hasMovieAdaptation);

// const primaryGenre = genres[0];
// const secondrayGenre = genres[1]; //instead of using array like this

// rest and spread operators
const [primaryGenre, secondrayGenre, ...otherGenres] = genres; //we can use rest operator
console.log(primaryGenre, secondrayGenre, otherGenres);

const newGenres = [genres, "epic World"]; //if we write like this
console.log(newGenres); // it will print like this

const anotherGenres = [...genres, "Wild Life"]; //if we use spread operator
console.log(anotherGenres); //it will print like this

const updatedbook = {
  ...book,
  // adding a new property
  moviePublicationDate: "2001-12-19",
  //overriding an existing property
  pages: "1210",
};
updatedbook;
// console.log(updatedbook);

// template literals
const bookTitle = `A book named ${title} having ${pages} pages was written by famous author ${author} which was published on ${
  publicationDate.split("-")[0]
}. The movies has${
  hasMovieAdaptation === true ? " " : " not"
} been adopted as movie `;
bookTitle;

// Ternary if else condition
const pagesRanges =
  pages > 1000 ? "more then one thousand" : "  less then one thousand";
pagesRanges;
console.log(`The book has ${pagesRanges} pages.`);

// Tradition way to write funtion
// function getYear(str) {
//   return str.split("-")[0];
// }

// Arrow Function
const getYear = (str) => str.split("-")[0];

console.log(getYear(publicationDate));

// Short-Circuiting And Logical Operators: &&, ||, ??
console.log(true && "Hello");
console.log(false && "Hello");

console.log(hasMovieAdaptation && "This book has a movie");

// fasle 0, null, '' and undefined
console.log("hello " && "Sabita");
console.log(0 && "hello");
console.log("" && "hello");
console.log(null && "hello");
console.log(undefined && "hello");

console.log(true || "Hello");
console.log(false || "Hello");

console.log(book.translations.spanish);

const reviewsCount = book.reviews.librarything.reviewsCount || "NO data";
reviewsCount;

const reviewCount = book.reviews.librarything.reviewsCount ?? "NO data";
reviewCount;

// Optional Chaining

 getTotalReviewsCount = (book) => {
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
};
console.log(getTotalReviewsCount(book));
*/

/*
// Array Map Method
const books = getBooks();
books;

const x = [1, 2, 3, 4, 5].map((e) => e);
console.log(x);

const getBookTitle = books.map((book) => book.title);
getBookTitle;

getTotalReviewsCount = (book) => {
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
};

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewsCount(book),
}));
essentialData;

// Array Filter Method
const longBookWithmovie = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBookWithmovie;

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
adventureBooks;

//Array Reduce Method
const allPages = books.reduce((acc, book) => acc + book.pages, 0);
allPages;

//sort array method
const arr = [1, 9, 0, 7, 2, 3, 4, 5];
const sortedAsc = arr.slice().sort((a, b) => a - b); //<--it will short the array in ascending order
sortedAsc;
const sortedDes = arr.slice().sort((a, b) => b - a); //<--it will short the array in descending order
sortedDes;
arr;

const sortBooksbypages = books.slice().sort((a, b) => a.pages - b.pages);
sortBooksbypages;

// Working With immutable arrays

// 1) Add book object to array
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J.K Rowling",
};

const booksAfterAdded = [...books,newBook]
booksAfterAdded;

// 2) Delete book object from array
const booksAfterDelete = booksAfterAdded.filter((book)=> book.id !== 6)
booksAfterDelete;

// 2) Update book object in the array
booksAfterUpdate = booksAfterDelete.map((book)=> book.id === 1? {...book,pages:1210} : book)
booksAfterUpdate;
*/

//Asynchronous JavaScript: Promises

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => console.log(data));


//async and await
const getTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
};
getTodos();
console.log("sabu");