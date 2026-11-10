let player="X";
let board=["","","","","","","","",""]
let win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


function play(cell,index){
    if(board[index]!="")return;
    board[index]=player;
    cell.innerHTML=player;
    if(checkWin()){
        document.getElementById("message").innerHTML="player"+player+"wins";
    }
}
if(player=="X")player=("0")
    else{
    player=("X")
     document.getElementById("message").innerHTML="player"+player+"sturn";   
    }


