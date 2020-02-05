import React from "react";

import { connect } from "react-redux";

import * as actions from "../actions";

const RecentPosts = () => {
    return (
        <div className="recent-posts">
            <div className="recent-posts-wrapper">
                <div className="recent-posts-heading"> Recent Posts </div>
                <ul className="recent-posts-posts">
                    <li>Post number 0</li>
                    <li>Post number 1</li>
                    <li>Post number 2</li>
                    <li>Post number 3</li>
                </ul>
            </div>
        </div>
    )
    
}

export default connect(null, actions)(RecentPosts);