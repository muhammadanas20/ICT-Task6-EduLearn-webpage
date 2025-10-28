document.addEventListener('DOMContentLoaded',function(){
    const morningreeting = 'Good Morning';
    const aftergreeting = 'Good Afternoon';
    const eveninggreeting = 'Good Evening';
    const date = new Date();
    const hour = date.getHours();
    let greeting;
    if(hour>=5 && hour<12){
        greeting = morningreeting;
    }
    else if(hour>=12 &&  hour <18){
        greeting = aftergreeting;
    }
    else {
        greeting = eveninggreeting;
    }
    document.getElementById('greeting-message').textContent = greeting;
});
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.forEach(item => item.classList.remove("active"));
        this.classList.add("active");
    });
});
document.getElementById("join-btn").addEventListener("click", function () {
    alert("Thanks for your interest! Registration will open soon 😊");
});
const courseBoxes = document.querySelectorAll(".coursecatogary .course");
const courseDescription = document.getElementById("course-description");

courseBoxes.forEach(box => {
    box.addEventListener("mouseover", function () {
        courseDescription.innerText = `Explore ${this.innerText} courses and boost your skills!`;
    });

    box.addEventListener("mouseout", function () {
        courseDescription.innerText = "";
    });
});
const enrollBtns = document.querySelectorAll(".enroll-btn");

enrollBtns.forEach(btn => {
    btn.addEventListener("click", function () {
        const courseName = this.parentElement.querySelector("h3").innerText;
        alert(`You clicked Enroll for: ${courseName}`);
    });
});

