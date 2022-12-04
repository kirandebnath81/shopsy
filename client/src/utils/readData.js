import { onValue, ref } from "firebase/database";
import { db } from "../config/firebaseConfig";

const readData = (user, type, setData, emptyData) => {
  const dbRef = ref(db, `${user.uid}/${type}`);

  onValue(dbRef, (snapshot) => {
    const data = snapshot.val();

    if (data !== null) {
      setData(data);
    } else {
      setData(emptyData);
    }
  });
};

export default readData;
