// ========= Active Navbar =============
let Nav = document.querySelector(".navigation-wrap")
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        Nav.classList.add("scroll-on");
    }else{
        Nav.classList.remove ("scroll-on");
    }
}





// ========= Nav Hide =================
let Navbar = document.querySelectorAll(".nav-link")
let navCollapse = document.querySelectorAll(".navbar-collapse.collapse");
Navbar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})






// ========= Counter Design ============
document.addEventListener(DOMConttentLoaded, () =>{
    function Counter(id, start, end, duration){
        let obj = document.grtElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range))
        timer = setInterval(() =>{
            current += increment
            obj.textContent = current;
            if(current == end){
                clearInterval(timer);
            }
        }, step);
    }
    Counter("Counter", 0, 1234, 3450);
    Counter("Counter", 98, 1234, 3350);
    Counter("Counter", 0, 1234, 3450);
    Counter("Counter", 0, 1234, 3450);
})