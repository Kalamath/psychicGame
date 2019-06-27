// piece of code that does one or more actions
// do not repeat yourself DRY

function go(name, age) {
    if (age < 20) {
        return name+'!'
    } else {
        return name;
    }
}

alert( go('Martell', 19) );