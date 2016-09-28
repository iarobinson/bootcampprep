// In this object there are three collections of books.
//
// Each collection contains 2 books
//
// Each book has an isbn, title, author, pages, rating, and bookMarks
//
// There are various tests below to help you learn the
//  syntax of how to pick specific data from the collection.

var bookCollections = [
  {
    name: "Fiction",
    books: [
      {
      "isbn" : 0441005489,
      "title" : "Redwall",
      "author" : "Brian Jacques",
      "pages" : 152,
      "rating" : 10,
      "bookMarks" : {
        '553': 'pg. 104',
        '2396': 'pg. 35',
        '2429': 'pg. 77',
        '3622': 'pg. 118',
        '7180': 'pg. 128',
        '7601': 'pg. 41'
      }
    },{
      "isbn" : 0545035171,
      "title" : "Night of the Living Dummy",
      "author" : "R.L. Stine",
      "pages" : 160,
      "rating" : 7,
      "bookMarks" : {
        '2129': 'pg. 26',
        '3113': 'pg. 43',
        '4355': 'pg. 95',
        '6589': 'pg. 135',
        '7734': 'pg. 28',
        '8572': 'pg. 136',
        '9064': 'pg. 130',
        '9267': 'pg. 5',
        '9540': 'pg. 67',
        '9865': 'pg. 91'
      }
    }
    ]
  },{
    name: "Biographies",
    books: [
      {
      "isbn" : 0143119966,
      "title" : "Washington: A Life",
      "author" : "Ron Chernow",
      "pages" : 928,
      "rating" : 9,
      "bookMarks" : {
        4094: 'pg. 488',
        6237: 'pg. 871',
        6631: 'pg. 224',
        9194: 'pg. 556',
        9501: 'pg. 642'
      }
    },{
      "isbn" : 0316548189,
      "title" : "Long Walk to Freedom",
      "author" : "Nelson Mandela",
      "pages" : 656,
      "rating" : 9,
      "bookMarks" : {
        2325: 'pg. 631',
        5384: 'pg. 146',
        7972: 'pg. 548'
      }
    }
    ]
  },{
    name: "Technical",
    books: [
      {
      "isbn" : 1593275846,
      "title" : "Eloquent JavaScript: A Modern Introduction to Programming",
      "author" : "Marijn Haverbeke",
      "pages" : 472,
      "rating" : 4,
      "bookMarks" : {
        0385: 'pg. 299',
        4959: 'pg. 185',
        7073: 'pg. 137',
        8005: 'pg. 39',
        8391: 'pg. 239'
      }
    },{
      "isbn" : 9781593764265,
      "title" : "Program or Be Programmed: Ten Commands for a Digital Age",
      "author" : "Douglas Rushkoff",
      "pages" : 152,
      "rating" : 8,
      "bookMarks" : {
        8863 : 'pg. 24',
        2250 : 'pg. 47',
        6541 : 'pg. 75',
        5679 : 'pg. 117'
      }
    }
    ]
  }
];

// console.log(bookCollections[1]);
