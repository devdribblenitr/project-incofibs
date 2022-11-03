
import { storage } from "./firebase";
import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage';
import { toast } from 'react-toastify';

export default async function uploadImage(image, path_to_be_uploaded, toastId) {
    return new Promise(function(resolve, reject) {
      const storageRef = ref(storage, path_to_be_uploaded);
      const uploadTask = uploadBytesResumable(storageRef, image);
      uploadTask.on('state_changed',
        function(snapshot) {
          var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
        },
        function error(err) {
          toast.dismiss(toastId);
          toast.error(err.message);
          console.log("err", err);
          reject();
        },
        function complete() {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              toast.dismiss(toastId);
              toast.success('File uploaded successfully');
              resolve(downloadURL);
            });
        }
      )
    })
  }