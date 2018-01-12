import React from 'react'
import { Component } from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {Link} from 'react-router-dom'
import {getOnePost} from '../actions/posts'
import Comments from './Comments'
import PostStat from './PostStat'

class PostDetailed extends Component{
	componentDidMount(){
		const {id} = this.props.match.params;
		this.props.getOnePost(id);
	}

	render(){
		let post = this.props.post || [];
		//.log(post);
		return(
			<div className="container">
				<div className="avatar"></div>

				<div className="author-post">{post.author}</div>
		        <div className="date-post">{moment(post.timestamp).format("MMM-DD-YYYY hh:mma")}</div>
		        <div className="category-post">
		        	<span className="category-title">categories:</span> {post.category}</div>
		        <div className="title-post">{post.title}</div>
		        <div className="snap-post">{post.body}</div>
			    <PostStat />
		    <Comments />
		    </div>
			)
	}
}

function mapStateToProps({post}) {
    return post
}

export default withRouter(connect(mapStateToProps,
  {getOnePost}
)(PostDetailed));
