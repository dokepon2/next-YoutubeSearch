import _ from 'lodash';
import React, { Component } from 'react';
import Head from 'next/head';
import { style } from 'next/css';
import YTSearch from 'youtube-api-search';

import SearchBar from '../components/search_bar';
import VideoList from '../components/video_list';
import VideoDetail from '../components/video_detail';

const API_KEY = 'AIzaSyDm0ZH5G8lwSn3gd8_wR6otEg4vmfcUUOY';



export default class extends Component {

    constructor(props){
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null
         };

        this.videoSearch('closer')

    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term }, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
             });
        });
    }

    render() {

        const videoSearch = _.debounce( (term) => { this.videoSearch(term) }, 500);

        return (
            <div className="container" >
                <Head>
                    <title>next/YoutubeSearch</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
                </Head>
                <div>
                    <h1>Youtube-Search</h1>
                </div>
                <div>
                    <SearchBar onSearchTermChange={videoSearch} />
                    <VideoDetail video={this.state.selectedVideo} />
                    <VideoList 
                        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                        videos={this.state.videos} />
                </div>
            </div>
        );
    }
}