import React, { Component } from 'react'

export class NewsItems extends Component {
  render() {
    let {title, description, newsUrl, imageUrl, author, date} = this.props
    return (
      <div>
            <div className="card" style={{minWidth: "18rem"}}>
                <img src={imageUrl?imageUrl:"https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description?description:"click the button below to read more about this article"}...</p>
                        <p className='card-text'>By {author?author:"unknown"} on {new Date(date).toGMTString()}</p>
                        <a href={newsUrl} target='_blank' className="btn btn-dark">Read here</a>
                    </div>
            </div>
      </div>
    )
  }
}

export default NewsItems
