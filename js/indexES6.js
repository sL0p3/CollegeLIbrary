console.log("ES6 version of College Library")

class Book{
    constructor(name, author, type){
        this.name= name ;
        this.author = author ;
        this.type = type ;
    }
}

class Display{
    add(book) {
        let tableBody=document.getElementById("tableBody");
        let uiString = `<tr>
          <td>${book.name}</td>
          <td>${book.author}</td>
          <td>${book.type}</td>
      </tr>`;
        tableBody.innerHTML += uiString;
      };

      clear() {
        let libraryForm = document.getElementById("libraryForm");
        libraryForm.reset();
      };

      validate(book) {
        if (book.name.length < 3 || book.author.length < 2) {
          return false;
        } else {
          return true;
        }
      };

      show(type,displayMessage){
          let boldText;
        if (type ==='success'){
            boldText = "Success";
        }else {
            boldText = "Error";
        }
        document.getElementById('message').innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
          <strong>${boldText} : </strong> ${displayMessage}
        </div>`;
        setTimeout(function() {
            document.getElementById('message').innerHTML = ``
        }, 2000);
      };     
}

// Add submit event listner to libraryForm.
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
  let name = document.getElementById("bookName").value;
  let author = document.getElementById("author").value;
  let fiction = document.getElementById("fiction");
  let programming = document.getElementById("programming");
  let cooking = document.getElementById("cooking");
  let type;
  if (fiction.checked) {
    type = fiction.value;
  } else if (programming.checked) {
    type = programming.value;
  } else if (cooking.checked) {
    type = cooking.value;
  }
  let book = new Book(name, author, type);
  console.log(book);

  let display = new Display();
  if (display.validate(book)) {
    display.add(book);
    display.clear();
    display.show('success',"Book added sucessfully");
  } else {
    display.show('danger',"Sorry you cannot add this book.")
  }

  e.preventDefault(); // no default reload
}
