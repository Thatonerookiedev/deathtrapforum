'use client'

import { useContext, useEffect,useState } from "react";
import axios from "axios";
import { createContext } from "vm";

import { InfoContext } from "@/wrappers/submitpostWrapper";


const Inputs = ()=>{
    const {submitPost,message,setmessage,convertToBase64,handleFileUpload,postImage,setPostImage,handleKeyDown,open,setopen} = useContext(InfoContext)
    return(
        <>
            <textarea
                        onFocus={()=>{setopen('max-content')}}
                        onKeyDown={(e)=>{handleKeyDown(e)}}
                        onChange={(e)=>{setmessage(e.target.value)}}
                        value={message}
                        name="main input"
                        className="mainText" 
                        placeholder="What do you want to say?"
                        maxLength={500}
                    />
                    <div className="imagecontainer">
                        <h6>Image? Click Here!</h6>
                        <input 
                            type="file" 
                            onChange={(e)=>{handleFileUpload(e)}}
                            className="imageinput" 
                            accept="image/png, image/jpeg"
                            src="" 
                            alt="" 
                        />
                    </div>
        </>
    )
}



const UserPostTemplate = () => {

    const {submitPost,message,setmessage,convertToBase64,handleFileUpload,postImage,setPostImage,handleKeyDown,open,setopen,loading,setloading} = useContext(InfoContext)

    //postimage
    return ( 
        <>
            <section style={{
                height: open
            }} className="userpost">
                <Inputs/>
                {
                    postImage === '' ? <></> : <>
                        <div className="Imagepreview">
                            <h6 className="headerpreviewimagepost">
                                Image Preview
                            </h6>
                            <img src={postImage} 
                                className="imagepreview"
                            alt="" 
                            />
                        </div>
                    </>
                }

                <button className="submitpost"
                    onClick={()=>{submitPost(),setloading(true)}}
                >{loading ? 'loading...' : 'Submit'}</button>
            </section>
        </>
     );
}
 
export default UserPostTemplate;












