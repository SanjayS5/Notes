// Notes based on The Net Ninja's DOM Tutorials

// To query the DOM, there are two main methods:

document.querySelector();

document.querySelectorAll(); 

// Ex. 1

const wmf = document.querySelector("#book-list li:nth-child(2) .name");

// console.log(wmf);

// This allows us to go into the element with the id #book-list, access the second child of the li with class name. 


// Ex. 2

const books = document.querySelectorAll("#book-list li .name");

console.log(books);

// Iterating over node list returned by querySelectorAll:

    books.forEach(function(book){
      console.log(book);
    })


// Converting the collection of elements (known as a "NODE LIST") returned by querySelectorAll() into an array: 
// OPTIONAL - Not required at all, UNLESS we use document.getElementsByClassName();
      
      x = Array.from(books);

      x.forEach(function(book){
        console.log(book);
      })

    // Can be done at one go:

      Array.from(books).forEach(funtion(book){
        console.log(book);
      })

      
// Logging the text content only:

      books.forEach(function(book){
        console.log(book.textContent);
      })

      // Replacing text content:

      books.forEach(function(book){
        book.textContent = ("This is a test");
      })

      // Appending text content (more useful), just use "+=" :

      books.forEach(function(book){
        book.textContent += ("This is a test");
      })


//Appending new HTML elements. To replace the original HTML, use '=' instead of '+='

const bookList = document.querySelector("#book-list");
bookList.innerHTML += '<h2>This is how you add HTML</h2>';


// Cloning a node:

      const banner = document.querySelector("#page-banner"); 

      const clonedBanner = banner.cloneNode(true);  // true is used to clone the entire node, nested nodes and all. 

      // "Node" is an interface that is implemented by multiple other objects, including "document" and "element". 
      // All objects implementing the "Node" interface can be treated similarly. 
      // The term "node" therefore (in the DOM context) means any object that implements the "Node" interface. 
      // Most commonly that is an element object representing a HTML element.



// To find parent node

      const bookList = document.querySelector("#book-list");

      console.log('the parent node is ', bookList.parentNode);

      // You can chain them together to find the parent of the parent
      // we just found above
      console.log('the parent node is ', bookList.parentNode.parentNode);

      // To find node children isn't useful (they include line breaks), so we use this instead:

      console.log(bookList.children);



// To find element sibling:

      const bookList = document.querySelector("#book-list");

      console.log('book-list next element sibling is: ', bookList.nextElementSibling);

      // To find previous element sibling:

      console.log('book-list previous element sibling is: ', bookList.previousElementSibling);

      // Example use case:

      bookList.previousElementSibling.querySelector('p').innerHTML += '<br>Too cool for everyone else!</br>'
      // You can chain the properties and methods together


// EVENT LISTENERS

      const h2 = document.querySelector('#book-list h2');

      h2.addEventListener('click', function(e){
        console.log(e.target);
        console.log(e);
      });

      // Example use case: Deleting a list object using the removeChild() method

      const btns = document.querySelectorAll('#book-list .delete');

      btns.forEach(function(btn){
        btn.addEventListener('click', function(e){

          const li = e.target.parentElement;
          li.parentNode.removeChild(li);

        })
      })


// PREVENTING DEFAULT BEHAVIOUR 
// In this example, preventing the default behaviour of a link

      const link = document.querySelector('#page-banner a');

      link.addEventListener('click', function(e){
        e.preventDefault();
        console.log('Navigation to ', e.target.textContent, ' was prevented');
      });

// Lesson #10:
// Attaching event listeners to the ul instead of each li for efficiency
    
        // Adding an event listener to each li is "expensive" and inefficient

        const list = document.querySelector('#book-list ul');

        // delete books

        list.addEventListener('click', function(e){
          if (e.target.className == 'delete'){
            const li = e.target.parentElement;
            list.removeChild(li);

            // li.parentNode.removeChild(li); NOTE: This line of code does the exact same thing as list.removeChild(li);
          }
        })

// Lesson #11

        // Query the DOM for form elements:

        document.forms // Returns a HTML collection

        document.forms[0] // Accesses the first form element 

        document.forms['add-book'] // Access the form with id #add-book

        
        // Add book list

            const addForm = document.forms['add-book'];

            // Forms have a 'submit' event that we can listen for. They also refresh the page by default
            // That explains e.preventDefault(); below

            addForm.addEventListener('submit', function(e){
              e.preventDefault();
              const value = addForm.querySelector('input[type="text"]').value;
              console.log(value);
            });

