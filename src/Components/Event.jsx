import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Event = () => {
  const [isFlipped, setIsFlipped] = useState(Array(4).fill(false));
  const [filter, setFilter] = useState("Upcoming");

  const handleFlip = (index) => {
    const newFlipped = [...isFlipped];
    newFlipped[index] = !newFlipped[index];
    setIsFlipped(newFlipped);
  };

  const cardData = [
    {
      title: 'Chess Elite',
      description: 'Join us for Chess Elite, an exciting chess tournament that brings together the best strategic minds from across the university!',
      date: new Date(2024, 11, 1),
      img: "https://images.unsplash.com/photo-1606594914767-d6bfbde9a0e9?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: 'Hackathon',
      description: 'Step into the world of innovation with our University Hackathon!',
      date: new Date(2024, 10, 15),
      img: "https://edison365.com/wp-content/uploads/2022/03/How-do-hackathons-work-1024x576.png"
    },
    {
      title: 'Live Concert',
      description: 'Experience an unforgettable night of live music and entertainment with popular artists and bands!',
      date: new Date(2024, 9, 5),
      img: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: 'Guest Lecture',
      description: 'Join us for an insightful guest lecture by an industry expert on emerging technologies and trends!',
      date: new Date(2023, 0, 20)
    },
  ];

  const eventDetails = [
    {
      details: ["Prize Pool: $500", "Venue: University Chess Hall", "Participants: Open to all", "Registration Fee: $10"]
    },
    {
      details: ["Prize Pool: $1000", "Venue: Innovation Lab", "Teams Allowed: Yes", "Registration Fee: Free"]
    },
    {
      details: ["Early Bird Discount: 20%", "Venue: Main Auditorium", "Max Participants: 1500+", "Registration Fee: $15"]
    },
    {
      details: ["Special Guest Speaker", "Venue: Central Campus", "Limited Seats: Yes", "Registration Fee: $20"]
    }
  ];

  const filterEvents = () => {
    const now = new Date();

    switch (filter) {
      case 'Upcoming':
        return cardData.filter((event) => event.date > now);
      case 'Recent':
        return cardData.filter((event) => {
          const diff = (now - event.date) / (1000 * 60 * 60 * 24);
          return diff <= 30 && diff > 0;
        });
      case 'Past Month':
        return cardData.filter((event) => {
          const diff = (now - event.date) / (1000 * 60 * 60 * 24);
          return diff > 30 && diff <= 60;
        });
      case 'Year':
        return cardData.filter((event) => {
          return event.date.getFullYear() === now.getFullYear();
        });
      default:
        return cardData;
    }
  };

  const filteredEvents = filterEvents();

  return (
    <div className="w-full h-screen flex">
      <div className="sidebar bg-zinc-100 h-screen w-[25%]">
        <div className="w-[100%] h-[4vw] flex items-center justify-center">
          <h1 className="font-medium text-2xl">Event</h1>
        </div>
        <nav className="flex flex-col gap-20 ml-20 mt-20 p-[0.1px]">
          <Link
            onClick={() => setFilter('Upcoming')}
            className="m-3 p-3 bg-blue-300 w-[10vw] font-medium rounded text-center cursor-pointer"
          >
            Upcoming
          </Link>
          <Link
            onClick={() => setFilter('Recent')}
            className="m-3 p-3 bg-blue-300 w-[10vw] font-medium rounded text-center cursor-pointer"
          >
            Recent
          </Link>
          <Link
            onClick={() => setFilter('Past Month')}
            className="m-3 p-3 bg-blue-300 w-[10vw] font-medium rounded text-center cursor-pointer"
          >
            Past Month
          </Link>
          <Link
            onClick={() => setFilter('Year')}
            className="m-3 p-3 bg-blue-300 w-[10vw] font-medium rounded text-center cursor-pointer"
          >
            Year
          </Link>
        </nav>
      </div>

      <div className="card-container flex flex-wrap justify-center items-start w-[75%] h-screen bg-gray-200 p-4 gap-8 overflow-auto">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((card, index) => (
            <div key={index} className={`card ${isFlipped[index] ? 'flipped' : ''} w-[300px] h-[400px]`}>
              <div className="card-front bg-blue-100 rounded-lg p-4 flex flex-col items-center justify-center">
                <img
                  src={card.img}
                  alt=""
                  className="rounded w-full h-40 object-contain"
                />
                <h2 className="text-2xl font-bold mt-4 text-blue-900">{card.title}</h2>
                <p className="text-lg font-medium text-gray-700 mt-2 mb-4 text-center px-2">{card.description}</p>
                <button
                  className="mt-4 bg-white text-indigo-700 w-full px-6 py-3 rounded font-bold text-lg transition transform hover:scale-105 hover:bg-indigo-50"
                  onClick={() => handleFlip(index)}
                >
                  View Details
                </button>
              </div>

              <div className="card-back bg-gradient-to-br from-green-400 via-blue-300 to-indigo-500 text-white rounded-lg p-6 flex flex-col items-center">
                <h2 className="text-3xl font-bold mb-4">Event Details</h2>
                <ul className="text-lg list-disc pl-6 space-y-2 text-left w-full">
                  {eventDetails[index].details.map((detail, i) => (
                    <li key={i} className="flex items-center">
                      <span className="mr-2">⭐</span>{detail}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/registration"
                  className="mt-8 bg-white text-indigo-700 w-full px-6 py-3 rounded font-bold text-lg transition transform hover:scale-105 hover:bg-indigo-50 text-center"
                >
                  Register
                </Link>
                <button
                  className="mt-4 bg-white text-indigo-700 w-full px-6 py-3 rounded font-bold text-lg transition transform hover:scale-105 hover:bg-indigo-50"
                  onClick={() => handleFlip(index)}
                >
                  Back
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-xl text-gray-600">No events found for {filter}.</p>
        )}
      </div>
    </div>
  );
};

export default Event;
