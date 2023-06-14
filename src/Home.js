import React, { useEffect, useState } from "react";
import "./App.css";
// import { CircularProgress } from '@mui/material';
import { Link, useParams } from "react-router-dom";
import TopPost from "./TopPost";
import TheLatest from "./TheLatest";
function Home() {

  const params = useParams();

  const [data1, setData1] = useState();
  const [data2, setData2] = useState();
  const [data3, setData3] = useState();
  const [loaded1, setLoaded1] = useState(false);
  const [loaded2, setLoaded2] = useState(false);
  const [loaded3, setLoaded3] = useState(false);

  
  console.log("UseParams returned : ", params);

  useEffect(() => {



    var url1 = "https://blog-project-by-amina.onrender.com/fitness";
    var url2 = "https://blog-project-by-amina.onrender.com/food";
    var url3 = "https://blog-project-by-amina.onrender.com/technology";

  

    var req1 = new Request(url1);
    fetch(req1)
      .then((response) => {
        response.json().then((data1) => {
          setData1(data1);
          setLoaded1(true);
          // console.log(data);
        });
      });

    var req2 = new Request(url2);
    fetch(req2)
      .then((response) => {
        response.json().then((data2) => {
          setData2(data2);
          setLoaded2(true);
        });
      });

    var req3 = new Request(url3);
    fetch(req3)
      .then((response) => {
        response.json().then((data3) => {
          setData3(data3);
          setLoaded3(true);
          console.log("DAta=3",data3);
        });
      });
  }, [params]);
  if (loaded1 && loaded2 &&loaded3) {
    const newLocal = "RIGHTIMG";
    return (
      <>
        <h1>Home</h1>
        <div className="TOPPOST">
         

            <div className="TOPLEFT">
              <img className="LEFTIMG" src={data1[0].urlToImage} alt="load"onError={() => {
                    console.log("Having Error");
                  }} />
              <Link to={`/NewPage/${data1[0].title}`} state={data1[0]}>
                <h3 className="para1">{data1[0].title}</h3>
              </Link>
            </div>

            <div className="RIGHT">

              <div className="TOPRIGHT">
                <img className="RIGHTIMG" src={data1[1].urlToImage} alt="load" />
                <Link to={`/NewPage/${data1[1].title}`} state={data1[1]}>
                <p className="para2">{data1[1].title}</p>
                </Link>
              </div>

              <div className="BOTTOMRIGHT">
                <img  className="RIGHTIMG" src={data1[2].urlToImage} alt="load" />
                <Link to={`/NewPage/${data1[2].title}`} state={data1[2]}>
                <p className="para3">{data1[2].title}</p>
                </Link>
           

            </div>

{/* 
<div className="1" flex>
  <div className="1.1"></div>
  <div className="1.2"flexcolum>
    <div className="2 2"> <img src={data1[2].urlToImage} alt="load" />
                
                <Link to={`/NewPage/${data1[2].title}`} state={data1[2]}></Link>
                <h5>{data1[2].title}</h5>
                </div>
    <div className="2 2"></div>
  </div>
</div> */}
















          {/* </section>

          <section className="LEFT">
            <div className="TOPLEFT">
              <img className="LEFTIMG" src={data1[0].urlToImage} alt="load" />
              <Link to={`/NewPage/${data1[0].title}`} state={data1[0]}>
                <h3>{data1[0].title}</h3>
              </Link>
            </div>
            <section className="RIGHT">
              <div className="TOPRIGHT">
                <img src={data2[0].urlToImage} alt="load" />
                <Link to={`/NewPage/${data2[0].title}`} state={data2[0]}></Link>
                <h5>{data2[0].title}</h5>
              </div>
              <div className="BOTTOMRIGHT">
                <img src={data3[0].urlToImage} alt="load" />
                <Link to={`/NewPage/${data3[0].title}`} state={data3[0]}></Link>
                <h5>{data3[0].title}</h5>
              </div>
            </section>
          </section>

          <section  className="LEFT">
            <div className="TOPLEFT">
              <img className="LEFTIMG" src={data1[0].urlToImage} alt="load" />
              <Link to={`/NewPage/${data1[0].title}`} state={data1[0]}>
                <h3>{data1[0].title}</h3>
              </Link>
            </div>
            <section className="RIGHT">
              <div className="TOPRIGHT">
                <img src={data1[0].urlToImage} alt="load" />
                <Link to={`/NewPage/${data1[0].title}`} state={data1[0]}></Link>
                <h5>{data1[0].title}</h5>
              </div>
              <div className="BOTTOMRIGHT">
                <img src={data1[0].urlToImage} alt="load" />
                <Link to={`/NewPage/${data1[0].title}`} state={data1[0]}></Link>
                <h5>{data1[0].title}</h5>
              </div>
            </section> */}
          </div>
       
        </div>
        <h1 style={{paddingLeft:"10px",margin:"0px"}}>The latest</h1>
        <hr className="Shortline"></hr>
       <TheLatest props={{data1,data2,data3}}/>
      </>
    );
  }
  
}
export default Home;
