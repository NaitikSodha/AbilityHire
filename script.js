fetch('navbar.html')
    .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.text();
    })
    .then(data => {
        document.getElementById('navbar').innerHTML = data;
        // Ensure button functionality is attached after navbar content is loaded
        const toggleButton = document.getElementById('toggleButton');  // Get the button element
        if (!toggleButton) {
            console.error("Toggle button not found after navbar load.");
            return;
        }
        
        const synth = window.speechSynthesis;
        let utterance = null;
        let featureEnabled = false; // Start with the feature turned off

        // Function to toggle the feature on or off
        window.toggleFeature = function() {
            featureEnabled = !featureEnabled;  // Toggle the flag
            synth.cancel();
            // Ensure the button text updates properly
            toggleButton.innerText = featureEnabled ? "🔊 Speech ON" : "🔇 Speech OFF";
        }

        document.body.addEventListener("mouseover", (event) => {
            if (!featureEnabled) return; // Return early if feature is disabled

            const target = event.target;
            const text = target.innerText.trim();

            // Ignore elements with no meaningful text or large containers
            if (!text || target.tagName === "BODY" || target.tagName === "HTML") {
                return;
            }

            // Stop any ongoing speech before starting a new one
            synth.cancel();

            utterance = new SpeechSynthesisUtterance(text);
            synth.speak(utterance);
        });

        document.body.addEventListener("mouseleave", () => {
            if (!featureEnabled) return; // Stop speaking only if feature is enabled
            synth.cancel(); // Stop speaking when leaving the page
        });

        document.addEventListener("keydown", (event) => {
            if (event.key.toLowerCase() === "m") {
                window.toggleFeature();
            }
        });
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

const fileInput = document.getElementById('pdf');
const fileChosen = document.getElementById('file-chosen');

if (fileInput && fileChosen) {
    fileInput.addEventListener('change', function() {
        fileChosen.textContent = this.files[0].name;
    });
} else {
    console.warn("File input or file-chosen element not found.");
}
