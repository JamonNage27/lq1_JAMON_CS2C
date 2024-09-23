let Name1 = "Maria Delos Santos Las Marias";
let labelName = "Name: ";
let Age1 = 25;
let labelAge = "Age: ";
let Address1 = "Upper Session Road, Baguio City,Benguet ";
let labelAddress = "Address: ";
let arrange = Name1.split(" ");
console.log(arrange);

let Name2 = "Juan Gamoso Dela Cruz";
let labelName1 = "Name: ";
let Age2 = 28;
let labelAge1 = "Age: ";
let Address2= "San Nicolas, Candon City, Ilocos Sur";
let labelAddress1 = "Address: ";
let Name2_rearrange = Name2.split(" ");
console.log(Name2_rearrange);

let reserve = Name1.length+Name2.length+Address1.length+Address2.length+Age1+Age2;
console.log(reserve);

let lyn = Age1 + Age2;
let vinci = lyn - Name1.length;
let ky = vinci * Name2.length;
let pia = Address1.length ** Address2.length;
console.log(lyn);
console.log(vinci);
console.log(ky);
console.log(pia);
