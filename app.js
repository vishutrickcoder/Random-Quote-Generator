const btnEl = document.getElementById("btn");
const apiUrl = "https://api.quotable.io/random";
const quoteEl = document.getElementById("quote");
const autherEl = document.getElementById("author");
async function getQuote(){
    
    try {

        btnEl.innerText="Loading....";
        btnEl.disabled = true;
        quoteEl.innerText = "Updating ....";
        autherEl.innerText = "Updating ....";

        const response =await fetch(apiUrl);
        const data = await response.json();
        const quoteContent = data.content;
        const quoteAuthor = data.author;


        

        quoteEl.innerText = quoteContent;
        autherEl.innerText ="~" + quoteAuthor;

        btnEl.innerText="Get A Code";
        btnEl.disabled = false;
        
        // console.log(data);
    } catch (error) {
        console.log(error)
        quoteEl.innerText = "An Error Occur ,Try Again later"
        autherEl.innerText = "An Erroer happen"

        btnEl.innerText="Loading....";
        btnEl.disabled = false;
    }
    
    
    

}

getQuote()

btnEl.addEventListener("click",  getQuote)