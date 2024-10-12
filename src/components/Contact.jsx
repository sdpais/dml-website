import { useState, useEffect } from "react";
import axios from "axios";

const Contact = () => {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [statusSuccessMessage, setStatusSuccessMessage] = useState("");
  const [statusFailureMessage, setStatusFailureMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    axios.post('http://localhost:9200/ContactUs/', {
      internalid : '',
      fullname: fullname,
      email: email,
      phone: phone,
      message: message,
      spam: true,
      createdOn: '2024-10-08T03:38:01.721Z'
      }, {
        headers: {
          'Content-Type':'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:3000/'
        }
      })
    .then((res) => {
        if (res.status === 200) {
        setFullName('');
        setEmail('');
        setPhone('');
        setMessage('');
        DisplaySuccessMessage('User created successfully! ');
      } else {
        DisplayFailureMessage('Some error occured! The status is ' + res.status);

      }})
    // Catch errors if any
    .catch((err) => {
      console.log(err);
      DisplayFailureMessage(err.message);
    })
  }
  const handleSubmitxhr = async (e) => {
    let xhr = new XMLHttpRequest();
    xhr.callback = xhrSuccess;
    xhr.onerror = xhrError;
    let urlContact = "http://localhost:9200/ContactUs/";
    xhr.open("POST", urlContact, true);
    xhr.send(JSON.stringify({
      internalid : '',
      fullname: fullname,
      email: email,
      phone: phone,
      message: message,
      spam: "true",
      createdOn: "2024-10-08T03:38:01.721Z"
    }));

  }
  const xhrSuccess = async (e)=> {
    if (this.status === 200) {
      setFullName("");
      setEmail("");
      setPhone("");
      setMessage("");
      DisplaySuccessMessage("User created successfully! ");
    } else {
      DisplayFailureMessage('Some error occured! The status is ' + this.status);
    }
  }
  const DisplaySuccessMessage = async (message) => {
    setStatusSuccessMessage(message);
    setTimeout(() => DisplaySuccessMessage(""), 3000 )
  }
  const DisplayFailureMessage = async (message) => {
    setStatusFailureMessage(message);
    setTimeout(() => DisplayFailureMessage(""), 3000 )
  }
  const xhrError = async (e) => {
    console.log(e.err);
    console.error(this.statusText);
  }
  const handleSubmitAxios1 = async (e) => {
    e.preventDefault();
    
    axios({
      url : "http://localhost:9200/ContactUs/",
      method : "POST",
      credentials: true,
      headers : {
        "Content-Type":"application/json",
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods' : 'GET, PUT, POST, DELETE, OPTIONS',
        },
      data: JSON.stringify({
          internalid : '',
          fullname: fullname,
          email: email,
          phone: phone,
          message: message,
          spam: "true",
          createdOn: "2024-10-08T03:38:01.721Z"
        })
      })
      .then((res) => {
        if (res.status === 200) {
          setFullName("");
          setEmail("");
          setPhone("");
          setMessage("");
          DisplaySuccessMessage("User created successfully! ");
        } else {
          DisplayFailureMessage('Some error occured! The status is ' + res.status);

        }})
      // Catch errors if any
      .catch((err) => {
        console.log(err);
      })
  }
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center pl-14 p-4'>
      <form onSubmit={handleSubmit} className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border=pink-600 text-gray-300'>Contact</p>
          <p className='text-gray-200 py-4 text-2xl'>We would love to hear from you. Please contact us via the form below</p>
        </div>
        <input className='bg-gray-200 p-2' type='text' placeholder='Full Name' name='fullname' value={fullname} onChange={(e) => setFullName(e.target.value)}/>
        <input className='bg-gray-200 p-2 my-4 ' type='email' placeholder='Email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className='bg-gray-200 p-2 my-4 ' type='phone' placeholder='Phone' name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
        <textarea className='bg-gray-200 p-2 ' placeholder='Message' rows='10' name='message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        <button className=' hover:bg-blue-500 hover:border-blue-900 px-4 py-3 text-white border-2 text-2xl my-8 mx-auto flex items-center'>Contact Us</button>
        <div className="w-full text-green-300 text-2xl">{statusSuccessMessage ? <p>{statusSuccessMessage}</p> : null}</div>
        <div className="w-full text-red-500 text-2xl">{statusFailureMessage ? <p>{statusFailureMessage}</p> : null}</div>
      </form>  
    </div>
  )

  
}

export default Contact
