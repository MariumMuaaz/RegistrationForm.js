import React, {useState} from 'react';

function RegistrationForm() {   

   const[name, setName] = useState("");
   const[email, setEmail] = useState("");
   const[password, setPassword] = useState("");

   const handleNameChange = (e) => {    
    setName (e.target.value);
   };
    
   const handleEmailChange = (e) => {    
    setEmail (e.target.value);
   };

   const handlePasswordChange = (e) => {    
    setPassword (e.target.value);
   };

   const handleSubmit = (e) => {    
    e.preventDefault();

    setName("")
    setEmail("")
    setPassword("")
   };


  return (
      <form onSubmit={handleSubmit}>    
        <div>   
           <label htmlFor="name">Name:</label> 
           <input type="text"   
            id="name"
            value={name}
            onChange={handleNameChange}
           />
            </div>
         <div>   
           <label htmlFor="email">Email:</label> 
           <input type="email"   
            id="email"
            value={email}
            onChange={handleEmailChange}
           />
            </div>
            <div>   
           <label htmlFor="password">Password:</label> 
           <input type="password"   
            id="password"
            value={password}
            onChange={handlePasswordChange}
           />
            </div>  

                <button type='submit'>Register</button>
        </form>
  )
};

export default RegistrationForm;
