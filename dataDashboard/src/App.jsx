import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Stats from './components/Stats';
import VideoList from './components/VideoList';
import SearchBar from './components/SearchBar';
import Filters from './components/Filters';
import youtubeLogo from './images/youtube.png'
import './App.css';

const API_KEY = import.meta.env.VITE_APP_API_KEY;

function App() {
    const [videos, setVideos] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [filteredVideos, setFilteredVideos] = useState([]);
    const [maxResults, setMaxResults] = useState(5); 
    const [selectedGenre, setSelectedGenre] = useState(''); 
    const [sortBy, setSortBy] = useState('mostViewed'); 


    useEffect(() => {
      const fetchVideos = async () => {
          try {
              const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
                  params: {
                      part: 'snippet,statistics',
                      chart: 'mostPopular',
                      maxResults: maxResults, // Use maxResults from state
                      key: API_KEY
                  }
              });
              setVideos(response.data.items);
              setFilteredVideos(response.data.items);
          } catch (error) {
              console.error('Error fetching videos:', error);
          }
      };

      fetchVideos();
  }, [maxResults]); 


  useEffect(() => {
    // Sorting logic
    const sortVideos = () => {
        const sortedVideos = [...filteredVideos].sort((a, b) => {
            if (sortBy === 'mostViewed') {
                return parseInt(b.statistics.viewCount) - parseInt(a.statistics.viewCount);
            } else if (sortBy === 'leastViewed') {
                return parseInt(a.statistics.viewCount) - parseInt(b.statistics.viewCount);
            }
            return 0;
        });
        setFilteredVideos(sortedVideos);
    };

    sortVideos(); // Call the sorting function initially
}, [filteredVideos, sortBy]); // Trigger sorting when filteredVideos or sortBy change




  useEffect(() => {
    let filteredResults = videos;

    // Filter by selected 
    if (selectedGenre) {
        filteredResults = filteredResults.filter(video => video.snippet.categoryId === selectedGenre);
    }

    // Filter by search input
    if (searchInput) {
        const searchTerm = searchInput.toLowerCase();
        filteredResults = filteredResults.filter(video => {
            const title = video.snippet.title.toLowerCase();
            const channel = video.snippet.channelTitle.toLowerCase();
            return title.includes(searchTerm) || channel.includes(searchTerm);
        });
    }

    setFilteredVideos(filteredResults);
  }, [selectedGenre, searchInput, videos]);


  const handleSortChange = () => {
    setSortBy(prevSortBy => prevSortBy === "mostViewed" ? "leastViewed" : "mostViewed");
};

  // Handle slider change
  const handleSliderChange = event => {
      setMaxResults(parseInt(event.target.value));
  };

  // Handle genre select change
  const handleGenreChange = event => {
      setSelectedGenre(event.target.value);
  };
    function getCategoryName(categoryId) {
        switch (categoryId) {
            case '1':
                return 'Film & Animation';
            case '2':
                return 'Autos & Vehicles';
            case '10':
                return 'Music';
            case '15':
                return 'Pets & Animals';
            case '17':
                return 'Sports';
            case '18':
                return 'Short Movies';
            case '19':
                return 'Travel & Events';
            case '20':
                return 'Gaming';
            case '21':
                return 'Videoblogging';
            case '22':
                return 'People & Blogs';
            case '23':
                return 'Comedy';
            case '24':
                return 'Entertainment';
            case '25':
                return 'News & Politics';
            case '26':
                return 'Howto & Style';
            case '27':
                return 'Education';
            case '28':
                return 'Science & Technology';
            case '29':
                return 'Nonprofits & Activism';
            case '30':
                return 'Movies';
            case '31':
                return 'Anime/Animation';
            case '32':
                return 'Action/Adventure';
            case '33':
                return 'Classics';
            case '34':
                return 'Comedy';
            case '35':
                return 'Documentary';
            case '36':
                return 'Drama';
            case '37':
                return 'Family';
            case '38':
                return 'Foreign';
            case '39':
                return 'Horror';
            case '40':
                return 'Sci-Fi/Fantasy';
            case '41':
                return 'Thriller';
            case '42':
                return 'Shorts';
            case '43':
                return 'Shows';
            case '44':
                return 'Trailers';
            default:
                return 'Unknown';
        }
    }
    const toggleSort = () => {
      setSortBy(prevSortBy => prevSortBy === "mostViewed" ? "leastViewed" : "mostViewed");
  };


    return (
      <div className="whole-page">
          <div className='title-container'>
             <h1>YouTube's Top Hits</h1>
          </div>
          <Stats videos={videos} getCategoryName={getCategoryName}/>
          <SearchBar searchValue={searchInput} setSearchValue={setSearchInput} />
          <Filters
              maxResults={maxResults}
              selectedGenre={selectedGenre}
              sortBy={sortBy}
              handleSliderChange={handleSliderChange}
              handleGenreChange={handleGenreChange}
              handleSortChange={handleSortChange}
              filteredVideos={filteredVideos}
              toggleSort={toggleSort}
          />
          <VideoList videos={filteredVideos} getCategoryName={getCategoryName} />
      </div>
  );
}

export default App;
