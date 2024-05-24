import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const main = () => {

    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(Context);
  return (
    <div className='main'>
        <div className='Nav'>
            <p>EUREKA-AI</p>
            <img src={assets.avatar} alt=""/>
        </div>
        <div className="main-container">

            {!showResult?(
            <>
            <div className="greet">
                <p><span>Hello,User</span></p>
                <p className='para'>How can I help you Today</p>
            </div>
            <div className="cards ">
                <div className="card type1">
                    <p>
                    suggest some good places to visit</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>
                    Briefly summarize this concept </p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>
                    want some BrainStorming </p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>
                    Improve your code readability </p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
            </> 
            ):(
                <div className="result">
                <div className="result-title">
                    <img src={assets.avatar} style={{height:"50px",width:"50px",borderRadius:"50%"}}alt="" />
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                   
                    {loading 
                    ? <div className="cube-loader">
                    <div className="cube-top"></div>
                    <div className="cube-wrapper">
                      <span style={{ '--i': 0 }} className="cube-span"></span>
                      <span style={{ '--i': 1 }} className="cube-span"></span>
                      <span style={{ '--i': 2 }} className="cube-span"></span>
                      <span style={{ '--i': 3 }} className="cube-span"></span>
                    </div>
                  </div>
                   :    
                   
                //    <img src={assets.gemini_icon} style={{height:"30px",width:"30px"}} alt="" />
                        <p dangerouslySetInnerHTML={{ __html: resultData }}></p>}
                </div>
            </div>
        )}

            
            <div className="main-bottom">
                
                <div className="search-box">
						<input
							onChange={(e) => {
								setInput(e.target.value);
							}}
							value={input}
							type="text"
							placeholder="Enter the Prompt Here"
						/>
						<div>
							<img src={assets.gallery_icon} alt="" />
							<img src={assets.mic_icon} alt="" />
							{input?<img onClick={() => {onSent()}} src={assets.send_icon} alt=""/>:null}
						
						</div>
                    </div>
                <p className="bottom-info">
                    Ai can display inaccurate info about people,so double check the responses
                </p>
            </div>
        </div>
        
    </div>
  )
}

export default main