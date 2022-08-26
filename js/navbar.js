window.onload = (e) => {
    document.querySelector("body").setAttribute("style", "background: #402662;background-image: linear-gradient(45deg,#402662 0%,#3900A6 80%);color:white;");
    document.getElementById("cbox_img").setAttribute("src", "/images/peakpx%20(5).jpg")
    if (document.querySelectorAll(".card") != null) {
        let cards = document.querySelectorAll(".card");
        cards.forEach(element => {
            element.classList.add("night");
        });
    }
}
const cbox = document.getElementById("day_night");
const cbox1 = document.getElementById("cbox");
const cbox_imgs = document.getElementById("cbox_img");
cbox.addEventListener("change", (e) => {
    if (cbox.checked) {
        console.log("Works.....");
        cbox1.setAttribute("class", "cbox anim_start");
        cbox_imgs.setAttribute("style", "transform:translateX(0);");
        document.querySelector("body").setAttribute("style", "background: linear-gradient(45deg,#000 30%,darkblue 70%);color:white;");
        if (document.querySelector(".card") != null) {
            let cards = document.querySelectorAll(".card");
            cards.forEach(element => {
                if (element.classList.contains("night")) {
                    element.classList.remove("night");
                    element.classList.add("day");
                    document.getElementById("cbox_img").setAttribute("src", "/images/3.jpg")

                }
            });
        }
    } else {

        console.log("Works.....");
        cbox1.setAttribute("class", "cbox anim_end");
        cbox_imgs.setAttribute("style", "transform:translateX(10px);");
        document.querySelector("body").setAttribute("style", "background: #402662;background-image: linear-gradient(45deg,#402662 0%,#3900A6 80%);color:white;");
        if (document.querySelector(".card") != null) {
            let cards = document.querySelectorAll(".card");
            cards.forEach(element => {
                if (element.classList.contains("day")) {
                    element.classList.remove("day");
                    element.classList.add("night");
                    document.getElementById("cbox_img").setAttribute("src", "/images/peakpx%20(5).jpg")
                }

            });
        }
    }
})