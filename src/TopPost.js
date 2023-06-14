
import React, { useEffect, useState } from "react";
import "./App.css";
import { CircularProgress } from '@mui/material';
import { Link, useParams } from "react-router-dom";

function TopPost() {

  const [data, setData] = useState();
  const [loaded, setLoaded] = useState(false);
  const params = useParams();
  const [count] = useState(4);
  console.log("UseParams returned : ", params);
  const date = new Date();
  const dateString = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
  console.log(dateString);
  // const data =
  // const indexs = [99, 45, 66, 31];
  useEffect(() => {

    // var url = "https://newsapi.org/v2/everything?q=" + params.category + "&from=" + dateString + "&sortBy=publishedAt&apiKey=6b7565cd97ef4ee8b3e5750e6ac65071";


    var url = "https://blog-project-by-amina.onrender.com/" + params.category;
    var req = new Request(url);

    fetch(req)
      .then((response) => {
        response.json().then((data) => {
          setData(data);
          setLoaded(true);
          console.log(data);
        });
      });
  }, [params]);
  if (loaded) {
    return (
      <div className="sectionTop" >
        <div className="ArticalTop">
          <h1 style={{ textTransform: "capitalize" }}>Top Post</h1>
          <hr className="Shortline"/>
          {data.map((article, index) => {

            if (index < count) {
              return (
                <div className="article" key={article}>
                  <img className="thumbnail" src={article.urlToImage} alt="Image Loading..." />

                  <div className="text-content">
                    <Link to={`/NewPage/${article.title}`} state={{ article }}>
                      {/* <p>{article.title}</p>/ */}
                      <p className="title">{article.title}</p>
                    </Link>
                    <p className="content">{article.content}</p>
                    <p className="published">{article.publishedAt}</p>
                  </div>
                </div>
              );
            }
          })}

          {/* {indexs.map((article,index)=>{
        
        if (index < count) {
          return (
            <div className="article" key={article}>
              <img className="thumbnail" src={article.urlToImage} alt="Image Loading..." />

              <div className="text-content">
                <Link to={`/NewPage/${article.title}`} state={{ article }}>
                  <p>{article.title}</p>
                  <p className="title">{article.title}</p>
                </Link>
                <p className="content">{article.content}</p>
                <p className="published">{article.publishedAt}</p>
              </div>
            </div>
          );
        }
      }
        )}; */}
        </div>
        <div className="AD">Advertisement</div>

      </div>
    );
  }
  else {
    return <div className="Loding"><CircularProgress /></div>;
  }
}
export default TopPost;