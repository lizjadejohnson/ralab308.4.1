//-----------------------FUNCTIONS------------------------//

// 1. Function to convert CSV data to a two-dimensional array
const csvToArray = (csvString) => {
  // Split the CSV string into rows based on newline characters
  const rows = csvString.split("\n");
  // Use the map function to split each row into columns
  const array = rows.map((row) => row.split(","));
  return array;
};

// 2. Function to convert array data into an array of objects
const arrayToObjects = (array) => {
  // Extract the first row to use as keys
  const keys = array[0].map((key) => key.toLowerCase());
  // Transform each row into an object, excluding the first row
  const objectsArray = array.slice(1).map((row) => {
    const obj = {};
    row.forEach((value, index) => {
      obj[keys[index]] = value;
    });
    return obj;
  });
  return objectsArray;
};

//-----------------------VARIABLES AND FUNCTION CALLS--------------------------//

// 1. Our unformatted string:
const csvData =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// 2. Use the csvToArray function to convert the sample CSV data initially:
const resultArray = csvToArray(csvData);

// 3. Take our new resultArray from above and convert the array to objects with arrayToObjects:
const objectsArray = arrayToObjects(resultArray);

//4. Print the result:
console.log(objectsArray);
