function copyServerIP() {
    const serverIP = document.getElementById('serverIP').textContent;
    navigator.clipboard.writeText(serverIP).then(function() {
        const button = event.target;
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        setTimeout(() => {
            button.textContent = originalText;
        }, 2000);
    });
}