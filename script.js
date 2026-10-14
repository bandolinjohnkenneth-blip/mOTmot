function openEnvelope() {

    // Hide envelope screen
    document.getElementById("screen1").style.display = "none";

    // Show second screen
    document.getElementById("screen2").style.display = "flex";
}


function goBack() {

    // Hide second screen
    document.getElementById("screen2").style.display = "none";

    // Show envelope
    document.getElementById("screen1").style.display = "flex";
}