var userInput = document.querySelector("#input");
var translateBtn = document.querySelector("#btn");
var result = document.querySelector(".output");


function clickHandler (){
    var textAreaInput = userInput.value;

    if(textAreaInput == ""){
        alert("Please Enter Something..");
    }
    var URL = "https://api.funtranslations.com/translate/pig-latin.json"+"?"+"text="+textAreaInput;
    
    fetch(URL)
    .then(response => response.json())
    .then(res => 
        result.innerText = res.contents.translated
    )
    .catch(err => console.log("OOps Something Went Wrong"+err));
    
}

translateBtn.addEventListener('click' , clickHandler)