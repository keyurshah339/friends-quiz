var score=0;
function yo(question, answer)
{var readlineSync = require('readline-sync');
var reply = readlineSync.question(question);
if(reply==answer)
score++;
else
score--;

}

var pikachu = [{ 
  question:"Which character has a twin? \n 1).rachel \n 2).phoebe \n 3).joey\n",
  answer:"phoebe"
},
{
  question:"\nHow many times has Ross been married?\n 1).3 \n 2).4 \n 3).5\n",
  answer:"3"

},

{question:"\nWhat’s Phoebe’s sister’s name? \n 1).ariel \n 2).ursula \n 3).jasmine\n",
  answer:"ursula"}]

  var zapdos = [{ 
  question:"Who sang the Friend theme song?\n 1).rembrandts \n 2).academy \n 3).beatles \n ",
  answer:"rembrandts"
},
{
  question:"Where did Monica get a pencil stuck when she was 14? \n  1).nose \n 2)ears \n 3).mouth \n ",
  answer:"ears"

},

{question:"Who says the last line of the series? \n 1).chandler \n 2)joey \n 3).monica \n",
  answer:"chandler"}]
 for ( ; ; )
{ score=0;
  var readlineSync = require('readline-sync');
  var ask = readlineSync.question("What is your name fan?\n")
  const chalk = require('chalk');
 
  
  console.log("\nHola!"+ ask +" this is the level 1 of quiz \n");
  console.log(chalk.blue('Rules:\n'));
   console.log(chalk.red('There are two levels in this game!\n'));
    console.log(chalk.red('For every correct answer you will get a +1 and for every wrong answer -1\n'));
     console.log(chalk.red('You need a score more than 1 to proceed to next level\n'));
    
  for(var i=0;i<pikachu.length;i++)
  yo(pikachu[i].question,pikachu[i].answer)
  console.log("your final score is =" + score);

  if (score>=1 )

{ console.log("-----------------------------------")
  console.log("Welcome to level 2!!Kudos you are a true fan")
  for(var i=0;i<zapdos.length;i++)
  yo(zapdos[i].question,zapdos[i].answer)
  console.log("CONGRATS!!! Your final score is =" + score);
  break;
}
}




