PWA.ServiceWorker.register();

M.AutoInit();



// Displays a pop-up requesting permission to allow Notifications
document
    .getElementById('btn-requesting-permission')
    .addEventListener('click', () => {
        PWA.Notification.requestPermission((status) => {
            M.toast({html: 'Notification permission status: '+status});
        });
    })
;


// Show Notification sent by the browser
document
    .getElementById('btn-show-notification')
    .addEventListener('click', () => {
        var title = document.getElementById('push-title').value;
        var msg = document.getElementById('push-msg').value;
        const options = {
            body: msg,
            icon: 'https://i.pravatar.cc/192'
        };

        PWA.Notification.show(title, options, sent => {
            if (sent) {
            	M.toast({html: 'The Notification has been sent'});
            }
        });
    })
;





// Button to subscribe to Push Notifications
document
    .getElementById('btn-subscription')
    .addEventListener('click', () => {
    	if (
            PWA.Notification.isDefault() ||
            PWA.Notification.isGranted()
        ) {
            PWA.Push.getSubscription((subscription) => {
                if (subscription) {
                    M.toast({html: 'You are now subscribed to receive Push Notifications!'});
                } else {
                    PWA.Push.subscribe((r) => {
                        M.toast({html: 'Congratulations! You are subscribed to receive Push Notifications!'});
                    });
                }
            });
        } else {
            M.toast({html: "You've turned off Push Notifications. Allow Push Notifications in your browser settings."});
        }
    })
;

// Checkbox toggle to subscribe/unsubscribe to Push Notifications
document
    .getElementById('toggle-subscription')
    .addEventListener('change', () => {
    	if (
            PWA.Notification.isDefault() ||
            PWA.Notification.isGranted()
        ) {
            PWA.Push.getSubscription((subscription) => {
                if (subscription) {
                    PWA.Push.unsubscribe((r) => {
                        M.toast({html: 'You have been unsubscribed to receive Push Notifications!'});
                    });
                } else {
                    PWA.Push.subscribe((r) => {
                        M.toast({html: 'You are now subscribed to receive Push Notifications!'});
                    });
                }
            });
        } else {
            M.toast({html: "You've turned off Push Notifications. Allow Push Notifications in your browser settings."});
        }
    })
;


// Clear the browser app cache
document
    .getElementById('btn-clear-cache')
    .addEventListener('click', () => {
        PWA.Navigator.clearCache();
        M.toast({html: "Clear Cache! Look in Dev tools > Application!"});
    })
;



















// // Check the Notifications permissions
// // Default status
// if (PWA.Notification.isDefault()) {
//     console.log('Permission for Notifications are with default status.');
// } else {
//     console.log('Permission for Notifications are not with default status.');
// }
//
// // Granted status
// if (PWA.Notification.isGranted()) {
//     console.log('Permission for Notifications was granted!');
// } else {
//     console.log('Permission for Notifications was not granted!');
// }
//
// // Blocked status
// if (PWA.Notification.isBlocked()) {
//     console.log('Permission for Notifications was blocked.');
// } else {
//     console.log('Permission for Notifications was not blocked.');
// }
//
// // Denied status
// if (PWA.Notification.isDenied()) {
//     console.log('Permission for Notifications was denied.');
// } else {
//     console.log('Permission for Notifications was not denied.');
// }
//
// // Displays a pop-up requesting permission to allow Notifications
// PWA.Notification.requestPermission((status) => {
//     console.log('Notification permission status:', status);
// });
//
// // Get the Notifications permission status
// var permission = PWA.Notification.getPermission();
//
// // Show Notification sent by the browser
// const options = {
//     body: 'Extra content to display within the notification',
//     icon: '../images/touch/chrome-touch-icon-192x192.png'
// };
//
// PWA.Notification.show('Notification Title', options, sent => {
//     if (sent) {
//     	console.log('The Notification has been sent');
//     }
// });
//
// // Register the main service worker
// PWA.ServiceWorker.register();
//
// // Get the Registration object of the service worker
// PWA.ServiceWorker.getRegistration((registration) => {
//     if (registration) {
//     	console.log(registration);
//     } else {
//        console.log('The Service Worker is not registered!');
//     }
// });
//
// // Check if the browser support Service Workers
// if (PWA.Navigator.isSupportedServiceWorker()) {
//     console.log('This browser support Service Workers!');
// } else {
//     console.log('This browser does not support Service Workers.');
// }
//
// // Check if the browser support Notifications
// if (PWA.Navigator.isSupportedNotification()) {
//     console.log('This browser support Notifications!');
// } else {
//     console.log('This browser does not support Notifications.');
// }
//
// // Check if the browser is offline
// if (PWA.Navigator.isOffline()) {
//     console.log('No Internet connection!');
// } else {
//     console.log('You have an Internet connection!');
// }
//
// // Clear the browser app cache
// PWA.Navigator.clearCache();
