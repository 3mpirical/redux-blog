import React from "react";
import { connect } from "react-redux";
import { Link, } from 'react-router-dom';



const BlogShow = ({ blog }) => {
    return (
        <div className="blog-show__container">
            <div 
                className="blog-show__image"
                style={{backgroundImage: `url(${blog.banner})`}}
            ></div>
            <h1 className="blog-show__title" >{blog.title}</h1>
            <br/>
            <p className="blog-show__text" >{ blog.text }</p>

            <div className="blog-show__meta">
                <img src={blog.author_image} alt=""/>

                <div className="meta-info">
                    <div>By <span className="author">{blog.author}</span></div>
                    <div>In {blog.category}</div>
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = (state, props) => {
  return { blog: state.blogs.find( a => a.id === parseInt(props.match.params.id )) }
}

export default connect(mapStateToProps)(BlogShow);