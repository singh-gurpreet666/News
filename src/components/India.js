import React, { Component } from 'react'
import NewsItem from './NewsItem'
export default class India extends Component {
      articles = []
      constructor(){
        super();
        this.state = {
          articles : this.articles,
          loading : false,
          page : 1
        }
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
    
      async componentDidMount(){
        //https:newsapi.org/v2/top-headlinesc?category=general&apiKey=${this.props.apikey}&pageSize=${100}
        let url = `https://newsapi.org/v2/everything?q=india&apiKey=${this.props.apikey}`
        let data = await fetch(url)
        let parsedata = await data.json()
        this.setState({articles : parsedata.articles,totalResults : parsedata.totalResults})
        console.log(this.state.totalResults)
      }
     handle_previous = async() =>{
      console.log("previous")
      let url = `https://newsapi.org/v2/everything?q=india&apiKey=${this.props.apikey}&page=${this.state.page - 1}`

      let data = await fetch(url)
      let parsedata = await data.json()
      this.setState({articles : parsedata.articles,
        page : this.state.page -1})
    }
    handle_next = async () =>{
        console.log("next")
        if(this.state.page + 1 > Math.ceil(this.state.totalResults/100)){
            
        }
        else{
        let url = `https://newsapi.org/v2/everything?q=india&apiKey=${this.props.apikey}&page=${this.state.page + 1}`
        let data = await fetch(url)
        let parsedata = await data.json()
        this.setState({articles : parsedata.articles,
        page : this.state.page +1})
      }
    
    }
      render() {
    
        return (
          <div className="container my-3">
            <h3>Today's Top Headlines !</h3>
             <div className="row">
           
             {
              this.state.articles.map((element) => {
              return <div className="col-md-4" key={element.urlToImage}>
                <NewsItem title = {element.title} description={element.description} imageurl = {element.urlToImage}  newsurl={element.url} author={element.author} date={element.publishedAt}/>
              </div>
             })} 
      
            </div>
            <div className="container d-flex justify-content-between">
                 <button disabled={this.state.page==1} type="button" className="btn btn-dark" onClick= {this.handle_previous}> &larr; Previous</button>
                 <button disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults/100))} type="button" className="btn btn-dark" onClick = {this.handle_next}>Next &rarr;</button>
                 </div>
           </div>
        )
      }
}
