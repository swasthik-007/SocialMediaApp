import axios from 'axios';
import console from 'console';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function useUserProfile(){
    const [user,setUser] =useState({});
    const [loading,setLoading]=useState(true);
    const {userId}=useParams();
    useEffect(()=>{
        axios.get(`https://dummyapi.io/data/v1/user/${userId}`,{
          headers:{
            'app-id':import.meta.env.VITE_APP_ID
          }
        })
        .then((response)=>{
          setUser({...response.data});
          setLoading(false);
        })
      },[]);

      return [user,loading];
}