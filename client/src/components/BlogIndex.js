import React from "react";
import { getBlogs } from "../reducers/blogs";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


class BlogIndex extends React.Component {



    // componentDidMount() {
    //     this.props.dispatch(getBlogs());
    // }

    renderBlogs = () => {
        console.log(this.props);
        return this.props.blogs.map((blog) => {
            return (
                <Link key={blog.id} className="blog" to={`/blogs/${blog.id}`} >
                    { blog.title }
                </Link>
            )
        }); 
    }

    render() {
        return (
            <div className="blog-index-container">
                <h1 className="blogs-title" >Featured Blogs</h1>
                <div className="blogs-container">
                    { this.renderBlogs() }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { blogs: state.blogs };
}



export default connect(mapStateToProps)(BlogIndex);