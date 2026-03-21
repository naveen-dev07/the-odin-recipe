const app = document.querySelector("#app")

const newDiv = document.createElement("div")
newDiv.textContent = "💡 Smart Bulb"
newDiv.classList.add("bulb")
newDiv.style.background = "gray"
newDiv.style.display = "flex"
newDiv.style.alignItems = "center"
newDiv.style.justifyContent = "center"
newDiv.style.transition = "1s"
newDiv.style.gap = "10px"
newDiv.style.flexDirection = "row"
newDiv.style.color = "white"
newDiv.style.padding = "40px 60px"
newDiv.style.borderRadius = "16px"
newDiv.style.cursor = "pointer"
newDiv.style.fontSize = "24px"

newDiv.addEventListener("click", () => {
    if (newDiv.style.background === "gray") {

        newDiv.style.background = "yellow"
        newDiv.style.color= "black"

    } else {
        newDiv.style.background = "gray"
    }


})
app.appendChild(newDiv)

const app1 = document.querySelector("#app")

for (let i = 1; i <= 4; i++) {
    const bulb = document.createElement("div")
    bulb.textContent = `💡 Bulb ${i}`
    bulb.style.background = "gray"
    bulb.style.display = "flex"
    bulb.style.alignItems = "center"
    bulb.style.transition = "1s"
    bulb.style.justifyContent = "center"
    bulb.style.gap = "10px"
    bulb.style.flexDirection = "row"
    bulb.style.margin = "10px"
    bulb.style.color = "white"
    bulb.style.padding = "40px 60px"
    bulb.style.borderRadius = "16px"
    bulb.style.cursor = "pointer"
    bulb.style.fontSize = "24px"

    bulb.addEventListener("click", () => {
        if (bulb.style.background === "gray") {
            bulb.style.background = "yellow"
            bulb.style.color= "black"
        } else {
            bulb.style.background = "gray"
        }
    })

    app.appendChild(bulb)
}