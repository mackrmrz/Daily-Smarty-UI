import React, { Component } from "react";

import { connect } from "react-redux";
import Post from "./post";
import postsReducer from "../reducers/postsReducer";

class ResultsPosts extends Component{

    renderPost() {
        const post = this.props.post.map((post, index) => {
            return <Post key={index} {...post}/>
        })
        return post;
    }
    render() {
        return (
            <div className="results-posts">
                <div className="results-posts_wrapper">
                    <ul className="results-posts_post">
                        {this.renderPost()}
                    </ul>
                </div>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        post: state.posts.resultsPosts
    }
}

export default connect(mapStateToProps)(ResultsPosts);