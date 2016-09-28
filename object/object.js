var firstObject = {};

console.log(firstObject, "<=firstLog");

firstObject.firstName = "Ian";

console.log(firstObject, "<=secondLog");

firstObject["lastName"] = "Robinson";

console.log(firstObject, "<=thirdLog");

console.log(firstObject["firstName"], "<=firstName")

console.log(firstObject.lastName, "<=lastName");
