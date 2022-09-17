import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Styled from "styled-components";
import Loader from "../assets/loader.gif";
import "react-toastify/dist/ReactToastify.css"
import axios from 'axios';
import { setavatar } from "../Utils/Apiroutes";
import male from "../assets/male.png"
import female from "../assets/female.png"
import { Buffer } from 'buffer';

const Setavatar = () => {
  const api = 'https://api.multiavatar.com/45678945';
  const navigate = useNavigate();
  const [avatars,setAvatars] = useState([])
  const [loading, setloading] = useState(true)
  const [selectedavatar, setselectedavatar] = useState(undefined)
  const toastoptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark"
  }
  const setprofilepicture = async () => {

  }

  useEffect(()=>{
    async function fetchdata(){
      const data = [];
      for(let i=0;i<4;i++){
        const image = await axios.get(`${api}/${Math.round(Math.random()**1000)}`);
        const buffer = new Buffer(image.data)
        data.push(buffer.toString("base64"))
      }
      setAvatars(data)
      setloading(false)
    }
    fetchdata()
  },[])
  return (
    <>
      <Container>
        <div className='title-container'>
          <h1>Pick an avatar as your profile picture</h1>
        </div>
         <div className='avatars'>
            {
              avatars.map((avatar,idx)=>{
                  return (
                    <div key={idx} className={`avatar ${selectedavatar === idx ? "selected" : ""}`}>
                      <img src={`data:image/svg+xml;base64,${avatar}`} alt="avatar" onClick={()=>setselectedavatar(idx)}/>
                    </div>
                  )
              })
            }
         </div>
         <button className='submit-btn' onClick={setprofilepicture}>Set as profile Picture</button>
      </Container>
      <ToastContainer />
    </>
  )
}



const Container = Styled.div`
display : flex;
justify-content : center;
align-items : center;
flex-direction : column;
gap : 3rem;
background-color : #131324;
height : 100vh;
width : 100vw;
.loader{
  max-inline-size : 100%;
};
.title-container{
     h1{
        color : white;
      };
    }
  .avatars{
    display : flex;
    gap : 2rem;
    .avatar{
      border : 0.4rem solid transparent;
      padding : o.4rem;
      border-radius : 5rem;
      display : flex ;
      justify-content : center;
      align-items : center;
      transition : 0.5s ease-in-out
      img {
        height : 6rem;
        border-radius : 5rem;
      }
    }
  };
  .selected {
    border : 0.4rem solid #40eff;
  }
.submit-btn{
  background-color : #997af0;
  color : white;
  padding : 1rem 2rem;
  border : none;
  font-weight : bold;
  cursor : pointer;
  border-radius : 0.4rem;
  font-size : 1rem;
  text-transform : uppercase;
  transtion : 0.5s ease-in-out;
  &:hover{
    background-color : #4e0eff;
  }
}
}

`;



export default Setavatar
