if (!('serviceWorker' in navigator)) {
    console.log('Browser does not support service worker.');
}
else {
    navigator.serviceWorker.register('../service-worker.js').then(() => {
            console.log('Service worker has been registered.');
        }).catch((error) => {
            console.log('Error registering service worker:', error);
        });
}