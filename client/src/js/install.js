const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// This logic came from the Module 19 mini project install.js
window.addEventListener('beforeinstallprompt', (event) => {
        // Store the triggered events
        window.deferredPrompt = event;

        // Remove the hidden class from the button.
        butInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
   return;
  }
});

window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
  
    butInstall.classList.toggle('hidden', true);
});
