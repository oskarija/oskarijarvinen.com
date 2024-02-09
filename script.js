function copyPhoneNumber() {
    /* Copy text into clipboard */
    navigator.clipboard.writeText("+35850505758178").then(function() {
        showFeedback();
    }).catch(function(error) {
        console.error('Failed to copy:', error);
    });
}

function copyEmail() {
    /* Copy text into clipboard */
    navigator.clipboard.writeText("oskari.jarvinen@gmail.com").then(function() {
        showFeedback();
    }).catch(function(error) {
        console.error('Failed to copy:', error);
    });
}

// Show the text "copied to clipboard" as feedback
function showFeedback() {
    const feedback = document.getElementById('feedback');
    feedback.textContent = 'Copied to clipboard';
    feedback.classList.add('show');

    setTimeout(() => {
        feedback.classList.remove('show');
    }, 2000); // Adjust the time for how long you want the feedback to be displayed (in milliseconds)
}

//