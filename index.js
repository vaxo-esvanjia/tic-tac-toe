let box = document.querySelectorAll(".box");
    let x=0,o=0;
    gameBoard();
    
    function gameBoard() { // runs whole mechanism
        let cnt=0;
        for(let i=0;i<box.length;i++) {
            box[i].addEventListener("click",function () {
                    if(box[i].innerText!='X'&&box[i].innerText!='O'){
                    if(cnt%2===0) 
                        box[i].innerText="X";
                    else 
                        box[i].innerText="O";
                    cnt++;
                    console.log(cnt);
                    if(checker()) { // if checker returns true then someone has won
                        result(cnt); 
                        if(cnt%2==0) cnt=1;
                        else cnt=0;
                    }
                }
                if(pssblSquare()===false) {alert("Its a draw");reset();} 
            });
        }
    }
    function checker() { // checks ;D
        if(box[0].textContent!==''&&box[0].textContent===box[1].textContent&&box[0].textContent===box[2].textContent) return true;
        if(box[3].textContent!==''&&box[3].textContent===box[4].textContent&&box[3].textContent===box[5].textContent) return true;
        if(box[6].textContent!==''&&box[6].textContent===box[7].textContent&&box[6].textContent===box[8].textContent) return true;
        if(box[0].textContent!==''&&box[0].textContent===box[3].textContent&&box[0].textContent===box[6].textContent) return true;
        if(box[1].textContent!==''&&box[1].textContent===box[4].textContent&&box[1].textContent===box[7].textContent) return true;
        if(box[2].textContent!==''&&box[2].textContent===box[5].textContent&&box[2].textContent===box[8].textContent) return true;
        if(box[0].textContent!==''&&box[0].textContent===box[4].textContent&&box[0].textContent===box[8].textContent) return true;
        if(box[2].textContent!==''&&box[2].textContent===box[4].textContent&&box[2].textContent===box[6].textContent) return true;
        return false;
    } 
    function result(cnt) {
        if(cnt%2==0) {
            // "O" winner
            let resultsO = document.querySelector("#resultsOfO");
            o++;
            resultsO.innerText=o;
            document.getElementById("resultsOfXDiv").style.color="black";
            document.getElementById("resultsOfODiv").style.color="darkgreen";
            alert("Winner Is: O");
            reset();
        }else {
            // "X" winner
            let resultsX = document.querySelector("#resultsOfX");
            x++;
            resultsX.innerText=x;
            document.getElementById("resultsOfODiv").style.color="black";
            document.getElementById("resultsOfXDiv").style.color="darkgreen";
            alert("Winner is: X");
            reset();
        }
    }
    function pssblSquare() { 
        // if there is not any possible square to write x/o then it's a draw;
        for(let i=0;i<box.length;i++) 
            if(box[i].textContent==="") return true;
        return false;
    }
    function reset() {
        // To reset just gameboard ( not score );
        for(let i=0;i<box.length;i++) 
        box[i].textContent='';
    }
    function restart() {
        // to restart whole game even turns,score or colors.
        document.getElementById("resultsOfODiv").style.color="black";
        document.getElementById("resultsOfXDiv").style.color="black";
        document.querySelector("#resultsOfX").textContent=0;
        document.querySelector("#resultsOfO").textContent=0;
        x=0;o=0;
        reset();
    }