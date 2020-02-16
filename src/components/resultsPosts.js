import React, { Component } from "react";

import { connect } from "react-redux";
import Post from "./post";


class ResultsPosts extends Component{

    renderPost() {
        const posts = this.props.posts.map((post, index) => {
            return <Post type="result" key={index} {...post}/>
        })
        return posts;
    }
    render() {
        return (
            <div className="results-posts">
                <div className="results-posts_wrapper">
                    <ul className="results-posts_posts">
                        {this.renderPost()}
                    </ul>
                </div>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts.resultsPosts
    }
}

export default connect(mapStateToProps)(ResultsPosts);