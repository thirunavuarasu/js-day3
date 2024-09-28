
//1 st question//
function deepEqual(obj1, obj2) {
    const normalize = (obj) => {
        // Convert object to sorted array of key-value pairs
        return Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]));
    };

    const normalizedObj1 = normalize(obj1);
    const normalizedObj2 = normalize(obj2);

    // Compare the normalized arrays
    return JSON.stringify(normalizedObj1) === JSON.stringify(normalizedObj2);
}

var obj1 = { name: "person1", age: 5 };
var obj2 = { age: 5, name: "person1" };

console.log(deepEqual(obj1, obj2)); // Output: true

//2nd question//
function reqListener() {
    console.log(this.responseText);
    const countryArr = JSON.parse(this.responseText)
    console.log(countryArr);
    for (let ind = 0; ind <= countryArr.length - 1; ind++) {
        console.log(countryArr[ind].flag.png);
    }
}

const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();

// 3rd question//
function reqListener() {
    console.log(this.responseText);
    contcountryArr=JSON.parse(this.responseText);
    console.log(countryArr);
    for(let i=0;i<=contcountryArr.length-1;i++){
      console.log(contcountryArr[i].name.common);
      console.log(contcountryArr[i].region);
      console.log(contcountryArr[i].subregion);
      console.log(contcountryArr[i].population);}
  }
  
  const request = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://restcountries.eu/rest/v2/all");
  req.send();