import React, { useState } from "react";
import axios from "axios";
export default function AppFunctional(props) {
  const [location, setLocation] = useState([2, 2]);
  const [message, setMessage] = useState("");
  const [step, setStep] = useState(0);
  const [form, setForm] = useState("");

  function onChange(event) {
    // inputun değerini güncellemek için kullandık.
    setForm(event.target.value);
  }

  function onSubmit(event) {
    event.preventDefault();
    let sonuc = {
      location: location,
      steps: step,
      email: form,
    };
    const newObj = JSON.stringify(sonuc);

    setMessage(newObj);

    // axios
    //   .post("http://localhost:9000/api/result", sonuc)
    //   .then((response) => {
    //     setMessage(response.data.message);
    //     setEmail("");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     setMessage(error.response.data.message);
    //   });
  }

  function up() {
    setMessage("");
    // x sabit , y değişecek
    if (location[1] > 1) {
      setLocation([location[0], location[1] - 1]);
      setStep(step + 1);
    } else {
      setMessage("YUKARI GİDEMEZSİNİZ");
    }
  }

  function right() {
    setMessage("");
    // x değişecek , y sabit
    if (location[0] < 3) {
      setLocation([location[0] + 1, location[1]]);
      setStep(step + 1);
    } else {
      setMessage("SAĞA GİDEMEZSİNİZ");
    }
  }

  function down() {
    setMessage("");
    // x sabit , y değişecek
    if (location[1] < 3) {
      setLocation([location[0], location[1] + 1]);
      setStep(step + 1);
    } else {
      setMessage("AŞAĞI GİDEMEZSİNİZ");
    }
  }

  function left() {
    setMessage("");
    // x değişecek , y sabit
    if (location[0] > 1) {
      setLocation([location[0] - 1, location[1]]);
      setStep(step + 1);
    } else {
      setMessage("SOLA GİDEMEZSİNİZ");
    }
  }

  function reset() {
    setLocation([2, 2]);
    setStep(0);
    setMessage("");
  }

  const initialIndex = (location[1] - 1) * 3 + location[0] - 1; //ilk index=4

  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">Koordinatlar ({location.join(", ")})</h3>
        <h3 id="steps">{step} kere ilerlediniz</h3>
      </div>
      <div id="grid">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((idx) => (
          <div
            key={idx}
            className={`square${idx === initialIndex ? " active" : ""}`}
       