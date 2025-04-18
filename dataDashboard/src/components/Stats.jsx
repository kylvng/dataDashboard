import React, { useState, useEffect } from 'react';

function Stats({ videos, getCategoryName }) {
    const [averageViews, setAverageViews] = useState(0);
    const [averageLikes, setAverageLikes] = useState(0);
    const [mostPopularGenre, setMostPopularGenre] = useState('');
    const [mostWellPerformingVideo, setMostWellPerformingVideo] = useState(null);

    useEffect(() => {
        if (videos.length > 0) {
            const totalViews = videos.reduce((acc, video) => acc + parseInt(video.statistics.viewCount), 0);
            const averageViews = Math.round(totalViews / videos.length);
            setAverageViews(averageViews);

            const totalLikes = videos.reduce((acc, video) => acc + parseInt(video.statistics.likeCount), 0);
            const averageLikes = Math.round(totalLikes / videos.length);
            setAverageLikes(averageLikes);

            const genreCounts = {};
            videos.forEach(video => {
                const genreId = video.snippet.categoryId;
                genreCounts[genreId] = (genreCounts[genreId] || 0) + 1;
            });
            const mostPopularGenreId = Object.keys(genreCounts).reduce((a, b) => genreCounts[a] > genreCounts[b] ? a : b);
            setMostPopularGenre(getCategoryName(mostPopularGenreId));

            const calculateScore = (video) => {
                const views = parseInt(video.statistics.viewCount);
                const likes = parseInt(video.statistics.likeCount);
                const comments = parseInt(video.statistics.commentCount);
                const likesPerView = likes / views;
                const commentsPerView = comments / views;
                return views + (likesPerView * 100) + (commentsPerView * 100);
            };

            const sortedVideos = [...videos].sort((a, b) => calculateScore(b) - calculateScore(a));

            setMostWellPerformingVideo(sortedVideos[0]);
        }
    }, [videos]);

    return (
        <div className="stats">
            {mostWellPerformingVideo && mostWellPerformingVideo.snippet && (
                <div className="performance-card">
                    <h2>Best Performing Video</h2>
                    <p>"{mostWellPerformingVideo.snippet.title}"</p>
                    <img src={mostWellPerformingVideo.snippet.thumbnails.default.url} alt={mostWellPerformingVideo.snippet.title} />
                    <p>Views: {mostWellPerformingVideo.statistics.viewCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                    <p>Likes: {mostWellPerformingVideo.statistics.likeCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                    <p>Comments: {mostWellPerformingVideo.statistics.commentCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                </div>
            )}
            <div className="stat-card">
                <h2>Average Views</h2>
                <p>{averageViews.toLocaleString()}</p>
            </div>
            <div className="stat-card">
                <h2>Average Likes</h2>
                <p>{averageLikes.toLocaleString()}</p>
            </div>
            <div className="stat-card">
                <h2>Most Popular Genre</h2>
                <p>{mostPopularGenre}</p>
            </div>
        </div>
    );
}

export default Stats;
