//json Stands for javascript object Notation
//Json is a lightweight
//Formate for storing and transporting dara.
//Json is often used when data is sent from a server to web page
const biodata = {
    name: "Nirav",
    age:26,
    Degree : "computer Science",
};

console.log(biodata);

const jsonData = JSON.stringify(biodata);

console.log(jsonData);
// we can't use this formate to access json data "console.log(jsonData.Degree);"
const objdata = JSON.parse(jsonData);
console.log(typeof(objdata));
console.log(objdata)
console.log(objdata.Degree);
