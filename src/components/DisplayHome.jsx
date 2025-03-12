// //import React from 'react'
// import Navbar from './NavBar'
// import { albumsData, songsData } from '../assets/assets'
// import AlbumItem from './AlbumItem'

// const DisplayHome = () => {
//   const [search, setSearch] = useState(''); // State to store search input

//   // Filter albums based on search query
//   const filteredAlbums = albumsData.filter(album =>
//     album.name.toLowerCase().includes(search.toLowerCase())
//   );

//   // Filter songs based on search query
//   const filteredSongs = songsData.filter(song =>
//     song.name.toLowerCase().includes(search.toLowerCase())
//   );
//   return (
//     <>
//     <Navbar/> 
//     <div className='mb-4'>
//         <h1 className='my-5 font-bold text-2xl'>Featured Charts </h1>
//         <div className='flex overflow-auto'>
//      {albumsData.map((item,index)=>(<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))} 
//     </div>
//     </div>

//     <div className='mb-4'>
//         <h1 className='my-5 font-bold text-2xl'>Today's biggest hits</h1>
//         <div className='flex overflow-auto'>
//      {songsData.map((item,index)=>(<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))} 
//     </div>
//     </div>
//     </>
//   )
// }

// export default DisplayHome








// import React, { useState, useContext } from 'react';
// import Navbar from './NavBar';
// import { albumsData, songsData } from '../assets/assets';
// import AlbumItem from './AlbumItem';
// import { PlayerContext } from '../context/PlayerContext';

// const DisplayHome = () => {
//   const [search, setSearch] = useState(''); // State for search input
//   const { playWithId } = useContext(PlayerContext); // Access the PlayerContext to play songs

//   // Filter songs based on the search input
//   const filteredSongs = songsData.filter(song =>
//     song.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <>
//       <Navbar />

//       {/* Search Input */}
//       <div className="mb-4 flex items-center gap-2">
//         <input
//           type="text"
//           placeholder="Search songs..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="p-2 rounded bg-black-400 text-white w-full mt-3"
//         />
//       </div>

//       {/* Featured Charts (Albums) */}
//       <div className="mb-4">
//         <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
//         <div className="flex overflow-auto">
//           {albumsData.map((item, index) => (
//             <AlbumItem key={index} {...item} />
//           ))}
//         </div>
//       </div>

//       {/* Search Results (Songs) */}
//       {search && (
//         <div className="mb-4">
//           <h1 className="my-5 font-bold text-2xl">Search Results</h1>
//           <div className="flex flex-col gap-2">
//             {filteredSongs.length > 0 ? (
//               filteredSongs.map((item, index) => (
//                 <div 
//                   key={index} 
//                   onClick={() => playWithId(item.id)} // Play song when clicked
//                   className="p-2 cursor-pointer hover:bg-[#ffffff26] rounded transition duration-200 flex items-center gap-3"
//                 >
//                   <img className="w-12 h-12 rounded" src={item.image} alt={item.name} />
//                   <p className="text-white">{item.name}</p>
//                 </div>
//               ))
//             ) : (
//               <p className="text-gray-400">No songs found</p>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Today's Biggest Hits (Songs) */}
//       <div className="mb-4">
//         <h1 className="my-5 font-bold text-2xl">Today's biggest hits</h1>
//         <div className="flex overflow-auto">
//           {songsData.map((item, index) => (
//             <AlbumItem key={index} {...item} />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default DisplayHome;




import React, { useState, useContext } from 'react';
import Navbar from './NavBar';
import { albumsData, songsData } from '../assets/assets';
import AlbumItem from './AlbumItem';
import { PlayerContext } from '../context/PlayerContext';
import { FaSearch } from 'react-icons/fa'; // Import search icon

const DisplayHome = () => {
  const [search, setSearch] = useState(''); // State for search input
  const { playWithId } = useContext(PlayerContext); // Access the PlayerContext to play songs

  // Filter songs based on the search input
  const filteredSongs = songsData.filter(song =>
    song.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

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





// import React, { useState, useContext } from 'react';
// import Navbar from './NavBar';
// import { albumsData, songsData } from '../assets/assets';
// import AlbumItem from './AlbumItem';
// import { PlayerContext } from '../context/PlayerContext';
// import { FaSearch, FaPlay } from 'react-icons/fa';

// const DisplayHome = () => {
//   const [search, setSearch] = useState('');
//   const { playWithId } = useContext(PlayerContext);

//   // Filter songs based on the search input
//   const filteredSongs = songsData.filter(song =>
//     song.name.toLowerCase().includes(search.toLowerCase())
//   );

//   // Filter Tamil songs
//   const tamilSongs = songsData.filter(song => song.language === "Tamil");

//   return (
//     <>
//       <Navbar />

//       {/* Search Bar */}
//       <div className="mb-4 flex items-center bg-gray-800 rounded p-2">
//         <FaSearch className="text-gray-400 mx-2" />
//         <input
//           type="text"
//           placeholder="Search songs..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="p-2 bg-gray-800 text-white w-full focus:outline-none"
//         />
//       </div>

//       {/* Featured Charts (Albums) */}
//       <div className="mb-4">
//         <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
//         <div className="flex overflow-auto">
//           {albumsData.map((item, index) => (
//             <AlbumItem key={index} {...item} />
//           ))}
//         </div>
//       </div>

//       {/* Tamil Songs Section */}
//       <div className="mb-4">
//         <h1 className="my-5 font-bold text-2xl">🎵 Tamil Songs</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//           {tamilSongs.length > 0 ? (
//             tamilSongs.map((item, index) => (
//               <div 
//                 key={index} 
//                 onClick={() => playWithId(item.id)}
//                 className="p-2 cursor-pointer hover:bg-[#ffffff26] rounded transition duration-200 flex items-center gap-3 bg-gray-900 p-3 rounded-lg"
//               >
//                 <img className="w-16 h-16 rounded" src={item.image} alt={item.name} />
//                 <div className="flex-grow">
//                   <p className="text-white font-bold">{item.name}</p>
//                   <p className="text-gray-400 text-sm">{item.desc}</p>
//                 </div>
//                 <FaPlay className="text-white text-lg bg-green-500 p-2 rounded-full" />
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-400">No Tamil songs available</p>
//           )}
//         </div>
//       </div>

//       {/* Search Results (Songs) */}
//       {search && (
//         <div className="mb-4">
//           <h1 className="my-5 font-bold text-2xl">🔍 Search Results</h1>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//             {filteredSongs.length > 0 ? (
//               filteredSongs.map((item, index) => (
//                 <div 
//                   key={index} 
//                   onClick={() => playWithId(item.id)}
//                   className="p-2 cursor-pointer hover:bg-[#ffffff26] rounded transition duration-200 flex items-center gap-3 bg-gray-900 p-3 rounded-lg"
//                 >
//                   <img className="w-16 h-16 rounded" src={item.image} alt={item.name} />
//                   <div className="flex-grow">
//                     <p className="text-white font-bold">{item.name}</p>
//                     <p className="text-gray-400 text-sm">{item.desc}</p>
//                   </div>
//                   <FaPlay className="text-white text-lg bg-green-500 p-2 rounded-full" />
//                 </div>
//               ))
//             ) : (
//               <p className="text-gray-400">No songs found</p>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Today's Biggest Hits (Songs) */}
//       <div className="mb-4">
//         <h1 className="my-5 font-bold text-2xl">🔥 Today's Biggest Hits</h1>
//         <div className="flex overflow-auto">
//           {songsData.map((item, index) => (
//             <AlbumItem key={index} {...item} />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default DisplayHome;
