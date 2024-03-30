import React from 'react';

function formatDate(dateString) {
    const options = { 
        month: 'numeric', 
        day: 'numeric', 
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

function VideoList({ videos, getCategoryName }) {
    return (
        <div className='list'>
            <div className="headers">
                <p>Date & Time Published</p>
                <p>Title</p>
                <p>Channel</p>
                <p>Genre</p>
            </div>
            <div className="videos">
                {videos.map(video => (
                    <div key={video.id} className="video-item">
                        <p>{formatDate(video.snippet.publishedAt)}</p>
                        <p>{video.snippet.title}</p>
                        <p>{video.snippet.channelTitle}</p>
                        <p>{getCategoryName(video.snippet.categoryId)}</p>
                        <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default VideoList;
