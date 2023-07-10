//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

let list="";
for(let element of touristSpots.sort()){

	 list+="<li>"+element+"</li>";

}

document.getElementById("band").innerHTML =list;

