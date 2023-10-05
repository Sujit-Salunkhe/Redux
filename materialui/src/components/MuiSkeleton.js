import { Skeleton, Stack,Box,Avatar,Typography } from '@mui/material'
import {useState,useEffect} from 'react'

const MuiSkeleton = () => {
    const [loading,setLoading] = useState(true)
    useEffect (()=>{
        setTimeout(() => {
            setLoading(false)
        },3000)
    },[])
  return (
    <Box sx={{width :'250px'}}>
        { loading ? (
                <Skeleton variant='rectangular' width={245} height={144} animation='wave'/>
            ) : <img src='https://images.unsplash.com/photo-1619921845646-6216752a036c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFycmF5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' alt='skelton' width={245} height={144}/>
        }
        <Stack direction={'row'} spacing={1} sx={{width:'100%' ,marginTop:'12px'}}>
            {
                loading ? (
                    <Skeleton varient ='circular' width={40} height={40} animation='wave'/>):
                    (
                        <Avatar>V</Avatar>
                    )
                
            }
        <Stack sx={{width: '80%'}}>
        {    loading ? (
                <>
                <Typography variant='body1'>
                    <Skeleton variant='text' animation = 'wave' width={'100%'}/>
                </Typography>
                <Typography variant='body2'>
                    <Skeleton variant='text' animation = 'wave' width={'100%'}/>
                </Typography>
                </>
            ) :(
                <>
                <Typography varient='body1'>
                    Sujit is king
                </Typography>
                </>
            )
            }
        </Stack>
        </Stack>
        
    </Box>
  )
}

export default MuiSkeleton
