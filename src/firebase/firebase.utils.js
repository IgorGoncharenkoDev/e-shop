// always import the base 'firebase',
// since the 'firebase' variable gives us access to 'firestore' and 'auth'
// when we import them in (e.g. firebase.auth())
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
	apiKey: "AIzaSyDLRumjeFoEx27h3tzIACjh-tBU_rT9J0I",
	authDomain: "react-e-shop-ce75d.firebaseapp.com",
	databaseURL: "https://react-e-shop-ce75d.firebaseio.com",
	projectId: "react-e-shop-ce75d",
	storageBucket: "react-e-shop-ce75d.appspot.com",
	messagingSenderId: "1089187938568",
	appId: "1:1089187938568:web:43444cb7a1bb0d6782acbd"
};

export const createUserProfileDocument = async (userAuth, additionalUserData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${ userAuth.uid }`);
	const userSnapshot = await userRef.get();

	// if current user does not exist
	if (!userSnapshot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		const newUserData = {
			displayName,
			email,
			createdAt,
			...additionalUserData
		}

		console.log('NEW USER =>', newUserData);

		try {
			await userRef.set(newUserData);
		}
		catch (err) {
			console.log('Error, cannot create a new user. Check createUserProfileDocument() function', err.message);
		}
	}
	// otherwise...nothing for now...

	// we might want to use the User Reference Object to do other things elsewhere in the App
	// (since the code above simply creates data for Firestore database)
	return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// setting up Google Authentication utility
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
	// triggering Google popup whenever using Google Auth provider for authentication and sign in
	prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// exporting 'firebase' in case we want to use the whole library outside of current .js file
export default firebase;
