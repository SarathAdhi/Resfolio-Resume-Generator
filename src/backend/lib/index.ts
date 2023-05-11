import {
  dbFireStore,
  resumesCollectionRef,
  storage,
  usersCollectionRef,
} from "../db";

import {
  addDoc as addDocFB,
  query,
  getDocs,
  QueryConstraint,
  updateDoc as updateDocFB,
  doc,
  deleteDoc,
} from "firebase/firestore";

import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";

const collections = {
  users: usersCollectionRef,
  resumes: resumesCollectionRef,
};

type DocProps = {
  collection: keyof typeof collections;
  values: {};
};

export const addDoc = async (
  collection: DocProps["collection"] = "users",
  values: DocProps["values"]
) => {
  const getCollection = collections[collection];

  return await addDocFB(getCollection, values);
};

export const delFile = async (filePath: string) => {
  const storageRef = ref(storage, filePath);

  deleteObject(storageRef)
    .then(() => {
      console.log("File deleted");
    })
    .catch((error) => {
      // Uh-oh, an error occurred!
    });
};

export const delDoc = async (
  collection: DocProps["collection"] = "users",
  id: string,
  filePath?: string
) => {
  if (filePath) delFile(filePath);
  return await deleteDoc(doc(dbFireStore, collection, id));
};

export const updateDoc = async (
  collection: DocProps["collection"] = "users",
  id: string,
  values: DocProps["values"]
) => {
  return await updateDocFB(doc(dbFireStore, collection, id), values);
};

type FilterDocProps = {
  collection: "users" | "resumes";
  where: QueryConstraint;
};

export const filterDoc = async (
  collection: FilterDocProps["collection"] = "users",
  where: FilterDocProps["where"]
) => {
  const getCollection = collections[collection];

  const res = query(getCollection, where);
  const querySnapshot = await getDocs(res);

  const data = [] as any;

  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });

  return data;
};

type FileUploadProps = {
  fileName: string;
  file: File | any;
};

export const fileUpload = async (
  fileName: FileUploadProps["fileName"],
  file: FileUploadProps["file"]
) => {
  const storageRef = ref(storage, fileName);

  return await uploadBytes(storageRef, file);
};

export const getFile = async (filePath: string) => {
  const fileref = ref(storage, filePath);
  return await getDownloadURL(fileref).then((url) => url);
};
