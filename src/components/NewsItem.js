import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
let {title,description,imageurl,newsurl,author,date} = this.props

    return (
      <div>
          <div className="card mx-2 my-2" style={{width: "18rem"}}>
             <img src={imageurl?imageurl : "https://th.bing.com/th/id/OIP.pFIpCN-gdy26aR3_JpzD1QHaE8?pid=ImgDet&w=600&h=400&rs=1"} className="card-img-top" alt="..." />
             <div className="card-body">
                 <h5 className="card-title">{title}</h5>
                 <p className="card-text">{description}</p>
                 <p className="card-text"><small className="text-body-secondary">By {author?author:"Unknown"} on {new Date(date).toUTCString()}</small></p>
                 <a href={newsurl} target="_blank" className="btn btn-primary">Read More</a>
             </div>
             

          </div>
      </div>
    )
  }
}
