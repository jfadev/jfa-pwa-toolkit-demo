// Register Service Worker
PWA.ServiceWorker.register();

// Init Materialize
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
