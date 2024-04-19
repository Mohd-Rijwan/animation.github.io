console.log("Playing With Animations")

// navbar start 
window.addEventListener('scroll', function () {
    let navbar = this.document.querySelector(".navbar")
    navbar.classList.toggle('fixed', this.window.scrollY > 0);
})
// navbar end 


// cube rotation code start
const cube = document.querySelector('.cube');

cube.addEventListener('mouseenter', () => {
    cube.style.animationPlayState = 'paused';
});

cube.addEventListener('mouseleave', () => {
    cube.style.animationPlayState = 'running';
});
// cube rotation code end


// circular text code start 
        const canvas = document.getElementById('circularTextCanvas');
        const ctx = canvas.getContext('2d');
        const radius = 150;
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const text = "I Am Advance Animated Website Developer...  ";

        const anglePerLetter = (Math.PI * 2) / text.length;
        const fontSize = 24;
        let rotationAngle = 0;

        const colors = ['#FF5733', '#C70039', '#900C3F', '#581845', '#227093', '#2E86C1', '#F4D03F'];

        ctx.font = `${fontSize}px Helvetica`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        function drawText() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < text.length; i++) {
                ctx.fillStyle = colors[i % colors.length];
                const char = text[i];
                const angle = i * anglePerLetter + rotationAngle;
                const x = centerX + Math.cos(angle) * radius;
                const y = centerY + Math.sin(angle) * radius;
                ctx.fillText(char, x, y);
            }
            rotationAngle -= 0.01; // Adjust rotation speed here
            requestAnimationFrame(drawText);
        }

        drawText();
// circular text code end 



