function theDayAfter (hari){
    if (hari === "senin"){
        console.log("Besok adalah hari selasa");
    } else if (hari === "selasa"){
        console.log("Besok adalah hari rabu");
    } else if (hari === "rabu"){
        console.log("Besok adalah hari kamis");
    } else if (hari ==="kamis"){
        console.log("Besok adalah hari jumat");
    } else if (hari === "jumat"){
        connsole.log ("Besok adalah hari sabtu");
    } else if ( hari === "sabtu"){
        console.log("Besok adalah hari minggu")
    } else if ( hari === "minggu"){
        console.log ("Besok adalah hari senin")
    } else {return ( "Bukan nama hari")}
}
let hari = "minggu"
console.log(theDayAfter(hari))

