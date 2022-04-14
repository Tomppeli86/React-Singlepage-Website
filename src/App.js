import { Outlet, Link } from "react-router-dom";

export default function App() {
  


  return (
    <html lang="en">

      <div>

        <div class="mainsize">
            <nav class="navigation">
              <Link to="/Koti" class="linktxt">Home</Link> {" "}
              <Link to="/Yhteys" class="linktxt2">Connect</Link> {" "}
              <Link to="/Tarina" class="linktxt3">Story </Link>
             
              
            </nav><br></br>

          <div class="box">

              <Outlet/>

          
          </div> 
                  <br></br><br></br>

            <div>
                  <br></br><br></br><br></br>

                <span>
                <a href="#" class="fa fa-twitter"></a>
        
                </span>
                <span>
                <a href="#" class="fa fa-facebook"></a>
                </span>
                <span>
                <a href="#" class="fa fa-instagram"></a>
                </span>
                <span>
                <a href="#" class="fa fa-youtube"></a>
                </span>

            </div>

            <div class="ripples">
              <div class='circle xxlarge shade1'></div>
              <div class='circle xlarge shade2'></div>
              <div class='circle large shade3'></div>
              <div class='circle mediun shade4'></div>
              <div class='circle small shade5'></div>
            </div>

        </div>
      </div>

    </html>
   
  );
}
