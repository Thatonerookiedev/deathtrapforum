// @ts-nocheck
'use client'
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { InfoContext } from "@/wrappers/submitpostWrapper";
import { error } from "console";



const Comment = ({item,position,canreplyprop}) => {

    const {submitPost2} = useContext(InfoContext)


    const [backendcomments,setbackendcomments] = useState([])

    const rootcomments = backendcomments.filter((comment=> comment.parentId === item._id))

    useEffect(()=>{

        async function getComments(){
            const comments = await axios.post('/api/getcomments',{})

            setbackendcomments(comments.data.response)
        }

        getComments()

    },[backendcomments])

    const newPosition = position + 5

    useEffect(()=>{
        // this works :)
        if(newPosition >= 53){
            console.log(item,'item')
        }
    },[])

    const [reply,setreply] = useState(false)

    const [loading,setloading] = useState(false)

    const [replymessgae,setreplymessgae] = useState('')
  
    async function messagesend(){
        setloading(true)

        console.log(item._id)

        await submitPost2(item._id,replymessgae).then((data)=>{
            console.log(data)
        })


        setTimeout(()=>{
            setreply(false)
            setreplymessgae('')
            setloading(false)
        },3000)
    }

    const [canreply,setcanreply] = useState(true)


    return ( 
        <>
            <div key={item._id} 
                style={{transform: `translateX(${position + 5}px)`}}
            className="rootcomment">
                <h6 className="anon">Anonymous</h6>
                <p className="anon2">Created at {item.createdAt}</p>
                <p className="bodycomment1">{item.body}</p>
                {
                    item.image ? <>
                        <img src={item.image} alt="" style={{width: '100%',height: '10rem'}} />
                    </>
                    : <></>
                }
                <div className="replydiv">
                   {
                    canreplyprop ? <>
                         <p className="replytrext"
                        onClick={()=>{setreply(true)}}
                        >Reply?</p>
                    </> : <></>
                   }
                    {
                        !reply ? <></> : <>

                        <input type="text" 
                        value={replymessgae}
                        className="replymessage" 
                        onChange={(e)=>{setreplymessgae(e.target.value)}}
                        maxLength={50}
                        />
                        <br />
                        
                        <button 
                        onClick={()=>{messagesend()}}
                        className="setaxiosreply"
                        >{loading ? 'loading..' : 'send?'}</button>

                        </>
                    }
                </div>
            </div>
            {
                    rootcomments.map((item1)=>{
                        return(
                            <>
                                    {
                                        newPosition >= 53 ? <>
                                            <Comment item={item1} position={newPosition + 15} canreplyprop={false}/>
                                        </> : <>
                                            <Comment item={item1} position={newPosition + 15} canreplyprop={true}/>
                                        </>
                                    }
                            </>
                        )
                    })
                }
        
        </>
     );
}
 






const CommentsMain = () => {
    const [backendcomments,setbackendcomments] = useState([])
    const {submitPost} = useContext(InfoContext)

    const rootcomments = backendcomments.filter((comment=> comment.parentId === null));



    useEffect(()=>{

        async function getComments(){
            const comments = await axios.post('/api/getcomments',{})

            setbackendcomments(comments.data.response)
        }

        getComments()

    },[backendcomments])


    const [position,setPositon] = useState(0)


    return ( 
        <>

        <div className="containercomments1">
          <h4 className="commentlabel">Comments</h4>
          {
            rootcomments.map((item)=>{
                return(
                    <>
                        <span key={item.id} className="hi">
                            <Comment position={position + 5} item={item} canreplyprop={true}/>
                        </span>
                    </>
                )
            })
          }
        </div>
        
        </>
     );
}
 
export default CommentsMain;












