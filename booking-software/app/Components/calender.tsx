'use client';

import React, { useState } from 'react';
import ReactCalendar from 'react-calendar';
import Info from './info';

interface DateType {
  justDate: Date | null;
  dateTime: Date | null;
}

const Calender = () => {
  const [date, setDate] = useState<DateType>({
    justDate: null,
    dateTime: null,
  });
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const handleFormSubmit = () => {
    console.log(`Name: ${name}, Email: ${email}, Date: ${date.justDate}`);
  };

  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      {date.justDate ? (
        <div className='flex gap-4'>
          <Info
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            date={date.justDate}
            handleFormSubmit={handleFormSubmit}
          />
        </div>
      ) : (
        <ReactCalendar
          minDate={new Date()}
          className='REACT-CALENDAR p-2'
          view='month'
          onClickDay={(selectedDate) => setDate((prev) => ({ ...prev, justDate: selectedDate }))}
        />
      )}
    </div>
  );
};

export default Calender;
