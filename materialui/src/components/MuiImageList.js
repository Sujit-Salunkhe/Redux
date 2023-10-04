import React from 'react'
import { Stack, ImageList, ImageListItem ,ImageListItemBar} from '@mui/material'
const MuiImageList = () => {
  return (
    <Stack spacing={4}>
      <ImageList sx={{width : 500 , heigth:450}} cols={3} rowHeight={164}>
        {
            unsplashImages.map(item =>(
                <ImageListItem key={item.imageUrl}>
                    <img src={`${item.imgaeUrl}?w=164&h=164&fit=crop&auto=format&dpr=2`} alt={item.title} loading='lazy' />
                </ImageListItem>
            ))
        }
      </ImageList>
    </Stack>
  )
}

const unsplashImages = [
    {
      title: "Sunset Beach",
      imageUrl: " https://images.unsplash.com/photo-1555685811-8b7a8fc01da3",
    },
    {
      title: "Mountain Landscape",
      imageUrl: "https://images.unsplash.com/photo-1521747116042-5a810fda9661",
    },
    {
      title: "City Lights",
      imageUrl: "https://images.unsplash.com/photo-1523437113738-5a810fda9661",
    },
    {
      title: "Nature Beauty",
      imageUrl: "https://images.unsplash.com/photo-1445308394109-4ec2920981b1",
    },
    {
      title: "Urban Exploration",
      imageUrl: "https://images.unsplash.com/photo-1537151693297-44001c7850d3",
    },
  ];
  
  
export default MuiImageList
