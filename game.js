

function play(){
    var match_count=0
    var game_count=0

    do{
        luck=prompt("Enter Number(1-10) To Check Your Luck!!!.......................\nclick Cancel when you feel bored");
        console.log(luck);
        var random=Math.floor(Math.random()*10)+1
        console.log("random:",random)
        if (random==luck)
           {
              console.log("matched");
              match_count=match_count+1;
              
           }
        game_count=game_count+1;
           
    }while(luck!=null);
    var luck_value=(match_count/game_count)*100;
    alert("game sucessfully ended");
    alert("luckey matches:"+match_count);
    alert("you played  "+game_count+"times");
    alert("your luck percentage at this instance "+luck_value+"%");
    // console.log("ended");
    // console.log("luckey matches:",match_count);
    // console.log("you played  "+game_count+"times");

    }
   

function end(){
    
}
   
   