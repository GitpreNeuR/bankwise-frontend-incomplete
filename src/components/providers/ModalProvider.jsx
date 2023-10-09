
import React,{useEffect,useState} from 'react'
import CardModal from '../modal/CardModal';
import RdModal from '../modal/RdModal';
import FdModal from '../modal/FdModal';

export function CardModalProvider() {
    const [mounted,setMounted]=useState(false);
  useEffect(()=>{
    setMounted(true);
  },[]);

  if(!mounted){
    return null;
  }
  return (
<>
<CardModal/></>
  )
}


export function FdModalProvider() {
  const [mounted,setMounted]=useState(false);
useEffect(()=>{
  setMounted(true);
},[]);

if(!mounted){
  return null;
}
return (
<>
<FdModal/></>
)
}

export function RdModalProvider() {
  const [mounted,setMounted]=useState(false);
useEffect(()=>{
  setMounted(true);
},[]);

if(!mounted){
  return null;
}
return (
<>
<RdModal/></>
)
}