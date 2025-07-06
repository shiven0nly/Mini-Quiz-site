document.getElementById('btn').addEventListener('click', function() {
    // Show the .waiting element
    let waitingElem = document.querySelector('.waiting');
    if (waitingElem) {
        waitingElem.style.display = 'flex';
    }
    // Wait 3-4 seconds, then redirect
    setTimeout(function() {
        window.location.href = 'index2.html';
    }, 4000); // 4s
});