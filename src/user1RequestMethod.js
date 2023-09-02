import axios from "axios";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "./Firebase";

const Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZGI0MTQ3MzIzNTY2ODU0OGMyODZkNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MjA5MjQ0OSwiZXhwIjoxNjkyMzUxNjQ5fQ.qmcKQT0swt4JHafbfm6awoEtwB9VA_y6lYxUHFCPZVs";

const baseURL = "https://ecom-backend-apis.onrender.com/api/";


export const publicRequest = axios.create({
    baseURL:baseURL,
    Token:`bearer ${Token}`
})

export const uploadFile = async (file) => {
  
    const fileName = new Date().getTime()+ file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);
  
    return new Promise((resolve, reject) => {
      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
            default:
          }
        },
        (error) => {
          // Handle unsuccessful uploads
          reject(error); // Reject the promise with the error
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadURL) => {
              resolve(downloadURL); // Resolve the promise with the downloadURL
            })
            .catch((error) => {
              reject(error); // Reject the promise with the error
            });
        }
      );
    });
  };