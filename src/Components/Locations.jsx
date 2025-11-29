import React from 'react'
import { FaLocationDot } from "react-icons/fa6";

const Locations = () => {
  const locs = [
    {
      id: 1,
      img: <FaLocationDot className="text-2xl text-red-600" />,
      title: 'Mwembe tayari Mombasa',
      description: 'Open from 8am to 10pm, all sessions available',
      contacts: 'Tel: 0763653543'
    },
    {
      id: 2,
      img: <FaLocationDot className="text-2xl text-red-600" />,
      title: 'Bombolulu',
      description: 'Open from 8am to 10pm, all sessions available',
      contacts: 'Tel: 0763653546'
    },
    {
      id: 3,
      img: <FaLocationDot className="text-2xl text-red-600" />,
      title: 'Bamburi',
      description: 'Open from 8am to 10pm, all sessions available',
      contacts: 'Tel: 0763653548'
    }
  ];

  return (
    <div className="mt-8 md:mt-16 lg:mt-24 px-4">
      <h1 className="text-2xl text-center font-semibold mb-6">Our Locations</h1>
      <div className="flex flex-col sm:flex-row gap-4">
        {locs.map((loc) => (
          <div
            key={loc.id}
            className="flex items-start bg-white p-4 rounded shadow-md"
          >
            <div className="mr-3">{loc.img}</div>
            <div>
              <h2 className="text-xl font-bold">{loc.title}</h2>
              <p className="text-sm text-gray-700">{loc.description}</p>
              <p className="text-sm text-gray-700 mt-1">{loc.contacts}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Locations;
