function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function Runed() {
    var x=getRandomNumber(1, 10);
    console.log(getRandomNumber(1, 10));
    if(x%2==0){
            
        
    }
}

chrome.runtime.onInstalled.addListener(Runed); 