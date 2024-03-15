import {addQuoteCardToContainer} from './function.js'
const apiLink = 'https://fakestoreapi.com/products' ;
 
// fetch api data from link
fetch(apiLink)
.then(response=>{
    return response.json();
})
.then(response=>{
    let apiData = response;
        let dataLength = apiData.length;
        for (let i=0;i<dataLength;i++){
            addQuoteCardToContainer(apiData[i].title,apiData[i].image,apiData[i].price,apiData[i].description,apiData[i].category,apiData[i].rating.rate,apiData[i].rating.count)
        }
})
 
 
 
// reset page back to default values.
let reset = document.getElementById("reset");
reset.onclick = ()=>{
    location.reload();
    resetFilterByButton();
    resetSortByButton();
}
// reloading page
window.onload = (event) => {
    resetFilterByButton();
    resetSortByButton();
  };
 
 
// filter functionality
let filterBy = document.getElementById("filterBy");
filterBy.onchange = () =>{
    // filter for men's clothing
    if(filterBy.value == "men"){
        let apiDiv = document.getElementById("content");
        while (apiDiv.firstChild) {
           apiDiv.removeChild(apiDiv.firstChild);
        }
       
        let content =  document.createElement("div");
        content.setAttribute("id","content");
        document.body.appendChild(content)
   
        fetch(apiLink)
        .then(response=>{
            return response.json();
        })
        .then(response=>{
            let apiData = response;
                let dataLength = apiData.length;
             
   
                for (let i=0;i<dataLength;i++){
                    apiData.sort((a,b)=> a.title.localeCompare(b.title) );
                    if (apiData[i].category == "men's clothing"){
                    addQuoteCardToContainer(apiData[i].title,apiData[i].image,apiData[i].price,apiData[i].description,apiData[i].category,apiData[i].rating.rate,apiData[i].rating.count)
                    }
                }
        })
    }
 
    // filter for jewelry
    if(filterBy.value == "jewelry"){
        let apiDiv = document.getElementById("content");
        while (apiDiv.firstChild) {
           apiDiv.removeChild(apiDiv.firstChild);
        }
       
        let content =  document.createElement("div");
        content.setAttribute("id","content");
        document.body.appendChild(content)
   
        fetch(apiLink)
        .then(response=>{
            return response.json();
        })
        .then(response=>{
            let apiData = response;
                let dataLength = apiData.length;
             
   
                for (let i=0;i<dataLength;i++){
                    apiData.sort((a,b)=> a.title.localeCompare(b.title) );
                    if(apiData[i].category == "jewelery"){
                        addQuoteCardToContainer(apiData[i].title,apiData[i].image,apiData[i].price,apiData[i].description,apiData[i].category,apiData[i].rating.rate,apiData[i].rating.count)
                    }
                }
        })
    }
 
    // filter for electronics
    if(filterBy.value == "electronics"){
        let apiDiv = document.getElementById("content");
        while (apiDiv.firstChild) {
           apiDiv.removeChild(apiDiv.firstChild);
        }
       
        let content =  document.createElement("div");
        content.setAttribute("id","content");
        document.body.appendChild(content)
   
        fetch(apiLink)
        .then(response=>{
            return response.json();
        })
        .then(response=>{
            let apiData = response;
                let dataLength = apiData.length;
             
   
                for (let i=0;i<dataLength;i++){
                    apiData.sort((a,b)=> a.title.localeCompare(b.title) );
                    if(apiData[i].category == "electronics"){
                        addQuoteCardToContainer(apiData[i].title,apiData[i].image,apiData[i].price,apiData[i].description,apiData[i].category,apiData[i].rating.rate,apiData[i].rating.count)
                    }
                }
        })
    }
 
    // filter for women's clothing
    if(filterBy.value == "women"){
        let apiDiv = document.getElementById("content");
        while (apiDiv.firstChild) {
           apiDiv.removeChild(apiDiv.firstChild);
        }
       
        let content =  document.createElement("div");
        content.setAttribute("id","content");
        document.body.appendChild(content)
   
        fetch(apiLink)
        .then(response=>{
            return response.json();
        })
        .then(response=>{
            let apiData = response;
                let dataLength = apiData.length;
             
   
                for (let i=0;i<dataLength;i++){
                    apiData.sort((a,b)=> a.title.localeCompare(b.title) );
                    if(apiData[i].category == "women's clothing"){
                        addQuoteCardToContainer(apiData[i].title,apiData[i].image,apiData[i].price,apiData[i].description,apiData[i].category,apiData[i].rating.rate,apiData[i].rating.count)
                    }
                }
        })
    }
}
 
