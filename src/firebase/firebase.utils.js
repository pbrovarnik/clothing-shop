import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const { APP_FB_API_KEY, APP_FB_AUTH_DOMAIN, APP_FB_DATABASE_URL, APP_FB_PROJECT_ID, APP_FB_STORAGE_BUCKET, APP_FB_MESSAGING_SENDER_ID, APP_FB_APP_ID } = import.meta.env;

const config = {
	apiKey: APP_FB_API_KEY,
	authDomain: APP_FB_AUTH_DOMAIN,
	databaseURL: APP_FB_DATABASE_URL,
	projectId: APP_FB_PROJECT_ID,
	storageBucket: APP_FB_STORAGE_BUCKET,
	messagingSenderId: APP_FB_MESSAGING_SENDER_ID,
	appId: APP_FB_APP_ID,
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

export const addCollectionsAndDocuments = async (collectionKey, objectsToAdd) => {
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
