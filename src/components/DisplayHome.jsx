import React, { useState, useContext } from 'react';
import { albumsData, songsData } from '../assets/assets';
import AlbumItem from './AlbumItem';
import { PlayerContext } from '../context/PlayerContext';
import { FaSearch } from 'react-icons/fa'; // Import search icon
import Navbar from "../components/Navbar"

const DisplayHome = () => {
  const [search, setSearch] = useState(''); // State for search input
  const { playWithId } = useContext(PlayerContext); // Access the PlayerContext to play songs

  // Filter songs based on the search input
  const filteredSongs = songsData.filter(song =>
    song.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
<Navbar/>
      {/* Search Bar */}
      <div className="mt-3 mb-4 flex items-center bg-black rounded p-2">
        <FaSearch className="text-white-500 mx-2" /> {/* Search Icon */}
        <input
          type="text"
          placeholder="Search songs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 bg-black text-white w-full focus:outline-none"
        />
      </div>

  
      {/* Search Results (Songs) */}
      {search && (
        <div className="mb-4">
          <h1 className="my-5 font-bold text-2xl">Search Results</h1>
          <div className="flex flex-col gap-2">
            {filteredSongs.length > 0 ? (
              filteredSongs.map((item, index) => (
                <div 
                  key={index} 
                  onClick={() => playWithId(item.id)} // Play song when clicked
                  className="p-2 cursor-pointer hover:bg-[#ffffff26] rounded transition duration-200 flex items-center gap-3"
                >
                  <img className="w-12 h-12 rounded" src={item.image} alt={item.name} />
                  <p className="text-white">{item.name}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-400">No songs found</p>
            )}
          </div>
        </div>
      )}

          {/* Featured Charts (Albums) */}
          <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((item, index) => (
            <AlbumItem key={index} {...item} />
          ))}
        </div>
      </div>


      {/* Today's Biggest Hits (Songs) */}
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Today's biggest hits</h1>
        <div className="flex overflow-auto">
          {songsData.map((item, index) => (
            <AlbumItem key={index} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;



