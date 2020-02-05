import React, { Component } from "react";
import {Field, reduxForm } from 'redux-form';
import {withRouter} from "react-router-dom";


class SearchBar extends Component {

    handleFormSubmit({query}) {
        console.log("handle the contenent of", query);
        this.props.history.push("./results");
    }

    renderinput(field) {
        return <input type="text" placeholder="Search DailySmarty"{...field.input}/>
    };

    render() {
        const { handleSubmit } = this.props;

        return (
            <form className="Search-bar" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <Field name="query" component={this.renderinput}/>
            </form>
        )
    }
    
}

SearchBar = reduxForm({
    form: "searchBar"
})(SearchBar);

SearchBar= withRouter(SearchBar);
export default SearchBar;