const names = ['Lisa', 'Kaitlin', 'Jan'];
const event = "surprise"
function writeCards(names, event) {
    let thankYoucards = [];
    for (let i = 0; i < names.length; i++) {
        thankYoucards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return thankYoucards;
}

function countDown(num) {
    while (num > 0) {
        console.log(num);
        num -= 1;
    }
    console.log(num)
}