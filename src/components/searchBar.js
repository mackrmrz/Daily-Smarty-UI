import React, { Component } from "react";
import {Field, reduxForm } from 'redux-form';

class SearchBar extends Component {

    handleFormSubmit({query}) {
        console.log("handle the contenent of", query)
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
export default SearchBar;