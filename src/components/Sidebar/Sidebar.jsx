import React, { useContext, useState } from 'react';
import './Sidebar.css';
import { assets } from '../../assets/assets.js';
import { Context } from '../../context/Context.jsx';



const Sidebar = () => {


    const [expanded,setExpanded]=useState(true);
    const {onSent,prevPrompts,setRecentPrompt,newChat}=useContext(Context)
    const loadPrompt=async (prompt)=>{
      setRecentPrompt(prompt)
      await onSent(prompt)
    }
    
  return (
    
    <div className={`Sidebar ${expanded ? 'expanded' : 'collapsed'}`}>
      <div className='top' > 
      
        <div  className="container" >  
          <input className="label-check" id="label-check" type="checkbox"/>
          <label htmlFor="label-check" className="hamburger-label">
            <div onClick={()=>setExpanded(prev=>!prev)} className="line1"></div>
            <div onClick={()=>setExpanded(prev=>!prev)} className="line2"></div>
            <div   onClick={()=>setExpanded(prev=>!prev)} className="line3"></div> 
            
          </label>
        </div>
       
        {expanded ?
                    <div className='new-chat' onClick={()=>newChat()}>
                        <img className="plus-icon" src={assets.plus_icon} style={{ filter: 'invert(1)' }} alt="" />
                        <p>New Chat</p>
                    </div>:null}
        {expanded ?
        
        <div className="recent">
          <p className="recent-title">Recent</p>
          {prevPrompts.map((items,index)=>{
              return (
                <div onClick={()=>loadPrompt(items)} className="recent-entry">
                <img src={assets.message_icon} alt="" style={{ filter: 'invert(1)' }} />
      
                  <p>{items.slice(0,18)}...</p>
                </div>
              )
          })}
        
        </div> :null
      }    
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" style={{ filter: 'invert(1)' }}/>
          {expanded ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" style={{ filter: 'invert(1)' }}/>
          {expanded ? <p>activity</p>: null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" style={{ filter: 'invert(1)' }} />
          {expanded ?<p>settings</p> : null}
        </div>  
      </div>
    </div>
  );
};


export default Sidebar;
