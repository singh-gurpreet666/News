import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'


export default class News extends Component {
  static defaultProps = {
    country : "in",
    pageSize : 9,
    category : "general",
  }
  static propTypes={
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string,
  }
  articles = []
  constructor(props){
    super(props);
    this.state = {
      articles : this.articles,
      loading : false,
      page : 1
    }
    
    document.title = `${this.cpatilize(this.props.category)} - News`
//     let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=${this.props.apikey}"
//     // let data = await fetch(url)
//     // let parsedata = await data.json()
// //     let response=fetch(url)
// // response.then((v)=>{
// //   return v.json()
// // }).then((v1)=>{
// //   console.log(v1)
// //   this.setState({articles : v1.articles})

  }
  cpatilize = (name) =>{
    return name.charAt(0).toUpperCase()+name.slice(1);
  }

  async componentDidMount(){
    //https:newsapi.org/v2/top-headlinesc?category=general&apiKey=${this.props.apikey}&pageSize=${this.props.pageSize}
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&pageSize=${this.props.pageSize}`
    let data = await fetch(url)
    let parsedata = await data.json()
    this.setState({articles : parsedata.articles,totalResults : parsedata.totalResults})
    console.log(this.state.totalResults)
  }
 handle_previous = async() =>{
  console.log("previous")
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
    let data = await fetch(url)
    let parsedata = await data.json()
    this.setState({articles : parsedata.articles,
    page : this.state.page -1})
}
handle_next = async () =>{
  console.log("next")
  if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

  }
  else{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
    let data = await fetch(url)
    let parsedata = await data.json()
    this.setState({articles : parsedata.articles,
    page : this.state.page +1})
  }

}
  render() {

    return (
      <div className="container my-3">
        <h3 className='text-center'>Today's - Top {this.cpatilize(this.props.category)} Headlines !</h3>
         <div className="row">
       
         {
          this.state.articles.map((element) => {
          return <div className="col-md-4" key={element.urlToImage}>
            <NewsItem title = {element.title} description={element.description} imageurl = {element.urlToImage}  newsurl={element.url} author={element.author} date={element.publishedAt} />
          </div>
         })} 
  
        </div>
        <div className="container d-flex justify-content-between">
             <button disabled={this.state.page==1} type="button" className="btn btn-dark" onClick= {this.handle_previous}> &larr; Previous</button>
             <button disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))} type="button" className="btn btn-dark" onClick = {this.handle_next}>Next &rarr;</button>
             </div>
       </div>
    )
  }
}
