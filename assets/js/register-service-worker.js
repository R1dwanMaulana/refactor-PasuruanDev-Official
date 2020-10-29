// Register service worker
if ('serviceWorker' in navigator) {
    registerServiceWorker()
  }
  
  function registerServiceWorker() {
      return navigator.serviceWorker.register('/service-worker.js')
        .then(function (registration) {
          console.log('Registrasi service worker berhasil.');
          return registration;
        })
        .catch(function (err) {
          console.error('Registrasi service worker gagal.', err);
        });
  }
  
  function requestPermission() {
      if ('Notification' in window) {
        Notification.requestPermission().then(function (result) {
          if (result === "denied") {
            console.log("Fitur notifikasi tidak diijinkan.");
            return;
          } else if (result === "default") {
            console.error("Pengguna menutup kotak dialog permintaan ijin.");
            return;
          }
          
          navigator.serviceWorker.getRegistration().then(function(reg) {
            reg.showNotification('Notifikasi diijinkan!');
          });
        });
      }
  }
      
  