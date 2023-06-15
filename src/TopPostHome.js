import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
function TopPostHome(props) {  
console.log("Props", props.props)
const { data1, data2, data3 } = props.props;
  
    return (
      <div className="sectionTop1" >
            <div className="AD">Advertisement</div>
        <div className="ArticalTop">
          <h1 className="topHome" style={{ textTransform: "capitalize" }}>Top Post</h1>
          <hr className="Shortline"/>
         
                <div className="article" >
                  <img className="thumbnail" src={data1[4].urlToImage} alt="Image Loading..." />

                  <div className="text-content">
                    <Link to={`/NewPage/${data1[4].title}`} state={ data1[4] }>
                      {/* <p>{article.title}</p>/ */}
                      <p className="title">{data1[4].title}</p>
                    </Link>
                    <p className="content">{data1[4].content}</p>
                    <p className="published">{data1[4].publishedAt}</p>
                  </div>
                </div>
                <div className="article" >
                  <img className="thumbnail" src={data3[4].urlToImage} alt="Image Loading..." />

                  <div className="text-content">
                    <Link to={`/NewPage/${data3[4].title}`} state={ data1[4] }>
                      
                      <p className="title">{data3[4].title}</p>
                    </Link>
                    <p className="content">{data2[4].content}</p>
                    <p className="published">{data1[4].publishedAt}</p>
                  </div>
                </div>
                <div className="article" >
                  <img className="thumbnail" src={data1[8].urlToImage} alt="Image Loading..." />

                  <div className="text-content">
                    <Link to={`/NewPage/${data2[8].title}`} state={ data2[8] }>
                      {/* <p>{article.title}</p>/ */}
                      <p className="title">{data2[8].title}</p>
                    </Link>
                    <p className="content">{data2[8].content}</p>
                    <p className="published">{data2[8].publishedAt}</p>
                  </div>
                </div>
         

          
        </div>
    

      </div>
    );
 
}
export default TopPostHome;

