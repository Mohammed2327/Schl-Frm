import React, { useState } from 'react';



function RegistrationForm() {
  const [studentName, setStudentName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [motherName, setMotherName] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

   
    setStudentName('');
    setFatherName('');
    setMotherName('');
    setAge('');
    setSex('');
    setEmail('');
    setPhoneNumber('');
  };

  const handleCancel = () => {
   
    setStudentName('');
    setFatherName('');
    setMotherName('');
    setAge('');
    setSex('');
    setEmail('');
    setPhoneNumber('');
  };

  return (
    <div className="container">
      <div className="form-wrapper">
        <h2>School Registration Form</h2>
        <form onSubmit={handleFormSubmit}>
          <label>
            Student Name:
            <input
              type="text"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              required
            />
          </label>
          <label>
            Father Name:
            <input
              type="text"
              value={fatherName}
              onChange={(e) => setFatherName(e.target.value)}
              required
            />
          </label>
          <label>
            Mother Name:
            <input
              type="text"
              value={motherName}
              onChange={(e) => setMotherName(e.target.value)}
              required
            />
          </label>
          <label>
            Age:
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </label>
          <label>
            Sex:
            <select
              value={sex}
              onChange={(e) => setSex(e.target.value)}
              required
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
          <label>
            Email ID:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Phone Number:
            <input
              type="tel"
              pattern="[0-9]{10}"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </label>
          <div className="button-wrapper">
            <button type="submit">Submit</button>
            <button type="button" onClick={handleCancel}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
