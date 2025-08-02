import React, { useState } from 'react';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: ''
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async() => {
    await fetch( 'http://localhost:3000/students',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
        body:JSON.stringify(formData)
    });
     console.log(formData);
    // You can send data to backend here using fetch/axios
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ marginRight: '10px' }}>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ padding: '5px' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label style={{ marginRight: '10px' }}>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ padding: '5px' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label style={{ marginRight: '10px' }}>Gender:</label>
          <input
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            style={{ padding: '5px' }}
          />
        </div>

        <button type="submit" style={{ padding: '6px 12px' }}>Submit</button>
      </form>
    </div>
  );
};

export default App;
