var API_URL = "https://autosuggest-backend.onrender.com/api/autosuggest";

var searchBar = document.getElementById("search-bar");
var searchSuggestions = document.getElementById("search-suggestions");


searchBar.addEventListener("input",function(){
//get user typed data
//use user typed data in the query in the API call
//API call
//Append to al the search suggestions to div tag in UI
var query = searchBar.value.trim();
console.log(query);
fetchSuggestions(query);


})

function fetchSuggestions(query){
    var fullAPI = API_URL + "?q=" + query + "&weighted=true&algorithm=trie&limit=8";
    fetch(fullAPI)
         .then(function(res){
            return res.json();

         })
         .then(function(data){
           // console.log(data);
        showSuggestions(data);
         })
         .catch(function(err){
            console.log("Error"+err);
         })
}

function showSuggestions(data){
   var values = data.results;
   if(data.count===0){
    searchSuggestions.innerHTML="<div> No matching results found</div>";
   }else{
    var htmlString="";
    for(var i=0;i<values.length;i++){
        htmlString+="<div>"+values[i].text+ "</div>";


    }
    searchSuggestions.innerHTML=htmlString;
   }
}