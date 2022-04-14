import * as React from 'react';
import { Outlet, Link } from "react-router-dom";

export default function Koti() {
  return (
    
    <div>
      <img src="/kuvat/testikuva3.png" className="bigpic2" />
      <main class="boxtxt">
      <p class="infotxt">This is our home.</p>
          <div class="txtbackround">
            
            <p class="infotxt2">Write here. <br></br> And here comes more text.</p>
            <p class="infotxt2">Write more here. asdasd
          this like this like this like this but no 
          more than this and this and this or
          you will break box this this this this.
          </p></div>
          
             
          <div>


            <Link to="/Pictures3" class="infotxt3">Picture.
            </Link>
            
          </div>
        

      </main>
        
    </div>
  );
}
