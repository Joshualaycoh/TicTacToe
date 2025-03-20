const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");

const winCondition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
let options = ["","","","","","","","",""];
let running = false;
let currentPlayer = "X";
initializeGame()

function initializeGame(){
  cells.forEach(cell => cell.addEventListener('click',cellClicked));
  restartBtn.addEventListener('click',restartGame)
  statusText.textContent = `${currentPlayer}'s turn!`;
  running = true;
}

function cellClicked(){
    const cellIndex = this.getAttribute("cellIndex");
    if(options[cellIndex] != "" || !running){
        return;
    }
    updateCell(this,cellIndex)
    checkWinner()
}

function updateCell(cell,index){
    options[index] = currentPlayer
    cell.textContent = currentPlayer
}

function changePlayer(){
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    statusText.textContent = `${currentPlayer}'s turn!`
}

function checkWinner(){
    let roundWon = false;
    for(let i = 0; i < winCondition.length; i++){
        const condition = winCondition[i];
        const cellA = options[condition[0]]  //fill the options array with the indeces from winCondition base on the current iteration
        const cellB = options[condition[1]]
        const cellC = options[condition[2]]
        //X|O|X
        //O|X|X
        //X|O|O
             //iteration 1
       //const cellA = options[condition[0]]  = X
       //const cellB = options[condition[1]]  = O    FALSE
       //const cellC = options[condition[2]]  = X
              //iteration 2
       //const cellA = options[condition[0]]  = 0
       //const cellB = options[condition[1]]  = X    FALSE
       //const cellC = options[condition[2]]  = X
              //iteration 3
       //const cellA = options[condition[0]]  = X
       //const cellB = options[condition[1]]  = O    FALSE
       //const cellC = options[condition[2]]  = O
              //iteration 4
       //const cellA = options[condition[0]]  = X
       //const cellB = options[condition[1]]  = O    FALSE
       //const cellC = options[condition[2]]  = X
              //iteration 5
       //const cellA = options[condition[0]]  = O
       //const cellB = options[condition[1]]  = X    FALSE
       //const cellC = options[condition[2]]  = O
              //iteration 6
       //const cellA = options[condition[0]]  = X
       //const cellB = options[condition[1]]  = X    FALSE
       //const cellC = options[condition[2]]  = O
              //iteration 7
       //const cellA = options[condition[0]]  = X
       //const cellB = options[condition[1]]  = X    FALSE
       //const cellC = options[condition[2]]  = O
              //iteration 8
       //const cellA = options[condition[0]]  = X
       //const cellB = options[condition[1]]  = X    TRUE X's Won
       //const cellC = options[condition[2]]  = X


        if(cellA == "" || cellB == "" || cellC == ""){   //check if cells does not have textContent if so continue
            continue;                             
        }
        if(cellA == cellB && cellB == cellC ){     //check if cell have 3 consecutive linear pattern if so roundWon true and break
            roundWon = true;
            break;
        }
    }
    if(roundWon){                      //check if roundWon is true if so print player who won and stop running
        statusText.textContent = `${currentPlayer} Won!`
        running = false;
    } else if(!options.includes("")) {   //check if the options array does not have remaining empty string once all the cell the filled with text if so print draw and stop running 
        statusText.textContent = "Draw!";
        running = false;                                                       
    }else {
        changePlayer()             //if roundWon is not yet true and options array still have vacant index or has empty string continue the game by calling changPlayer() function
    }
}

function restartGame(){
   cells.forEach(cell => cell.textContent="");
   options = ["","","","","","","","",""];
   currentPlayer = "X";
   statusText.textContent = `${currentPlayer}'s turn!`;
   running = true;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//TWO SUM
// function twoSum(nums,target){
//    const map = new Map();
   
   
//    for (let i = 0; i < nums.length; i++){
//      const complement = target - nums[i];

//       if(map.has(complement)){
//        [map.get(complement),i];
//       }
//        map.set([nums[i], i])
//     }
//     return [];
// }
// twoSum(numArray,target)
//TWO SUM (BRUTE FORCE APPROACH)
function twoSum(num,target){
  for(let i = 0; i < num.length; i++){
    for(let j = i +1; j < num.length; i++){
      if(num[i] + numArray[j] == target){
      console.log([i,j])
      }
    }
  }
}
const numArray =  [2,7,11,15];
const target = 9;
twoSum(numArray,target)
//---------------------------------------------------------------------------------------------------------//
//MERGE ARRAY
// function mergeArr(num1,m,num2,n){
//   let first = m-1;
//   let second = n-1;
//   let i = m+n - 1;
//   while(second >= 0){
//     let fVal = num1[first];
//     let sVal = num2[second];  
//     if(fVal > sVal){
//       num1[i] = fVal;
//       i--;
//       first--;
//     }else{
//       num1[i] = sVal;
//       i--;
//       second--;
//       console.log(num1);
//     }    
//   }  
// }
// const arr1 = [1,2,3,0,0,0]
// const m = 3;
// const arr2 = [4,5,6];
// const n = 3;
// mergeArr(arr1,m,arr2,n)
//Code Walkthrough
//Iteration 1
//first = 2 | second = 2 | i = 5 | fVal = 3 | sVal = 6
//3 > 6  ----------------> take the 6 to last index of num1
//num1 = [1,2,3,0,0,6]  | i--; = 4  | second --; = 1 meaning sVal = 5

//Iteration 2
//first = 2 | second = 1 | i = 4 | fVal = 3 | sVal = 5
//3 > 5  ----------------> take the 5 to index 4 of num1
//num1 = [1,2,3,0,5,6]  | i--; = 3  | second --; = 0 meaning sVal = 4

//Iteration 3
//first = 2 | second = 0 | i = 3 | fVal = 3 | sVal = 4
//3 > 5  ----------------> take the 5 to index 4 of num1
//num1 = [1,2,3,0,5,6]  loop breaks second = 0















