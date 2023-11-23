// compare two JSON have same properties without order

var obj1 = {name: "Person 1", age: 5};
var obj2 = {age: 5, name: "Person 1"};

let equal = true;

for(var a in obj1){
    if (obj1[a] !== obj2[a] || obj2[a] !== obj1[a]){
        equal = false;
    }
}
console.log(equal);

