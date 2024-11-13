import React, { useState } from 'react';

const Calendar2 = ({ setTid }: { setTid: any }) => {
  const [selectedButton, setSelectedButton] = useState<{ row: number; col: number } | null>(null);

  const timeSlots = [
    ['08:00-09:00', '12:00-13:00', '18:00-19:00'], // Row 1
    ['08:00-09:00', '12:00-13:00', '18:00-19:00'], // Row 2
    ['08:00-09:00', '12:00-13:00', '18:00-19:00'], // Row 3
  ];

  const dates = ['18 Oct', '19 Oct', '20 Oct'];

  const handleClick = (timeSlot: string, rowIndex: number, colIndex: number) => {
    setTid(timeSlot);
    setSelectedButton({ row: rowIndex, col: colIndex });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* Table Head */}
          <thead>
            <tr>
              {dates.map((date) => (
                <th key={date}>{date}</th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {timeSlots.map((timeSlotRow, rowIndex) => (
              <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-base-200' : ''}>
                {timeSlotRow.map((timeSlot, colIndex) => (
                  <td key={colIndex}>
                    <button
                      onClick={() => handleClick(timeSlot, rowIndex, colIndex)}
                      className={`btn ${
                        selectedButton?.row === rowIndex && selectedButton?.col === colIndex
                          ? 'btn-secondary'
                          : 'btn-primary'
                      }`}
                    >
                      {timeSlot}
                    </button>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Calendar2;
