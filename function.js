function addQuoteCardToContainer(title,imageURL,price,description,category,rate,count){
    document.getElementById('content').innerHTML +=
        `<div id="apiDiv">
 
         <div id="image">
         <img src=${imageURL} width="200px">
         </div>
          <div id="details">
          <h2 class="title">${title}<h2>
          <p class="price" id="price">Price: $${price}</p>
          <p class="description" id="description">Description: <br>${description}</p>
          <p class="category" id="category">Category: ${category}</p>
          <p class="rating" id="rating">Rating: ${rate}</p>
          <p class="quantity" id="quantity">Quantity: ${count}</p>
          </div>
         
         </div>`
  }
  export {addQuoteCardToContainer}