import React, { useState } from 'react'

const ContactPage = ()  => {
    const [fullName, setFullName] = useState('')
    const [subject, setSubject] = useState('')
    const [email, setEmail] = useState('')
    const [body, setBody] = useState('')

    function onFullNameChange(e) {
        setFullName(e.target.value)
    }

    return (
        <div>
            <form >
                <input value={fullName} placeholder="Your Full Name" onChange={onFullNameChange} />
            </form>
        </div>
    )
}
export default ContactPage;