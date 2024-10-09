import React from "react";
import { useState, useEffect } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams, Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";
import { Typography, Box, Stack } from "@mui/material";
import ReactPlayer from "react-player";
import { Videos } from "./";

const VideoDetail = () => {
  const { id } = useParams();
  const [videos, setVideos] = useState(null)
  const [videoDetail, setVideoDetail] = useState(null);

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data) =>
      setVideos(data?.items)
    );
  });

  if (!videoDetail?.snippet) return "Loading...";
  return (
    <Box minHeight={"95vh"}>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="white" variant="h5" fontWeight={"bold"} p={2}>
              {videoDetail?.snippet?.title} 

            </Typography>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ color: "#fff" }} py = {1}px={2}>
              <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
                <Typography color="#fff" variant={{ sm: "subtitle1", md: "h6" }}>
                  {videoDetail?.snippet?.channelTitle}{" "}
                  <CheckCircle sx={{ fontSize: "small", color: "gray", ml: "4px" }} />
                </Typography>
              </Link>
              <Stack gap="20px" direction="row" alignItems="center">
                <Typography direction="row" gap="20px" variant="body1" sx={{ opacity: 0.8 }}>
                  {parseInt(videoDetail?.statistics?.viewCount).toLocaleString()} view{videoDetail?.statistics?.viewCount > 1 ? 's' : ''}
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.8 }}>
                  {parseInt(videoDetail?.statistics?.likeCount).toLocaleString()} like{videoDetail?.statistics?.likeCount > 1 ? 's' : ''}
                </Typography>
              </Stack>
            </Stack>  
          </Box>
        </Box>
      </Stack>
      <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center">
        <Videos videos={videos} direction="column" />
      </Box>
    </Box>
  );
};

export default VideoDetail;
