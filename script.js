//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

let list="";
for(let element of touristSpots.sort((a, b) => {
    const strip = (bandName) => bandName.replace(/^(a |an |the )/i, '');
    return strip(a) > strip(b) ? 1 : -1;)){

	 list+="<li>"+element+"</li>";

}

document.getElementById("band").innerHTML =list;

