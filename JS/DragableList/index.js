// function clickOnHello(){
const abc = document.getElementById("A").addEventListener("click", function () {
  console.log("A clicked");
});

console.log(abc); // ! First it will be undefined becuase the DOM is loading and accroding to the attirbute selected in the script tag, "async" or "defer" the undefined will appear, If none is provided, it'll give error
// }

// clickOnHello()
const inpu = document.getElementById("A");

const draggableElement = document.querySelector("#A"); // ! Queryselctor gets the first CSS selector in the html doc

draggableElement.addEventListener("dragstart", (event) => {
  // ! Starting of the drag
  event.dataTransfer.setData("text/plain", event.target.value); // ! Set the Data which to be dragged
  console.log("drag start");
});

// ! Initial phase of learning droping

// function onDrop(event) { // ! Tells what to do when drag is released
//     const data = event.dataTransfer.getData("text/plain");
//     let prevData = drop.value
//     inpu.value = prevData // changes the value of inside the input tag content
//     event.target.value = data; // Change according to the element type. textcontent for p tag and value for input tag
//     event.preventDefault();
//     console.log(data)
//   }

//   const drop = document.getElementById("B")

//   drop.addEventListener("dragover", (event) =>{ event.preventDefault() // ! Specifying the drop area, can change the mouse pointer or something else visual ques
//     console.log("drop here");
//   });

//   drop.addEventListener("drop", onDrop) // !  tells what to do when droped

const divv = document.getElementById("di");
let cnt = 0;
async function add() {
  console.log("clivkke");
  const inp = document.createElement("input");
  divv.appendChild(inp);
  inp.setAttribute("id", cnt);
  inp.setAttribute("draggable", "true");
  console.log("A new input tag added");
  localStorage.setItem(cnt, inp.outerHTML);
  cnt++;
}
const btn = document.getElementById("btn");
btn.addEventListener("click", add);

// Retrieve the element's data on page load
window.addEventListener("load", () => {
  for (let i = 0; i < localStorage.length; i++) {
    storedElement = localStorage.getItem(i);
    if (storedElement) {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = storedElement;
      divv.appendChild(tempDiv.firstChild);
    }
    console.log(storedElement);
  }
});



// Script.js
const sortableList = document.getElementById("di");
let draggedItem = null;

sortableList.addEventListener("dragstart", (e) => {
  draggedItem = e.target;
  setTimeout(() => {
    e.target.style.display = "none";
  }, 0);
});

sortableList.addEventListener("dragend", (e) => {
  setTimeout(() => {
    e.target.style.display = "";
    draggedItem = null;
  }, 0);
});

sortableList.addEventListener("dragover", (e) => {
  e.preventDefault();
  const afterElement = getDragAfterElement(sortableList, e.clientY);
  const currentElement = document.querySelector(".dragging");
  if (afterElement == null) {
    sortableList.appendChild(draggedItem);
  } else {
    sortableList.insertBefore(draggedItem, afterElement);
  }
});

const getDragAfterElement = (container, y) => {
  const draggableElements = [
    ...container.querySelectorAll("input:not(.dragging)"),
  ];

  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return {
          offset: offset,
          element: child,
        };
      } else {
        return closest;
      }
    },
    {
      offset: Number.NEGATIVE_INFINITY,
    }
  ).element;
};
