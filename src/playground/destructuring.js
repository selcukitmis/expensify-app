
// OBJECT DESTRUCTURING

const person = {
    name: "Selçuk",
    age: 34,
    location: {
        city: "İstanbul",
        temp: 45
    }
};

const { name: firstName, surname: lastName = "İTMİŞ", age } = person;

console.log("firstName", firstName);
console.log("lastName", lastName);
console.log("age", age);

// ARRAY DESTRUCTURING

const address = ["Kartaltepe Mah", "Bakırköy", "İstanbul", "Türkiye"];

const [mahalle, ilce, il, ulke] = address;
console.log("mahalle", mahalle);
console.log("ilce", ilce);
console.log("il", il);
console.log("ulke", ulke);

const [mahalle2,,ulke2] = address;

console.log("mahalle2", mahalle2);
console.log("ulke2", ulke2);
