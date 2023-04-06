import firebase from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyARU5d-pa3HczZyMjf9EFRnjYiliPjI83s",
    authDomain: "health-care-50d70.firebaseapp.com",
    databaseURL: "https://health-care-50d70-default-rtdb.firebaseio.com",
    projectId: "health-care-50d70",
    storageBucket: "health-care-50d70.appspot.com",
    messagingSenderId: "929719561432",
    appId: "1:929719561432:web:40f7149aeb83efebd47bad",
    measurementId: "G-EJE5PCV6RL"
};
	
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

export default database;
