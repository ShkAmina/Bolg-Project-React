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


        <div className="article" >
          <img className="thumbnail" src={data1[4].urlToImage} alt="Image Loading..." />

          <div className="text-content">
            <Link to={`/NewPage/${data1[4].title}`} state={data1[4]}>
              <p className="title thumbnailHEADING">{data1[4].title}</p>
            </Link>
            <p className="content thumbnailHEADING">{data1[4].content}</p>
            <p className="published thumbnailHEADING">{data1[4].publishedAt}</p>
          </div>
        </div>
        <div className="article" >
          <img className="thumbnail" src={data3[4].urlToImage} alt="Image Loading..." />

          <div className="text-content">
            <Link to={`/NewPage/${data3[4].title}`} state={data1[4]}>

              <p className="title thumbnailHEADING">{data3[4].title}</p>
            </Link>
            <p className="content thumbnailHEADING">{data2[4].content}</p>
            <p className="published thumbnailHEADING">{data1[4].publishedAt}</p>
          </div>
        </div>
        <div className="article" >
          <img className="thumbnail" src={data2[8].urlToImage} alt="Image Loading..." />

          <div className="text-content">
            <Link to={`/NewPage/${data2[8].title}`} state={data2[8]}>
              <p className="title thumbnailHEADING">{data2[8].title}</p>
            </Link>
            <p className="content thumbnailHEADING">{data2[8].content}</p>
            <p className="published thumbnailHEADING">{data2[8].publishedAt}</p>
          </div>
        </div>

        <div className="article" >
          <img className="thumbnail" src={data1[22].urlToImage} alt="Image Loading..." />

          <div className="text-content">
            <Link to={`/NewPage/${data2[22].title}`} state={data2[22]}>
              <p className="title thumbnailHEADING">{data2[22].title}</p>
            </Link>
            <p className="content thumbnailHEADING">{data2[22].content}</p>
            <p className="published thumbnailHEADING">{data2[22].publishedAt}</p>
          </div>

        </div>
        <div className="article" >
          <img className="thumbnail" src={data1[25].urlToImage} alt="Image Loading..." />

          <div className="text-content">
            <Link to={`/NewPage/${data2[25].title}`} state={data2[25]}>
              <p className="title thumbnailHEADING">{data2[25].title}</p>
            </Link>
            <p className="content thumbnailHEADING">{data2[25].content}</p>
            <p className="published thumbnailHEADING">{data2[25].publishedAt}</p>
          </div>

        </div>
        <div className="article" >
          <img className="thumbnail" src={data1[30].urlToImage} alt="Image Loading..." />

          <div className="text-content">
            <Link to={`/NewPage/${data2[30].title}`} state={data2[30]}>
              <p className="title thumbnailHEADING">{data2[30].title}</p>
            </Link>
            <p className="content thumbnailHEADING">{data2[30].content}</p>
            <p className="published thumbnailHEADING">{data2[30].publishedAt}</p>
          </div>

        </div>
      </div>


    </div>
  );

}
export default TopPostHome;

