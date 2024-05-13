
    function calculateFootprint() {
        var beefConsumptionOunces = document.getElementById('beefInput').value;
        const ouncesPerKilogram = 35.274; // Number of ounces in one kilogram
        // Convert ounces to kilograms
        var beefConsumptionKilograms = beefConsumptionOunces / ouncesPerKilogram;

        const emissionFactor = 27; // kg CO2e per kg of beef
        const waterPerKg = 15400; // liters of water per kg of beef (source: Water Footprint Network)

        // Carbon footprint
        const carbonFootprint = beefConsumptionKilograms * emissionFactor;
        document.getElementById('carbonOutput').textContent = carbonFootprint.toFixed(2);

        // Equivalent emissions and water usage
        document.getElementById('carMiles').textContent = (carbonFootprint / 0.404).toFixed(1); // Average emissions from car (kg CO2e per mile)
        document.getElementById('homeHeating').textContent = (carbonFootprint / 24.5).toFixed(2); // Average daily home heating emissions
        document.getElementById('electricityUse').textContent = (carbonFootprint / 0.53).toFixed(0); // Emissions from one light bulb for a year
        document.getElementById('waterUsage').textContent = (beefConsumptionKilograms * waterPerKg).toFixed(0);
    }

