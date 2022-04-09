import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

export const login = (email, password) => {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, password);
};

export const register = (email, password) => {
  const auth = getAuth();
  return createUserWithEmailAndPassword(auth, email, password);
};

export const logout = () => {
  const auth = getAuth();
  return signOut(auth);
};

export const stateChange = (cb) => {
  const auth = getAuth();
  onAuthStateChanged(auth, cb);
};
