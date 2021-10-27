function newNav() {
    var x = document.getElementById("navigation");
    if (x.className === "navbar") {
        x.className += " responsive";
    } 
    else {
        x.className = "navbar";
    }
}
    var down = document.getElementById('Menu_Down'); 
    var arr = ["Ramen", "Matcha Tiramisu", 
                "Chicken Katsu", "Ohagi (Botamochi)"]; 

function Menu() { 
    down.innerHTML =  
    arr[Math.floor(Math.random() * arr.length)]; 
} 