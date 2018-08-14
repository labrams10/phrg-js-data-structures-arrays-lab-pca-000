// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push("Ralph");
}

function destructivelyPrependDriver(name) {
  drivers.unshift("Bob");
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
  const newDrivers = [name, ...drivers];

  return newDrivers;
}

function removeLastDriver() {
  const coolDrivers = drivers.slice(0, drivers.length - 1);

  return coolDrivers;
}

function removeFirstDriver() {
  const newCoolDrivers = drivers.slice(1);

  return newCoolDrivers;
}
