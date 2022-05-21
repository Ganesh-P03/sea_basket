import React from "react";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";
import Faq from "./Faq";
import { useState, useEffect } from "react";

function updateUI(faq) {
  return (
    <div className="faq">
      <Faq question={faq.question} answer={faq.answer} />
    </div>
  );
}

function Faqs() {
  const faqsCollectionRef = collection(db, "Faq's");
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const getFaqs = async () => {
      const data = await getDocs(faqsCollectionRef);
      console.log(data);
      setFaqs(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    };

    getFaqs();
  }, []);

  return (
    <div>
      <h3 className="heading_Faqs">FAQ's</h3>
      <div className="faqs">{faqs.map(updateUI)}</div>
    </div>
  );
}

export default Faqs;
