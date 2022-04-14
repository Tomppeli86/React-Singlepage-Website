import * as React from 'react';
import { Outlet, Link } from "react-router-dom";


export default function Pictures() {


  return (

    <div>
             <p class="pictxt">Picture,
         <br></br>Picture,<br></br>
         Picture.</p>
        <Link to="/Koti" class="infotxt3">
          <img src="/kuvat/testikuva3.png" className="bigpic"
            />     
        </Link>
       
    </div>

  );
}
