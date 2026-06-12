"use client";

import ContentReceiver from "../../components/contentReceiver";
import Clock from "../../components/clock";
import { useState } from "react";
// @ts-ignore
import "../../styles/receiver.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Receiver'
}

const Receiver = () => {
  const [btnState, changeState] = useState(false);

  const changeBtnState = () => {
    changeState(!btnState);
  }

  console.log(btnState);
  return(
    <>
      <div className="receiverBox">
        <p className={`${roboto.className} clock ${btnState? 'full' : ''}`}><Clock /></p>
        <p className={`receiverText ${btnState? 'hide' : ''}`}><ContentReceiver /></p>
      </div>
      <button id="changeButton" onClick={changeBtnState}></button>
    </>
  );
};

export default Receiver;
