import React from 'react';
import '../../App.css';

export default function Contact() {
    return ( <
        div className = "contact" >
        <
        h1 > Contact Us < /h1>

        <
        form id = "contact-form"
        method = "POST" >
        <
        label htmlFor = "name" > Full Name < /label> <
        input name = "name"
        placeholder = "Enter full name..."
        type = "text" / >
        <
        label htmlFor = "email" > Email < /label> <
        input name = "email"
        placeholder = "Enter email..."
        type = "email" / >
        <
        label htmlFor = "message" > Message < /label> <
        textarea id = "txt"
        rows = "6"
        placeholder = "Enter message..."
        name = "message"
        required >
        < /textarea> <
        button type = "submit"
        id = "bttt" > Send Message < /button> <
        /form> <
        /div>
    );
}