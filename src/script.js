// const auth = {username: "admin@gmail.com", password: "12345678"};
// const firstAuth = document.getElementById("auth");
// const dashboard = document.getElementById("dashboard");
// const loginButton = document.getElementById("loginBTN");
// const username = document.getElementById("user");
// const password = document.getElementById("pass");
// const wrong = document.getElementById("wrong");

// wrong.style.display = 'none';
// dashboard.style.display = "none";
// document.querySelector('footer').style.display = "none";
// loginButton.addEventListener("click", function(){
//     if(username.value === auth.username && password.value === auth.password){
//         dashboard.style.display = 'flex';
//         firstAuth.style.display = 'none';
//     }else{
//         wrong.style.display = 'inline';
//     }
// })

const sliderText = document.getElementById('slider-text');
    const checkbox = document.getElementById('checkbox');
    
    checkbox.addEventListener("change", function() {
        console.log("Somebody clicked me");
        if (checkbox.checked) {
            sliderText.innerText = "Total";
            sliderText.classList.remove("right-1.5");
            sliderText.classList.add("left-1");
        } else {
            sliderText.innerText = "Today";
            sliderText.classList.add("right-1.5");
            sliderText.classList.remove("left-1");
        }
    });

    document.getElementById("bar").addEventListener("click", function() {
        const responsiveLogo = document.getElementById("responsive-logo");
        if (responsiveLogo) {
            console.log(responsiveLogo.src);
            if (responsiveLogo.src === "http://127.0.0.1:5500/src/svg/logo.png") {
                responsiveLogo.classList.add("w-[44px]");
                responsiveLogo.classList.remove("w-[100px]");
            } else if (responsiveLogo.src === "http://127.0.0.1:5500/src/svg/ocadologo%202.svg") {
                responsiveLogo.classList.remove("w-[44px]");
                responsiveLogo.classList.add("w-[100px]");
                console.log("second condition executed successfully");
            }
        } else {
            console.error("Element with ID 'responsive-logo' not found.");
        }
    });

    function setupToggle(div, divToToggle) {
        div.addEventListener("click", function() {
            if (div.classList.contains("added")) {
                div.style.transform = "translate(0px)";
                console.log(54);
                div.classList.remove("added");
                divToToggle.classList.add("invisible");
                
            } else {
                div.style.transform = "translate(225px)";
                div.classList.add("added");
                divToToggle.classList.remove("invisible");
            }
        });
    }

    const div1 = document.getElementById("div1");
    const div2 = document.getElementById("div2");
    const div12 = document.getElementById("div12");
    const div22 = document.getElementById("div22");

    setupToggle(div1, div2);
    setupToggle(div12, div22);