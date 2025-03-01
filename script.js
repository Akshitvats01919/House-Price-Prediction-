document.getElementById("predictionForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let area = parseFloat(document.getElementById("area").value);
    let bedrooms = parseInt(document.getElementById("bedrooms").value);
    let location = document.getElementById("location").value;

    if (isNaN(area) || isNaN(bedrooms)) {
        document.getElementById("result").innerHTML = "Please enter valid numbers.";
        return;
    }

    let basePricePerSqFt = 1500;
    let bedroomPremium = 50000;
    
    // Location-wise pricing adjustment
    let locationMultiplier = 1;  
    if (location === "City") locationMultiplier = 1.5;
    if (location === "Suburban") locationMultiplier = 1.2;
    if (location === "Rural") locationMultiplier = 0.8;

    let predictedPrice = ((area * basePricePerSqFt) + (bedrooms * bedroomPremium)) * locationMultiplier;

    document.getElementById("result").innerHTML = `🏡 Estimated Price: ₹${predictedPrice.toLocaleString()}`;
});
