import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function App() {
  // In the contacts file I could bring that info over if i didnt want to find my own info for ryan and neymar

  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name="Beyonce"
        img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        phone="+123 456 789"
        email="b@beyonce.com" // After you copy these over from the place they were hard coded. you can replace them with {props.name etc.}
      />
      <Card
        name="Ryan"
        img="data:image/jpeg;base64,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"
        phone="+123 123 1234"
        email="RyRey@gmail.com"
      />
      <Card
        name="Neymar"
        img="https://e0.365dm.com/19/09/2048x1152/skysports-barcelona-neymar_4787730.jpg?20190927110857"
        phone="+321 123 3210"
        email="ney@gmail.com"
      />
    </div>
  );
}

export default App;
