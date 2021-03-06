import React, {Component} from 'react';
import { reduxForm } from 'redux-form';
import {createPost} from '../actions/index';

class PostsNew extends Component {
	render() {
		const { fields: {title, categories, content}, handleSubmit } = this.props;
		

		return (
			<form onSubmit={handleSubmit(this.props.createPost)} >
				<h3>Create a New Post</h3>
				<div className="form-group"> 
					<label>Title</label>
					<input type="text" className="form-control" {...title}/>
					<div className="text-help">
						{title.touched ? title.error : ''}
					</div>
				</div>
				<div className="form-group"> 
					<label>Categories</label>
					<input type="text" className="form-control" {...categories}/>
				</div>
				<div className="form-group"> 
					<label>Content</label>
					<input type="text" className="form-control" {...content}/>
				</div>
			</form>
			);
	}
}

function validate(values) {
	const errors = {};

	if (!values.title) {
		errors.title = 'Enter a username';
	}
	return errors;
}

// connect first argument is MapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is MapStateToProps, 3rd is mapDispatchToProps

export default reduxForm({
	form: 'PostsNewForm', 
	fields: ['titles', 'categories', 'content']
}, validate, { createPost })(PostsNew);