let selectedFruits = [];

function addFruit(fruit) {
    selectedFruits.push(fruit);
    document.getElementById('selectedFruits').innerHTML = 'Selected fruits: ' + selectedFruits.join(', ');
}

function checkout() {
    document.getElementById('smoothieAnimation').style.display = 'block';
    setTimeout(() => {
        document.getElementById('smoothieAnimation').style.display = 'none';
        document.getElementById('finalOrder').innerHTML = 'Your smoothie includes: ' + selectedFruits.join(', ');
    }, 3000); // Animation lasts for 3 seconds
}

window.onload = () => {
    selectedFruits = []; // Reset the fruit list when the page loads/reloads
};
