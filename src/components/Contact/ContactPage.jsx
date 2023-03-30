import React, { useState } from "react";

const ContactPage = () => {
  const [fullName, setFullName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");

  return (
    <div>
      <form>
        <input
          value={fullName}
          placeholder="Your Full Name"
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          value={subject}
          placeholder="Subject"
          onChange={(e) => setSubject(e.target.value)}
        />
        <input
          value={email}
          placeholder="Your Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          value={body}
          placeholder="Your text here..."
          onChange={(e) => setBody(e.target.value)}
        />
      </form>
    </div>
  );
};
export default ContactPage;
