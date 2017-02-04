import React, { Component } from 'react';
import Head from 'next/head';
import { style } from 'next/css';
import YTSearch from 'youtube-api-search';

import SearchBar from '../components/search_bar';
import VideoList from '../components/video_list';


const API_KEY = 'AIzaSyDm0ZH5G8lwSn3gd8_wR6otEg4vmfcUUOY';



export default class extends Component {

    constructor(props){
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({ videos });
        });
    }

    render() {
        return (
            <div>
                <Head>
                    <title>next/YoutubeSearch</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                </Head>
                <div>
                    <h1>Index pages</h1>
                </div>
                <div>
                    <SearchBar />
                    <VideoList videos={this.state.videos} />
                </div>
            </div>
        );
    }
}