// reset select boxes
function resetFilterByButton() {
    var filterBy = document.getElementById("filterBy");
    for (var i = 0; i < filterBy.options.length; i++) {
      var option = filterBy.options[i];
 
      if (option.value == "filterBy") {
        option.selected = true;
        return;
      }
    }
  }
function resetSortByButton(){
   
    var sortBy = document.getElementById("sortBy");
    for (var j = 0; j < sortBy.options.length; j++) {
      var opt = sortBy.options[j];
 
      if (opt.value == "sortBy") {
        opt.selected = true;
        return;
      }
    }
  }
 
// ascending order sorting
function ascendingOrder(){
    let apiDiv = document.getElementById("content");
    while (apiDiv.firstChild) {
       apiDiv.removeChild(apiDiv.firstChild);
    }
   
    let content =  document.createElement("div");
    content.setAttribute("id","content");
    document.body.appendChild(content)
 
    fetch(apiLink)
    .then(response=>{
        return response.json();
    })
    .then(response=>{
        let apiData = response;
            let dataLength = apiData.length;
         
 
            for (let i=0;i<dataLength;i++){
                apiData.sort((a,b)=> a.title.localeCompare(b.title) );
 
                addQuoteCardToContainer(apiData[i].id,apiData[i].title,apiData[i].image,apiData[i].price,apiData[i].description,apiData[i].category,apiData[i].rating.rate,apiData[i].rating.count)
            }
    })
}
 
// sort by functionality
let sortBy = document.getElementById("sortBy");
sortBy.onchange = () =>{
    // sort by price
if(sortBy.value == "byPrice"){
    let apiDiv = document.getElementById("content");
    while (apiDiv.firstChild) {
       apiDiv.removeChild(apiDiv.firstChild);
    }
    let content =  document.createElement("div");
    content.setAttribute("id","content");
    document.body.appendChild(content)
   
   fetch(apiLink)
   .then(response=>{
       return response.json()
   })
   .then(response=>{
       let apiData = response;
           let dataLength = apiData.length;
           for (let i=0;i<dataLength;i++){
               apiData.sort((a,b)=> a.price - b.price)
               addQuoteCardToContainer(apiData[i].title,apiData[i].image,apiData[i].price,apiData[i].description,apiData[i].category,apiData[i].rating.rate,apiData[i].rating.count)
           }
   })
}
 
// sort by ascending
if(sortBy.value == "ascending"){
    let apiDiv = document.getElementById("content");
    while (apiDiv.firstChild) {
       apiDiv.removeChild(apiDiv.firstChild);
    }
   
    let content =  document.createElement("div");
    content.setAttribute("id","content");
    document.body.appendChild(content)
 
    fetch(apiLink)
    .then(response=>{
        return response.json();
    })
    .then(response=>{
        let apiData = response;
            let dataLength = apiData.length;
         
 
            for (let i=0;i<dataLength;i++){
                apiData.sort((a,b)=> a.title.localeCompare(b.title) );
 
                addQuoteCardToContainer(apiData[i].title,apiData[i].image,apiData[i].price,apiData[i].description,apiData[i].category,apiData[i].rating.rate,apiData[i].rating.count)
            }
    })
}
 
// sort by descending
if(sortBy.value == "descending"){
    let apiDiv = document.getElementById("content");
    while (apiDiv.firstChild) {
       apiDiv.removeChild(apiDiv.firstChild);
    }
   
    let content =  document.createElement("div");
    content.setAttribute("id","content");
    document.body.appendChild(content)
 
    fetch(apiLink)
    .then(response=>{
        return response.json();
    })
    .then(response=>{
        let apiData = response;
            let dataLength = apiData.length;
         
 
            for (let i=0;i<dataLength;i++){
                apiData.sort((a,b)=> b.title.localeCompare(a.title) );
 
                addQuoteCardToContainer(apiData[i].title,apiData[i].image,apiData[i].price,apiData[i].description,apiData[i].category,apiData[i].rating.rate,apiData[i].rating.count)
            }
    })
}
}
