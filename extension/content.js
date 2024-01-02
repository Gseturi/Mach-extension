

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    const imgElement = document.createElement('img');

    imgElement.width=window.innerWidth;
    imgElement.height=window.innerHeight;
    imgElement.onresize= function(){

        imgElement.width=window.innerWidth;
    imgElement.height=window.innerHeight;
        
    }
    imgElement.src = chrome.runtime.getURL('scare.PNG');
    const sound = new Audio(chrome.runtime.getURL('fuzzy-jumpscare-80560.mp3'));


  
    
    
    
    let dec = true;
    const countdownTime = getRandomNumber(0, 1000000);
    const timeonscreen = 700;
    
    document.addEventListener('click', function () {
        if (dec) {
            dec = false; 
            setTimeout(function () {
                if (document.hasFocus()) {
                    const temp = document.body.innerHTML;
                    document.body.innerHTML = '';
                    document.body.appendChild(imgElement);
                    sound.play(); 
                    setTimeout(function () {
                        document.body.innerHTML = temp;
                        sound.pause();
                        
                    }, timeonscreen);
                }
            dec=true;}, countdownTime);
        }
    });