




// local storage information
function getUserInputFromLocalStorage(textAreaID) {
    var userInput = localStorage.getItem(textAreaID)
    if (userInput){
        document.getElementById(textAreaID).value = userInput    
    }
    else {
        document.getElementById(textAreaID).value = ""
    }
}

// save button for each city entry
function btn(textAreaID){
    var userInput = document.getElementById(textAreaID).value;
    localStorage.setItem(textAreaID, userInput);
}

document.getElementById('search').addEventListener("click", function ())

getUserInputFromLocalStorage("search")