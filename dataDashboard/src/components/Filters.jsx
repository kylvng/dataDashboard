// Filters.jsx
import React from 'react';

function Filters({ maxResults, selectedGenre, sortBy, handleSliderChange, handleGenreChange, toggleSort, filteredVideos }) {
    const handleSortToggle = () => {
        toggleSort(sortBy === 'mostViewed' ? 'leastViewed' : 'mostViewed');
    };

    return (
        <div className="filters">
            <label htmlFor="maxResults">Max Results:</label>
            <input
                type="range"
                id="maxResults"
                name="maxResults"
                min="5"
                max="30"
                value={maxResults}
                onChange={handleSliderChange}
            />

            <label htmlFor="genre">Select Genre:</label>
            <select id="genre" value={selectedGenre} onChange={handleGenreChange}>
                <option value="">All Genres</option>
                <option value="1">Film & Animation</option>
                <option value="2">Autos & Vehicles</option>
                <option value="10">Music</option>
                <option value="15">Pets & Animals</option>
                <option value="17">Sports</option>
                <option value="18">Short Movies</option>
                <option value="19">Travel & Events</option>
                <option value="20">Gaming</option>
                <option value="21">Videoblogging</option>
                <option value="22">People & Blogs</option>
                <option value="23">Comedy</option>
                <option value="24">Entertainment</option>
                <option value="25">News & Politics</option>
                <option value="26">Howto & Style</option>
                <option value="27">Education</option>
                <option value="28">Science & Technology</option>
                <option value="29">Nonprofits & Activism</option>
                <option value="30">Movies</option>
                <option value="31">Anime/Animation</option>
                <option value="32">Action/Adventure</option>
                <option value="33">Classics</option>
                <option value="34">Comedy</option>
                <option value="35">Documentary</option>
                <option value="36">Drama</option>
                <option value="37">Family</option>
                <option value="38">Foreign</option>
                <option value="39">Horror</option>
                <option value="40">Sci-Fi/Fantasy</option>
                <option value="41">Thriller</option>
                <option value="42">Shorts</option>
                <option value="43">Shows</option>
                <option value="44">Trailers</option>
            </select>

            <label htmlFor="sort">Sort By:</label>
            <button id="sort" onClick={handleSortToggle}>
                {sortBy === "mostViewed" ? "Most Viewed" : "Least Viewed"}
            </button>

            <p>{`Displaying ${filteredVideos.length} channels`}</p>
        </div>
    );
}

export default Filters;
