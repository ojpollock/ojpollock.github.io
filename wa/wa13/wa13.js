function nextStep(currentStep, nextStep) {
    // Get form values
    var res1 = document.getElementById("res1").value;
    var res2 = document.getElementById("res2").value;
    
    // Validate form fields
    if (currentStep === "step1" && res1 != 'yes please') {
        alert('be polite and say _ _ _ please.');
    } else if (currentStep === "step2" && (res2 != 'plus one please' && res2 != 'minus one please')) {
        alert('only ONE at a time buddy, and again, say please!');
    } else {
        // Hide current step and show next step
        document.getElementById(currentStep).style.display = 'none';
        document.getElementById(nextStep).style.display = 'block';
    }
}
    // const responses = ["plus one please", "minus one please"}


function submitForm() {
    // Get form values
    var res1 = document.getElementById("res1").value;
    var res2 = document.getElementById("res2").value;
    
    // Validate form fields
    if (res1 === '' || res2 === '') {
    alert('Please fill in all fields');
    } else {
        if (res2 === 'plus one please') {
        increase();
        } else  {
            if (res2 === 'minus one please')
        decrease();
        } 
                // Send form data to server
        document.getElementById("res1").value = '';
        document.getElementById("res2").value = '';
        
        // Show first step and hide others
        document.getElementById("step1").style.display = 'block';
        document.getElementById("step2").style.display = 'none';
        document.getElementById("step3").style.display = 'none';
    }

}

function increase() {
    if (outputInt < 100) {
    outputInt +=1;
    output.textContent = outputInt;
    }
}

// Function to decrease the number by two
function decrease() {
        if (outputInt > 0) {
        outputInt -=1;
        output.textContent = outputInt; }

}


const output = document.querySelector('.output');
let outputInt = parseInt(output.textContent);