// skill bar start
const pro = document.querySelectorAll("#pro")
const p0 = document.querySelectorAll(".percent")
const scc = document.querySelectorAll(".skill-card-container")
let ci = null;
let ci3 = null;
let ci4 = null;
let ci5 = null;
let ci6 = null;
let ci7 = null;
let ci8 = null;
let ci9 = null;
let ci10 = null;
let ci11 = null;
let ci12 = null;
window.onscroll = () => {

    let contentPosition1 = scc[0].getBoundingClientRect().top;
    let contentPosition2 = scc[1].getBoundingClientRect().top;
    let contentPosition3 = scc[2].getBoundingClientRect().top;

    let screenPosition = window.innerHeight / 1.7;
    if (contentPosition1 < screenPosition) {
        pro[0].classList.add("new")
        pro[1].classList.add("new")
        pro[2].classList.add("new3")
        pro[3].classList.add("new4")


        let s2 = 0, s3 = 0, s4 = 0;

        if (!ci) {
            function fun() {
                s2++;
                if (s2 <= 95) {
                    p0[0].innerHTML = s2 + "%";
                    p0[1].innerHTML = s2 + "%";
                }
                else {
                    clearInterval(ci);
                }
            }
            ci = setInterval(fun, 52.63);  // 5000/95 == 52.63

        }

        if (!ci3) {
            function fun3() {
                s3++;
                if (s3 <= 85) {
                    p0[2].innerHTML = s3 + "%";
                }
                else {
                    clearInterval(ci3);
                }
            }
            ci3 = setInterval(fun3, 58.83);
        }

        if (!ci4) {
            function fun4() {
                s4++;
                if (s4 <= 80) {
                    p0[3].innerHTML = s4 + "%";
                }
                else {
                    clearInterval(ci4);
                }
            }
            ci4 = setInterval(fun4, 62.5);
        }
    }
    else {
        pro[0].classList.remove("new")
        pro[1].classList.remove("new")
        s2 = 0;
        clearInterval(ci);
        ci = null;

        pro[2].classList.remove("new3")
        s3 = 0;
        clearInterval(ci3);
        ci3 = null;

        pro[3].classList.remove("new4")
        s4 = 0;
        clearInterval(ci4);
        ci4 = null;
    }


    // second skill container 
    if (contentPosition2 < screenPosition) {
        pro[4].classList.add("new5")
        pro[5].classList.add("new6")
        pro[6].classList.add("new7")
        pro[7].classList.add("new8")
        let s5 = 0, s6 = 0, s7 = 0, s8 = 0;

        if (!ci5) {
            function fun5() {
                s5++;
                if (s5 <= 60) {
                    p0[4].innerHTML = s5 + "%";
                }
                else {
                    clearInterval(ci5);
                }
            }
            ci5 = setInterval(fun5, 83.33);

        }

        if (!ci6) {
            function fun6() {
                s6++;
                if (s6 <= 85) {
                    p0[5].innerHTML = s6 + "%";
                }
                else {
                    clearInterval(ci6);
                }
            }
            ci6 = setInterval(fun6, 58.82);

        }

        if (!ci7) {
            function fun7() {
                s7++;
                if (s7 <= 80) {
                    p0[6].innerHTML = s7 + "%";
                }
                else {
                    clearInterval(ci7);
                }
            }
            ci7 = setInterval(fun7, 62.5);

        }

        if (!ci8) {
            function fun8() {
                s8++;
                if (s8 <= 60) {
                    p0[7].innerHTML = s8 + "%";
                }
                else {
                    clearInterval(ci8);
                }
            }
            ci8 = setInterval(fun8, 83.33);

        }
    }
    else {
        pro[4].classList.remove("new5")
        s5 = 0;
        clearInterval(ci5);
        ci5 = null;

        pro[5].classList.remove("new6")
        s6 = 0;
        clearInterval(ci6);
        ci6 = null;

        pro[6].classList.remove("new7")
        s7 = 0;
        clearInterval(ci7)
        ci7 = null;

        pro[7].classList.remove("new8")
        s8 = 0;
        clearInterval(ci8);
        ci8 = null;

    }

    // third skill container 
    if (contentPosition3 < screenPosition){
        pro[8].classList.add("new9")
        pro[9].classList.add("new10")
        pro[10].classList.add("new11")
        pro[11].classList.add("new12")
        let s9=0,s10=0,s11=0,s12=0;

        if (!ci9) {
            function fun9() {
                s9++;
                if (s9 <= 99) {
                    p0[8].innerHTML = s9 + "%";
                }
                else {
                    clearInterval(ci9);
                }
            }
            ci9 = setInterval(fun9, 50.50);

        }

        if (!ci10) {
            function fun10() {
                s10++;
                if (s10 <= 90) {
                    p0[9].innerHTML = s10 + "%";
                }
                else {
                    clearInterval(ci10);
                }
            }
            ci10 = setInterval(fun10, 55.55);

        }

        if (!ci11) {
            function fun11() {
                s11++;
                if (s11 <= 90) {
                    p0[10].innerHTML = s11 + "%";
                }
                else {
                    clearInterval(ci11);
                }
            }
            ci11 = setInterval(fun11, 55.55);

        }

        if (!ci12) {
            function fun12() {
                s12++;
                if (s12 <= 70) {
                    p0[11].innerHTML = s12 + "%";
                }
                else {
                    clearInterval(ci12);
                }
            }
            ci12 = setInterval(fun12, 71.42);

        }
    }
    else{
        pro[8].classList.remove("new9")
        s9 = 0;
        clearInterval(ci9);
        ci9 = null;

        pro[9].classList.remove("new10")
        s10=0;
        clearInterval(ci10);
        ci10 = null;

        pro[10].classList.remove("new11")
        s11 =0;
        clearInterval(ci11)
        ci11 = null;

        pro[11].classList.remove("new12")
        s12 = 0;
        clearInterval(ci12);
        ci12 = null;

    }

}
        // skill bar end


        // ongoing project section start
        $(".carousel").owlCarousel({
            margin: 20,
            loop: true,
            dots:false,
            autoplay: true,
            autoplayTimeout: 7000,
            smartSpeed:3000,
            autoplayHoverPause: true,
            responsive: {
              0:{
                items:1,
                nav: false
              },
              600:{
                items:2,
                nav: false
              },
              1000:{
                items:3,
                nav: false
              }
            }
          });
        // ongoing project section end