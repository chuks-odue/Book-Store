function init() {
  getFromLocalStorage();
  renderBooks();
}

function renderBooks(){
    let content = document.getElementById('content');
    content.innerHTML = '';

    for (let i = 0; i < books.length; i++) {
        const land = books[i];
        content.innerHTML += generateHTML(i);
            
        

        let landcontent = document.getElementById(`landcontent${i}`);
        
        for (let j = 0; j < land['comments'].length; j++) {
            const comment = land['comments'][j];
            landcontent.innerHTML += updateComments( comment);
        }
    
    }
}

function ifLiked(index) {
    if (books[index].liked == true) {
      return `img/liked (2).png`;
    } else {
      return `img/liked (1).png
      `;
    }
  }
  
  function changeLike(indexBook) {
    if (books[indexBook].liked == true) {
      books[indexBook].liked = false;
      books[indexBook].likes++;
      renderBooks();
      saveToLocalStorage();
    } else {
      books[indexBook].liked = true;
      books[indexBook].likes--;
      saveToLocalStorage();
      renderBooks();
    }
  }


function addComment(index) {
    let input = document.getElementById(`input${index}`);
    if (input.value==""){
      alert('Type in a comment')
    }
    else{
    books[index]['comments'].push(input.value);}
    renderBooks();
    input.value = '';
    saveToLocalStorage();
}

function saveToLocalStorage() {
  localStorage.setItem("books", JSON.stringify(books));
}

function getFromLocalStorage() {
  if (localStorage.getItem("books") !== null) {
      books = JSON.parse(localStorage.getItem("books"));
  } else {
      localStorage.setItem("books", JSON.stringify(books));
  }
}







































