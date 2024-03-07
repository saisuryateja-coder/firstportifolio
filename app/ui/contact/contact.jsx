"use client";

import { useState } from "react";
import Button from "../button";
import { sendMail } from "@/app/utils/mail";

export default function Contact() {
  const [sent, isSentHandle] = useState(false);

  async function handleMail(e) {
    e.preventDefault();
    const response = await fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify({
        mail: e.target.mail.value,
        name: e.target.name.value,
        service: e.target.service.value,
      }),
      cache: "no-store",
    });
    const isSent = await response.json();
    isSentHandle(isSent.message);
  }

  console.log(sent);

  return (
    <section id="contact" className="flex flex-col items-center pb-20">
      <h2 className="text-4xl font-bold mb-8 top-heading text-black">
        Contact me
      </h2>

      <form
        onSubmit={handleMail}
        className="w-[400px] flex flex-col items-center">
        <input
          className=" px-5 py-4 border border-black rounded-[5px] w-full mb-5 max-[1330px]:w-4/5 outline-none text-black"
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          className=" px-5 py-4 border border-black rounded-[5px] w-full mb-5 max-[1330px]:w-4/5 outline-none text-black"
          type="email"
          name="mail"
          placeholder="Email Address"
        />
        <select
          name="service"
          id="cars"
          className=" px-5 py-4 border border-black rounded-[5px] w-full mb-5 max-[1330px]:w-4/5 outline-none text-black">
          <option hidden value="volvo">
            Select the type of service
          </option>
          <option value="Full length videos">Full length videos</option>
          <option value="Short form videos">Short form videos</option>
        </select>
        {sent && (
          <p className="text-black mb-5 text-center">
            Thanks for submitting, we will get back to you shortly
          </p>
        )}
        {!sent && <Button name="Submit" />}
      </form>
    </section>
  );
}
