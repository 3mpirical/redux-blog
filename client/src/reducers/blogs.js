import axios from "axios";

const BLOGS = "BLOGS";
const ADD_BLOG = "ADD_BLOG";
const UPDATE_BLOG = "UPDATE_BLOG";
const DELETE_BLOG = "DELETE_BLOG"

///// ACTIONS /////
const getBlogs = (func) => {
    return (dispatch) => {
        axios.get(`/api/blogs`)
        .then((res) => {
            dispatch({type: BLOGS, blogs: res.data});
        })
        .then(func)
        .catch((err) => console.log(err));
    };
};

const addBlog = (blog) => {
    return (dispatch) => {
        axios.post(`/api/blogs/`, blog)
        .then((res) => {
            dispatch({ type: ADD_BLOG, blog: res.data });
        })
        .catch((err) => console.log(err));
    };
};

const updateBlog = (blog) => {
    return (dispatch) => {
        axios.put(`/api/blogs`, blog)
        .then((res) => {
            dispatch({ type: UPDATE_BLOG, blog: res.data });
        })
        .catch((err) => console.log(err));
    };
};

const deleteBlog = (id) => {
    return (dispatch) => {
        axios.delete(`/api/blogs/${id}`)
        .then((res) => {
            dispatch({ type: DELETE_BLOG, id });
        })
        .catch((err) => console.log(err));
    };
};



///// REDUCERS /////
const blogs = (state = [], action) => {
    switch(action.type) {
        case(BLOGS):
            return action.blogs;
        case(ADD_BLOG):
            return [action.blog, ...state];
        case(UPDATE_BLOG):
            return state.map((blog) => {
                if(blog.id === action.blog.id) return action.blog;
                return blog;
            });
        case(DELETE_BLOG):
            return state.filter((blog) => blog.id !== action.blog.id);
        default:
            return state;
    }
};



export { getBlogs, addBlog, updateBlog, deleteBlog, blogs };