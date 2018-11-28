let uzi = 'hello';
//Kiíratjuk az uzi változó típusát a typeof segítségvel
console.log(typeof uzi); // string

uzi = 12345;
console.log(typeof uzi); // number

uzi = 1 / 0;
uzi = 1 / "a";
console.log(uzi);
console.log(typeof uzi);
