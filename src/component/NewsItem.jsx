import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let {title,img,desc,url,author,date,source}=this.props;
        return (
            <>
                <div className="card" style={{ width: "18rem" }}>
                <span className=" badge position-absolute top-0  translate-middle badge rounded-pill bg-success">{source}</span>
                    <img src={img?img:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202303/_rsr2323-sixteen_nine.jpg?VersionId=QYX6DWQaO3FEdFpTu9E1YscZ3KKShD1A"} className="card-img-top" alt="No image" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{desc}...</p>
                        <p className='card-text'><small className='text-muted'>By:{!author?"Unknown":author} on {new Date(date).toLocaleDateString()}</small></p>
                        <a href={url} target="_blank" className="btn btn-sm btn-dark">Read more</a>
                    </div>
                </div>
            </>
        )
    }
}
