const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
    drivers.push(name);
}

function destructivelyPrependDriver(name) {
    drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
    drivers.pop();
}

function destructivelyRemoveFirstDriver() {
    drivers.shift();
}

function appendDriver(name) {
    const allDrivers = [...drivers, name];
    return allDrivers;
}

function prependDriver(name) {
    const allDrivers = [name, ...drivers];
    return allDrivers;
}

function removeLastDriver() {
    const array = drivers.slice(0, drivers.length - 1);
    return array;
}

function removeFirstDriver() {
    const array = drivers.slice(1);
    return array;
}