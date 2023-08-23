"use strict";
// בנו תכנית שמדמה את המשחק אבן נייר ומספריים
// התכנית תגדיר מי המנצח לפי חוקיות המשחק
// אבן מנצח מספריים שמנצחות נייר שמנצח אבן
// דגשים
// שחקן  יכול לבחור בין אבן נייר ומספרים בלבד! אך שחקן יכול שלא תהיה לו בחירה
// התכנית יכולה להחזיר את המחרוזות
// 'tie', 'player1', 'player2' 
// התשובה חייבת להכיל
// ENUM
// type/interface
// union
// במידה ולשחקן אין בחירה הצג זרקו שגיאה
// ממשו את הפונקציה הוסיפו טיפוסים לפרמטרים ולערך החזרה של הפונקציה
var Rps;
(function (Rps) {
    Rps["Rock"] = "rock";
    Rps["Paper"] = "paper";
    Rps["Scisoors"] = "scisoors";
    Rps["None"] = "";
})(Rps || (Rps = {}));
function playGame(player1, player2) {
    if (player1 === '' || player2 === '') {
        return 'one of the players did not choose';
    }
    else if (player1 === player2) {
        return 'tie';
    }
    else if (player1 === 'rock' && player2 === 'scisoors' || player1 === 'paper' && player2 === 'rock' || player1 === 'scisoors' && player2 === 'paper') {
        return 'player 1 won';
    }
    else {
        return 'player 2 won';
    }
}
const play = playGame(Rps.Rock, Rps.Paper);
console.log(play);
//Output: player1 or player2 or tie
