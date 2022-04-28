import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAR2TaqFY_8xluMBlEr_w7k24uhGWW8Tt4",
  authDomain: "tiendavideosjuegospc.firebaseapp.com",
  projectId: "tiendavideosjuegospc",
  storageBucket: "tiendavideosjuegospc.appspot.com",
  messagingSenderId: "910494223282",
  appId: "1:910494223282:web:cd5099e043bd861ff972ab",
  measurementId: "G-72BJ4512G3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const  db = getFirestore(app)

export default db
// const analytics = getAnalytics(app);

