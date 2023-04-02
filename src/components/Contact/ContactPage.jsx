import React, { useState } from "react";
import * as S from "./contact.styled";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    email: "",
    body: "",
  });

  const [errors, setErrors] = useState({
    fullName: false,
    subject: false,
    email: false,
    body: false,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errorsObj = {};
    if (formData.fullName.length < 3) {
      errorsObj.fullName = true;
    }
    if (formData.subject.length < 3) {
      errorsObj.subject = true;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errorsObj.email = true;
    }
    if (formData.body.length < 3) {
      errorsObj.body = true;
    }
    setErrors(errorsObj);

    if (Object.keys(errorsObj).length === 0) {
      console.log("Form data:", formData);
      alert("Form submitted successfully!");
    } else {
      console.error("Errors:", errorsObj);
    }
  };

  return (
    <S.ContactWrapper>
      <S.ContactForm onSubmit={handleSubmit}>
        <S.ContactInput
          type="text"
          name="fullName"
          value={formData.fullName}
          placeholder="Your Full Name"
          onChange={handleChange}
        />

        {errors.fullName && (
          <S.ContactError>
            Please enter a valid name (minimum of 3 characters)
          </S.ContactError>
        )}

        <S.ContactInput
          type="text"
          name="subject"
          value={formData.subject}
          placeholder="Subject"
          onChange={handleChange}
        />
        {errors.subject && (
          <S.ContactError>
            Please enter a valid subject (minimum of 3 characters)
          </S.ContactError>
        )}
        <S.ContactInput
          type="email"
          name="email"
          value={formData.email}
          placeholder="Your Email Address"
          onChange={handleChange}
        />

        {errors.email && (
          <S.ContactError>Please enter a valid email address</S.ContactError>
        )}

        <S.ContactTextArea
          name="body"
          value={formData.body}
          placeholder="Your text here..."
          onChange={handleChange}
        >
          {" "}
        </S.ContactTextArea>
        {errors.body && (
          <S.ContactError>Message must be at least 3 characters</S.ContactError>
        )}
        <S.ContactButton onClick={handleSubmit}>Submit</S.ContactButton>
      </S.ContactForm>
    </S.ContactWrapper>
  );
};
export default ContactPage;
