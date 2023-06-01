import {initializeApp} from 'firebase/app';
import {getAnalytics, isSupported} from 'firebase/analytics';
import {getFirestore} from 'firebase/firestore';
import {initializeFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDPt17cYY1kagq5xP63ipzE3TbdHIE-1_s',
  authDomain: 'reactnative-f0243.firebaseapp.com',
  projectId: 'reactnative-f0243',
  storageBucket: 'reactnative-f0243.appspot.com',
  messagingSenderId: '238625201594',
  appId: '1:238625201594:web:df5b6ae24ea90479f95183',
  measurementId: 'G-Z03J17FY4D',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const app = initializeApp(firebaseConfig);
//firebase.firestore().settings({experimentalForceLongPolling: true});
//export const analytics = getAnalytics(app);

export const analytics = isSupported().then(yes =>
  yes ? getAnalytics(app) : null,
);

export const db = initializeFirestore(app, {
  experimentalAutoDetectLongPolling: true,
});
//getFirestore(app);
