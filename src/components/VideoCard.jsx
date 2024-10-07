import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia} from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants'

const VideoCard = ({video : {id : {videoId}, snippet}}) => {

  return (
    <Card sx={{width: '360px', boxShadow: 'none', borderRadius: 0}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} >
            <CardMedia
            image={snippet?.thumbnails?.high?.url }
            alt={snippet?.title}
            sx={{width: 360,  height: 222}}
            />
        </Link>
        <CardContent sx={{backgroundColor: '#000', height: '106px'}}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <Typography variant='subtitle1' color='white'>
                    {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                </Typography>
            </Link>
            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                <Typography variant='subtitle2' color='#808080' word-wrap='break-word'>
                    {snippet?.channelTitle || demoChannelTitle}
                    <CheckCircle sx={{fontSize: 12, color: '#808080', ml: '5px'}}>

                    </CheckCircle>
                </Typography>
            </Link>
        </CardContent>
    </Card>
  ) 
}
    
export default VideoCard