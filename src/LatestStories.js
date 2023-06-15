import React from 'react'
import { Link } from 'react-router-dom';
import './App.css'
function LatestStories(props) {

    console.log("Props", props.props)
    const { data1, data2, data3 } = props.props;
    return (
        <div className="thelatest">
            <div className="THEh3">
                
                <Link to={`/NewPage/${data1[94].title}`} state={data1[94]}>
                    <h3 >{data1[94].title}</h3>
                </Link>
                <p>{data1[94].content}</p>
                <p >{data1[94].publishedAt}</p>
            </div>
            <div className="THEh3">
              
                <Link to={`/NewPage/${data2[10].title}`} state={data2[10]}>
                    <h3 className="title">{data2[10].title}</h3>
                </Link>
                <p>{data2[10].content}</p>
                <p >{data2[10].publishedAt}</p>
            </div>
            <div className="THEh3">
          
                <Link to={`/NewPage/${data3[61].title}`} state={data3[61]}>
                    <h3 className="title">{data3[61].title}</h3>
                </Link>
                <p>{data3[61].content}</p>
                <p >{data3[61].publishedAt}</p>
                
            </div>
            
        </div>

    )
}

export default LatestStories
