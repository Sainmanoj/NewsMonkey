import React, { Component } from 'react'
import NewsItem from './NewsItem';

export default class News extends Component {
    articles = []
    constructor(props) {
        super(props);
        console.log("Constructor called");
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1
        }
        document.title=`${this.props.category}-NewsMonkey`;

    }
    updateNews = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=086e0ef84deb47419e8dbf9cb6b99f6c&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url,{ 'mode': 'cors', headers: { 'Access-Control-Allow-Origin': 'http://localhost:5173' } });
        let parseData = await data.json();
        console.log(parseData)
        this.setState({
            articles: parseData.articles,
            totalResults: parseData.totalResults
        })
    }
    async componentDidMount() {
        this.updateNews()
    }

    nextPage = async () => {
        this.updateNews()
        this.setState({ page: this.state.page + 1 })
    }

    prevPage = async () => {
        this.updateNews()
        this.setState({
            page: this.state.page - 1,
        })
    }
    render() {
        return (
            <>
                <div className="container my-3">
                    <h1 className='text-center'>NewsMonkey Top-Headline</h1>
                    <hr />
                    <div className="row">
                        {
                            this.state.articles.map((elm) => {
                                return (<div className="col-md-4"><NewsItem title={elm.title} img={elm.urlToImage}
                                    desc={elm.description ? elm.description.slice(0, 150) : " "}
                                    url={elm.url} date={elm.publishedAt} author={elm.author} source={elm.source.name} /></div>)
                            })
                        }
                    </div>
                    <div className="row">
                        <div className="d-flex justify-content-between">
                            <button type="button" disabled={this.state.page <= 1} className="btn btn-sm btn-dark" onClick={this.prevPage}>&larr; Prev</button>
                            <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-sm btn-dark" onClick={this.nextPage}>Next &rarr;</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
