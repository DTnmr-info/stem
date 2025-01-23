// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/8.8.0/firebase-app.js');
// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/8.8.0/firebase-messaging.js');

const firebaseConfig = {
  apiKey: 'AIzaSyDJN12yPQIVw_mwZJoNQJrDGxZ_JKD1oEA',
  authDomain: 'stamp-quiz.firebaseapp.com',
  projectId: 'stamp-quiz',
  storageBucket: 'stamp-quiz.firebasestorage.app',
  messagingSenderId: '102286946902',
  appId: '1:102286946902:web:f05922be4f6e8b681d01f7',
  measurementId: 'G-Y7N68ZZWY4',
};

// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: './logo.png',
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});