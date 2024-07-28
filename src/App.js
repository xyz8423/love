import './App.css';
import React, { useState } from "react";
import bdn1 from './gif/bd-n1.gif'
import bdn2 from './gif/bd-n2.gif'
import bdn3 from './gif/bd-n3.gif'
import bdy1 from './gif/bd-y1.gif'
import bdy2 from './gif/bd-y2.gif'
import heart from './gif/heart.gif'
import bdp from './gif/bd-p.gif'

function App() {

  const [pageState, setpageState] = useState("oo")
  const [message, setmessage] = useState("Anushka, do you hold love for me in your heart? Please say yes and let our journey continue.")

  const clicked = (ans)=>{
    if(pageState==="oo"){
      if(ans==="yes"){
        setpageState("y1")
        setmessage("Thank you, Anushka! Your love means the world to me. Together, we can overcome anything.")
        console.log("Clicked y1 ...")
      }
      if(ans==="no"){
        setpageState("n1")
        setmessage("Please reconsider, Anushka. Without your love, I feel incomplete. Will you say yes and let me show you how much you mean to me?")
        console.log("Clicked n1 ...")
      }

    }else if(pageState==="n1"){

      if(ans==="yes"){
        setpageState("y2")
        setmessage("Thank you, Anushka! Your love and trust mean everything to me. I promise to cherish and honor our relationship always.")
        console.log("Clicked y2 ...")

      }
      if(ans==="no"){
        setpageState("n2")
        setmessage("Anushka. Your love is the light that motivates and guides me. Will you give me another chance to prove my love for you?")
        console.log("Clicked n2 ...")
      }

    }else if(pageState==="n2"){

      if(ans==="yes"){
        setpageState("y2")
        setmessage("Thank you, Anushka! Your love and trust mean everything to me. I promise to cherish and honor our relationship always.")
        console.log("Clicked y2 ...")
      }
      if(ans==="no"){
        setpageState("n3")
        setmessage("Anushka, my heart belongs to you. Please say yes and allow us to rebuild our happiness together?")
        console.log("Clicked n3 ...")
      }

    }else if(pageState==="n3"){

      if(ans==="yes"){
        setpageState("y2")
        setmessage("Thank you, Anushka! Your love and trust mean everything to me. I promise to cherish and honor our relationship always.")
        console.log("Clicked final y2 ...")
      }

    }
  }

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className='col-12 mt-4 text-center lilita-one-regular fonts'>
            <p>
            <span className=''>&nbsp;&nbsp;Harsh&nbsp;</span>
            <img src={heart} width={"100vw"} height={"100vw"} />
            <span>&nbsp;Anushka</span>
            </p>
          </div>
          <div className="col-12 mt-4">
            {pageState==="oo" && <p><img src={bdp} width={300} height={180} /></p>}
            {pageState==="y1" && <p><img src={bdy2} width={280} height={220} /></p>}
            {pageState==="y2" && <p><img src={bdy1} width={280} height={220} /></p>}
            {pageState==="n1" && <p><img src={bdn1} width={280} height={220} /></p>}
            {pageState==="n2" && <p><img src={bdn2} width={280} height={220} /></p>}
            {pageState==="n3" && <p><img src={bdn3} width={280} height={220} /></p>}
          </div>
          <div className='col-12 mt-2'>
            <p style={{fontSize:'20px', color:'red'}} className='lilita-one-regular fonts'>{message}</p>
          </div>
          <div className='col-12'>
              {(pageState==="oo" || pageState==="n1" || pageState==="n2" || pageState==="n3") && 
              <div>
              <button className="button-55" onClick={()=>{clicked("yes")}}>YES "I love you"</button>&nbsp;&nbsp;&nbsp;
              {pageState!=="n3" && <button className="button-55" onClick={()=>{clicked("no")}}>NO</button>}
            </div>}
            {(pageState==="y1" || pageState==="y2" )&& <p style={{fontSize:'20px', color:'green'}} className='lilita-one-regular fonts'>I Love You Too</p>}
          </div>
        </div>
        {pageState==="n3" && <button disabled className="button-55 revolving-button">NO</button>}

      </div>
    </div>
  );
}

export default App;
