function generateHTML(i){
  return`
    <div class="book">
              <h2>${books[i].name}</h2>
              <div class="image-container">
                     <img src="${books[i].image}">
                     <p id="price">€${books[i].price}</p> 
              </div>
              <div class="publicationDetails"> 
                   <table id="details">
                     <tr>
                        <td><p id="author"><strong>Autor</strong>:   </p></td>
                        <td><p id="authorname">${books[i].author}</p></td>
                      </tr>
                   </table>
                   <table>      
                       <tr>
                         <td><p>Published:</p></td>
                         <td><p id="year">${books[i].published}</p></td>
                       </tr>
                    </table>
                </div>
                <div class="likes">
                    <p id="amounLike">${books[i].likes}</p>
                    <img onclick="changeLike(${i})" id="like" src="${ifLiked(i)}" alt="heart">
                </div> 
                <hr>
                <div class="comments">
                     <div id="landcontent${i}"></div>
                 </div>   

                <div class="inputComments">
              <input id="input${i}" type="text"  placeholder="Drop a comment ...">
                 <img onclick="addComment(${i})" id="sendIcon" src="img/send-4008.svg" alt="send">
                 </div>
                 
    </div>


  `
}
function updateComments(comment){
  return` 
    
   
      <div class="commentContent"><b>Chuks:</b>${comment}</div><br>
      
                  
                    
          
      
  
  
  `;
}




























/*function generateHTML(i) {
    return `
        <div class ="book">
                <h2>${books[i].name}</h2>
                <div class="image-container">
                
                     <img src="${books[i].image}">
                     <p id="price">€${books[i].price}</p> 
                </div>

                <div class="publicationDetails"> 
                   <table id="details">
                     <tr>
                        <td><p id="author"><strong>Autor</strong>:   </p></td>
                        <td><p id="authorname">${books[i].author}</p></td>
                      </tr>
                   </table>
                
                    <table>      
                       <tr>
                         <td><p>Published:</p></td>
                         <td><p id="year">${books[i].published}</p></td>
                       </tr>
                    </table>
                </div>    
                
                <div class="likes">
                  <p id="amounLike">${books[i].likes}</p>
                  <img onclick="changeLike(${i})" id="like" src="${ifLiked(i)}" alt="heart">
                
                </div>
                     <hr>
                
                       
               
        </div>
                
        
    
        
        
        
                
            
                
                     
                   

                
             
            
            
                
        

               
            
    `;
}*/



