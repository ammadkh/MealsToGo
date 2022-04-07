import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const login = (email, password) => {
  const auth = getAuth();
  return createUserWithEmailAndPassword(auth, email, password);
};
