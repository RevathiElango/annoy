// var answer = prompt("Are we there yet?");
// while(answer != "yes" && answer != "Yeah"){
// 	var answer = prompt("Are we there yet?");
// }
// alert("YAY,wE MADE IT!!!")

// if(answer ==="yes") {
// 	alert("YAY, We made it!")
// } else {
// 	var answer = prompt("Are we there yet?");
// }

//VERSION 2
var answer = prompt("Are we there yet?");
while(answer.indexOf("yes") === -1){
	var answer = prompt("Are we there yet?");
}
alert("YAY,WE MADE IT!!!")

