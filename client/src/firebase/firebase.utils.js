import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
	apiKey: 'AIzaSyAq2TNe_55iz798YeYK5y3OCytNUZR5IuM',
	authDomain: 'shop-db-86e05.firebaseapp.com',
	databaseURL: 'https://shop-db-86e05.firebaseio.com',
	projectId: 'shop-db-86e05',
	storageBucket: 'shop-db-86e05.appspot.com',
	messagingSenderId: '4978283448',
	appId: '1:4978283448:web:858e873999918c314df54d',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapshot = await userRef.get();

	if (!snapshot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (err) {
			console.log('error creating user', err);
		}
	}

	return userRef;
};

export const getUserCartRef = async (userId) => {
	const cartsRef = firestore.collection('carts').where('userId', '==', userId);
	const snapShot = await cartsRef.get();

	if (snapShot.empty) {
		const cartDocRef = firestore.collection('carts').doc();
		await cartDocRef.set({ userId, cartItems: [] });
		return cartDocRef;
	} else {
		return snapShot.docs[0].ref;
	}
};

export const addCollectionsAndDocuments = async (
	collectionKey,
	objectsToAdd
) => {
	const collectionRef = firestore.collection(collectionKey);

	const batch = firestore.batch();
	objectsToAdd.forEach((obj) => {
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef, obj);
	});

	return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
	const transformedCollection = collections.docs.map((doc) => {
		const { title, items } = doc.data();

		return {
			routeName: encodeURI(title.toLowerCase()),
			id: doc.id,
			title,
			items,
		};
	});

	return transformedCollection.reduce((accu, collection) => {
		accu[collection.title.toLowerCase()] = collection;
		return accu;
	}, {});
};

firebase.initializeApp(config);

export const getCurrentUser = () => {
	return new Promise((resolve, reject) => {
		const unsubscribe = auth.onAuthStateChanged((userAuth) => {
			unsubscribe();
			resolve(userAuth);
		}, reject);
	});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () =>
	auth.signInWithPopup(googleProvider).catch((err) => {
		console.error('Google auth error:', err.message);
	});

export default firebase;
