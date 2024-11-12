import React from 'react';

interface InfoProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  date: Date | null;
  handleFormSubmit: () => void;
}

const Info: React.FC<InfoProps> = ({ name, setName, email, setEmail, date, handleFormSubmit }) => {
  return (
    <div>
      {date && (
        <h2 className='text-xl font-bold'>Enter your details for {date.toLocaleDateString()}</h2>
      )}
      <input
        type='text'
        placeholder='Your Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        className='p-2 border border-gray-300 rounded-md'
      />
      <input
        type='email'
        placeholder='Your Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className='p-2 border border-gray-300 rounded-md'
      />
      <button onClick={handleFormSubmit} className='bg-pink-300 text-white p-2 rounded-md'>
        Submit
      </button>
    </div>
  );
};

export default Info;
