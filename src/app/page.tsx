'use client'
import CommentsMain from "@/components/Commentspage";
import UserPostTemplate from "@/components/UserPostTemplate";
import InfoWrapper from "@/wrappers/submitpostWrapper";
import { useEffect } from "react";



export default function Home() {

  return (
   <>
      <h1 className="welcome">Epsichraun's Redeemer Universe Forums</h1>
      <InfoWrapper>
        <UserPostTemplate/>
        <CommentsMain/>
      </InfoWrapper>
   </>
  )
}
