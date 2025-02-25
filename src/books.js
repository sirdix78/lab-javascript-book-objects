//Iteration 1 | Books Array

// Your code here:
const booksArray = [
{
// Book 1
title: "The Old Man and the Sea",
pages: 128,
author: "Ernest Hemingway",
details: {
   language: "English",
   description:" One of Hemingway's most famous works, it tells the story of Santiago..."
  }
},
{
// Book 2
title: "The Airbnb Story",
pages: 256,
author: "Leight Gallagher",
details: {
   language: "English",
   description: "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb..."
  }
},
{ 
// Book 3
title: "Educated - A Memoir",
pages: 352,
author: "Tara Westover",
details: {
   language: "English",
   description: "Educated is an account of the struggle for self-invention..."
  }
},
{
// Book 4
title: "The Art of Learning",
pages: 288,
author: "Josh Waitzkin",
details: {
   language: "English",
   description: "The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure."
  }
}
];

// Iteration 2 | Book Details
function getBookDetails(book) {
  return `${book.title} - ${book.author} - ${book.pages} pages`;
}

// Iteration 3 | Delete Language
booksArray.forEach(book => {
  if (book.details && book.details.language) {
     delete book.details.language;
  }
});

// Iteration 4 | Estimated Reading Time
booksArray.forEach(book => {
  book.readingTime = Math.ceil((book.pages * 500) / 90);
});


// Bonus: Iteration 5 | Books Dictionary

/* The `dictionary` is an object containing books grouped by author. 
 The book info is stored in arrays with structure: [title, pages]. 
*/
const dictionary = {
    "J. K. Rowling": [
        ["Harry Potter and the Philosopher's Stone", 223],
        ["Harry Potter and the Chamber of Secrets", 251],
        ["Harry Potter and the Prisoner of Azkaban", 317],
        ["Harry Potter and the Goblet of Fire", 636],
    ],
    "Neal Stephenson": [
        ["Cryptonomicon", 928],
        ["Anathem", 1008],
        ["Fall; or, Dodge in Hell", 896],
    ],
    "Malcolm Gladwell": [
        ["Outliers", 320],
        ["Blink", 287],
    ],
};

function booksByAuthor(dict) {
  const newBooksArray = [];
  for (let author in dict) {
    // console.log("dictionary", dict);
    // console.log("author", author);
    // console.log("books of the author", dict[author]);
    dict[author].forEach((row) => {
      const newBookObject = {};
      newBookObject.author = author;

      const bookName = row[0];
      const bookPages = row[1];

      newBookObject.title = bookName;
      newBookObject.pages = bookPages;
      newBooksArray.push(newBookObject);
    });
  }
  return newBooksArray;
}
// another way
function booksByAuthor(dictionary){
  // Your code here:
  let result = []

  for (author in dictionary) {
    const authorBooks = dictionary[author];

    authorBooks.forEach((item) => {
      const title = item[0];
      const pages = item[1];

      const newBook = {
        title: title,
        pages: pages,
        author: author
      };

      result.push(newBook);
    })
  };

  return result;
}

// Bonus: Iteration 6 | Average Page Count
function averagePageCount(aBookArray) {
  let totalPages = 0;
  aBookArray.forEach(oneBook => {
     totalPages += oneBook.pages;
  })
  const averagePageCount = totalPages / aBookArray.length;
  return averagePageCount;
}
