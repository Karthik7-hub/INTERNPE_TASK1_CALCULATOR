const btns = document.querySelectorAll("input");
const display = document.getElementById("display");

console.log(display);
btns.forEach(e => {
    if (e.type == "button") {
        if (!(parseInt(e.value) + 1)) {
            e.style.color = "#33ffd8";
        }
        e.addEventListener('click', (e) => {
            if (parseInt(e.target.value) + 1)
                display.value += e.target.value;
            else {
                switch (e.target.value) {
                    case "AC":
                        display.value = "";
                        break;
                    case "DE":
                        display.value = display.value.toString().slice(0, -1);
                        break;
                    case ".":
                        display.value += ".";
                        break;
                    case "/":
                        display.value += "/";
                        break;
                    case "*":
                        display.value += "*";
                        break;
                    case "-":
                        display.value += "-";
                        break;
                    case "+":
                        display.value += "+";
                        break;
                    case "=":
                        try {
                            display.value = eval(display.value);
                        }
                        catch (error) {
                            alert("PLEASE ENTER A VALID INPUT.");
                        }

                }
            }
        })
    }
})