
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
function LatestArticle(props) {

  // const [forword,setForword]=useState(4)
  const [count, setCount] = useState(7);
  console.log("Props", props)
  const { data1, data2, data3 } = props.props;


  return (
    <div >
      <div >

        <div  className="LArticale">
       
          <div className="THEh4">
            <img className="thumbnail" src={data1[28].urlToImage} alt="load" />
            <Link to={`/NewPage/${data1[28].title}`} state={data1[28]}>
              {/* <p>{article.title}</p>/ */}
              <p className="title">{data1[2].title}</p>
            </Link>
          </div>
          <div className="THEh4">
            <img className="thumbnail" src={data2[2].urlToImage} alt="load" />
            <Link to={`/NewPage/${data2[2].title}`} state={data2[2]}>
              {/* <p>{article.title}</p>/ */}
              <p className="title">{data2[2].title}</p>
            </Link>
          </div>
          <div className="THEh4">
            <img className="thumbnail" src={data3[21].urlToImage} alt="load" />
            <Link to={`/NewPage/${data3[21].title}`} state={data3[21]}>
              {/* <p>{article.title}</p>/ */}
              <p className="title">{data3[21].title}</p>
            </Link>
          </div>
          <div className="THEh4">
            <img className="thumbnail" src={data3[11].urlToImage} alt="load" />
            <Link to={`/NewPage/${data3[11].title}`} state={data3[11]}>
              {/* <p>{article.title}</p>/ */}
              <p className="title">{data3[11].title}</p>
            </Link>
          </div>
          <div className="THEh4">
            <img className="thumbnail" src={data3[18].urlToImage} alt="load" />
            <Link to={`/NewPage/${data3[18].title}`} state={data3[18]}>
              {/* <p>{article.title}</p>/ */}
              <p className="title">{data3[18].title}</p>
            </Link>
          </div>
          <button onClick={() => {
        setCount(count + 7);
      }}>
        <span className="arrow">⬇</span> Load More
      </button>
        </div>
        
      </div>
      


    </div>
  );

}
export default LatestArticle;

