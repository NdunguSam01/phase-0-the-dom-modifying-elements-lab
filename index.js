// Write your code here!
const main=document.getElementById("main") //Getting the element with id of main
main.remove(); //Removing the element

const newHeader=document.createElement("h1") //Creating a h1 element
newHeader.id="victory"; //Adding an id attribute to the created h1 element
newHeader.innerHTML="Samuel Muigai is the champion"; //Setting the text of the created h1 element
document.body.append(newHeader) //Appending the created h1 element to the document body