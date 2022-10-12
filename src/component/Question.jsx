import React, { useState } from 'react'

import './Question.css'
import {AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai'
export default function Question({title,info}) {
   
    const [showInfo,setShowInfo] = useState(false)


    function toggleAnswer(){
        setShowInfo(!showInfo)
    }
  return (

             <div className='card'>
            <div className="line">
                <div className="question">{title}</div>
                <button className='btn' onClick={()=>toggleAnswer()}>{showInfo?<AiOutlineMinus/>:<AiOutlinePlus/>}</button>
            </div>
            <div className="response">{showInfo && info}</div>
        </div>
        )
}
