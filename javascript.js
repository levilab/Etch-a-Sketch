const container = document.querySelector("#container");
const body = document.querySelector("body");
body.appendChild(container)

const div1 = document.createElement("div");
div1.classList.add("itemInput");
body.appendChild(div1);

const label = document.createElement("label");
label.textContent = "Enter a number";
label.setAttribute("for","item");
let input = document.createElement("input");
input.setAttribute("id","item");
const btn = document.createElement("button");
btn.textContent = "Generate";

div1.appendChild(label);
div1.appendChild(input);
div1.appendChild(btn);


// move two divisions above the scrip element
const script = document.querySelector("script")
body.insertBefore(div1, script);
body.insertBefore(container, script);

const sizeResult = document.createElement("div");
body.append(sizeResult, container)


function deleteBox() {
    let child = container.lastElementChild;
    while (child) {
        container.removeChild(child);
        child = container.lastElementChild;
    }
}

function addBox(num) {
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++){
            const box = document.createElement("div");
            box.classList.add('cell');
            box.style.width = (100/num) + "%";
            
            container.appendChild(box);
    }
    }
}


btn.addEventListener("click", () => {
    sizeResult.textContent = `The current size is: ${input.value} x ${input.value}`;
    container.style.backgroundColor = "unset";
    const num = input.value
    input.value = ''

    deleteBox()

    addBox(num)

    input.focus()
});


container.addEventListener("mouseover", event => {
    // if the color is known, darken it 
   
    if (event.target.classList.contains("cell")) {
        let currentOpacity = event.target.style.opacity
        if (event.target.style.opacity) {
            event.target.style.opacity = Number(currentOpacity) + 0.1
            
    } else {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    event.target.style.backgroundColor = 'rgb(' + red + ', ' + green + ',' +blue+')';
    event.target.style.opacity = 0.1;
    }
}
});









