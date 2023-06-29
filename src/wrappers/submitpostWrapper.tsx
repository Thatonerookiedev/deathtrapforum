'use client'
import { createContext,useState } from "react";
import axios from "axios";


export const InfoContext = createContext<any>({})

const InfoWrapper = ({children})=>{

    function handleKeyDown(e) {
        e.target.style.height = 'inherit';
        e.target.style.height = `${e.target.scrollHeight}px`; 
        // In case you have a limitation
        // e.target.style.height = `${Math.min(e.target.scrollHeight, limit)}px`;
    }

    const [postImage, setPostImage] = useState<any>("")

  

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    console.log(base64)
    setPostImage( base64 )
  }

  function convertToBase64(file:any){
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result)
      };
      fileReader.onerror = (error) => {
        reject(error)
      }
    })
  }

  const [message,setmessage] = useState("")
  const [loading,setloading] = useState(false)

    async function submitPost(){
        if(message === ''){
          return
        }
        setmessage("")

        const response = await axios.post('/api/CreateUserPost',{
          body: message,
          parentId: null,
          image: postImage
        })

        console.log(response)



        setTimeout(()=>{
          setopen('4.5rem')
          setloading(false)
        },2000)
    }
    const [open,setopen] = useState('4.5rem')

    async function submitPost2(id,message){
      if(message === ''){
        return
      }
      setmessage("")

      const response = await axios.post('/api/CreateUserPost',{
        body: message,
        parentId: id,
        image: ''
      })

      console.log(response)



      setTimeout(()=>{
        setopen('4.5rem')
        setloading(false)
      },2000)
  }

    return(
        <>
            <InfoContext.Provider value={{submitPost,message,setmessage,convertToBase64,handleFileUpload,postImage,setPostImage,handleKeyDown,open,setopen,loading,setloading,submitPost2}}>
                {children}
            </InfoContext.Provider>
        </>
    )
}



export default InfoWrapper;


