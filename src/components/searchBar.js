import React, { Component } from "react";
import {Field, reduxForm } from 'redux-form';
import {withRouter} from "react-router-dom";


class SearchBar extends Component {

   handleFormSubmit(query) {
    this.props.onSubmit(query);
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