let monDiv = document.createElement('div');
monDiv.innerHTML = "Ce div a été ajouté en utilisant javascript";

document.getElementById('viewport').appendChild(monDiv);

let mySecondDiv = document.createElement("div");
document.getElementById('viewport').appendChild(mySecondDiv);
mySecondDiv.innerHTML = "blabla";
mySecondDiv.style.backgroundColor = "red";
mySecondDiv.style.width = 100 + "px";
mySecondDiv.style.height = 100 + "px";

document.getElementById("aSupprimer").remove();









