import React, { useEffect, useState } from "react";
import "./App.css";
import { Link, useParams } from "react-router-dom";
import TheLatest from "./TheLatest";
import TopPostHome from "./TopPostHome";

import LatestArticle from "./LatestArticle";
import LatestStories from "./LatestStories";
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
          console.log("DAta=3", data3);
        });
      });
  }, [params]);
  if (loaded1 && loaded2 && loaded3) {

    return (
      <>
        <h1 style={{ padding: "20px" }}>Home</h1>
        <div className="TOPPOST">


          <div className="TOPLEFT">
            <img className="LEFTIMG" src={data1[0].urlToImage} alt="load" onError={() => {
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
              <img className="RIGHTIMG1" src={data1[48].urlToImage} alt="load" />
              <Link to={`/NewPage/${data1[44].title}`} state={data1[45]}>
                <p className="para3">{data1[45].title}</p>
              </Link>
            </div>
          </div>

        </div>
        <h1 style={{ paddingLeft: "10px", margin: "0px", width: "200px" }}>The Latest</h1>
        <hr className="Shortline"></hr>
        <TheLatest props={{ data1, data2, data3 }} />
        <div className="sk">
        
          <div className="hometop">

            <div style={{ display: "flex", flexDirection: "column" }}>
            <div className="mini">
            <h1 style={{ marginBottom: "10px" ,width:"400px"}}> Latest Articles </h1>
            <hr className="Shortline" style={{ marginLeft: "0px" }} />
          </div>
              <LatestArticle props={{ data1, data2, data3 }} />
              <img className="thumbnail1 single" src={data3[12].urlToImage} alt="load" />
              <img className="thumbnail1 single hide" src={data3[15].urlToImage} alt="load" />
            </div>
       
            <div >
            <div>
            <h1 className="topHome" style={{ textTransform: "capitalize" }}>Top Post
        
        <hr className="Shortline" />
        </h1>
            </div>
              <TopPostHome props={{ data1, data2, data3 }} />
            </div>
          </div>
          <h1 style={{ paddingLeft: "10px", margin: "0px" }}>Latest Stories</h1>
          <hr className="Shortline"></hr>
          <LatestStories props={{ data1, data2, data3 }} />
        </div>
      </>
    );
  }

}
export default Home;
