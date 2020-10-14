function berapaNilaiKamu (nilai) {
    if (nilai > 100){
        console.log ("masukan nilai kaamu :)")
    } else if (nilai >= 90){
        console.log("Selamat nilai kamu A");
    } else if (nilai >= 75){
        console.log("selamat nilai kamu B");
    } else if (nilai >= 60){
        console.log("Semangat nilai kamu C");
    } else if (nilai >= 50){
        console.log("Yah nilai kamu D");
    } else if (nilai < 50){
        console.log("Oh nooo maaf kamu tidak lulus")
    } else {return ("silahkan masukan nilai kamu :)")}
}
let nilai = "seratus"
console.log(berapaNilaiKamu(nilai))

//let nilai=prompt(`Masukan nilai yang kamu dapat!`);
//if (nilai > 100 ){
//    alert ("masukan nilaimu ya!");
//} else if ( nilai >= 90  ){
//  alert ("Yeaayy selamat nilai kamu A");
//} else if (nilai >= 75 ){
//   alert("Selamat kamu mendapatkan nilai B");
//} else if (nilai >= 60 ){
//   alert("Semangat nilai kamu C");
//} else if (nilai >=  50){
//   alert ("Yah nilai kamu D");
//} else if (nilai  < 50){
//  alert ("Oh noo maaf kamu tidak lulus");
//} else {
//    alert ("masukan nilaimu :)");
//}