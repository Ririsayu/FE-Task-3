var nomor = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

let ganjil = [];

let i = 0;

for (i; i <nomor.length; i++){
	if (nomor[i] %2 == 1){
		ganjil.push(nomor[i]);
}
}

console.log("Bilangan ganjil = " + ganjil)
