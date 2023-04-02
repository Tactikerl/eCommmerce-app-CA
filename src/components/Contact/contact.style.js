import styled from "styled-components";

const ContactWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f5f5f5;
`;

const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 50%;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const ContactInput = styled.input`
    width: 100%;
    height: 50px;
    margin: 10px 0;
    padding: 0 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    font-size: 1.2rem;
`;

const ContactTextArea = styled.textarea`
    width: 100%;
    height: 150px;
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    font-size: 1.2rem;
`;

const ContactButton = styled.button`
    width: 100%;
    height: 50px;
    margin: 10px 0;
    border: none;
    border-radius: 5px;
    outline: none;
    font-size: 1.2rem;
    background-color: #000;
    color: #fff;
    cursor: pointer;
`;

export {
    ContactWrapper,
    ContactForm,
    ContactInput,
    ContactTextArea,
    ContactButton,
};

