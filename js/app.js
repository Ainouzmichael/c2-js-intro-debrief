let mynumber = 15,
    item = 'Shoes',
    number = 1;

if (typeof mynumber === 1) {
    console.log('This is not a number');
}
if (mynumber % 3 === 0) {
    console.log('Gen');
} else {
    if (mynumber % 5 === 0) {
        console.log('Buzz');
    } else {
        if (mynumber % 3 === 0 && mynumber % 5 === 0) {
            console.log('GenBuzz');
        } else {
            console.log('', mynumber);
        }

    }

}
///////////////////////////////////////////////////

switch (Hat) {
    case Shoes:
        console.log('Shoes is 50$');
        break;
    case Jeans:
        console.log('Jeans is 25$');
        break;
    case Hat:
        console.log('Hat is 12$');
        break;
    case Socks:
        console.log('Socks is 2$');
        break;
    default:
        console.log('invalid item');
        break;
}

////////////////////////////////////////////////////

if (typeof number === 1) {


    while (number < 50 && number > 100) {
        number = Math.floor(Math.random() * 100);
    }
    console.log('this is my random number', number);
}
///////////////////////////////////