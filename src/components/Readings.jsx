import React from "react";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";
import Reading from "./Reading";
import { useState, useEffect } from "react";

function updateUI(reading) {
  console.log(reading);
  return <Reading heading={reading.heading} content={reading.content} />;
}

function Readings() {
  const readingsCollectionRef = collection(db, "Readings");
  const [readings, setReadings] = useState([]);

  useEffect(() => {
    const getReadings = async () => {
      const data = await getDocs(readingsCollectionRef);
      console.log(data);
      setReadings(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    };

    getReadings();
  }, []);

  return (
    <div>
      <h3 className="heading_Readings">HAVE A READ</h3>
      <div className="readings">{readings.map(updateUI)}</div>
    </div>
  );
}

export default Readings;
