// VideoDetailPage component
import React from 'react';
import { useParams } from 'react-router-dom';

function VideoDetailPage({ videos }) {
    const { videoId } = useParams();

    // Find the video with the matching ID
    const video = videos.find(video => video.id === videoId);

    if (!video) {
        return <div>Video not found</div>;
    }

    return (
        <div className="video-detail-page">
            <h2>{video.snippet.title}</h2>
            <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
            <p>Description: {video.snippet.description}</p>
            <p>Views: {video.statistics.viewCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
            <p>Likes: {video.statistics.likeCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
            <p>Comments: {video.statistics.commentCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
        </div>
    );
}

export default VideoDetailPage;
