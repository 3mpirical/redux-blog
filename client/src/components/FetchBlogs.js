import React , {Fragment} from "react";
import { getBlogs } from "../reducers/blogs";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import BlogIndex from "./BlogIndex";
import BlogShow from "./BlogShow";
import { Spinner } from "./Spinner";



class FetchBlogs extends React.Component {
    state = { loaded: false };

    componentDidMount() {
        this.props.dispatch(getBlogs(this.setLoaded));
    }

    setLoaded = () => {
        this.setState({ loaded: true });
    }

    render() {
        if(this.state.loaded) {
            return (
                <Fragment>
                    <Switch>
                        <Route exact path="/" component={BlogIndex}  />
                        <Route exact path="/blogs/:id" component={BlogShow} />
                    </Switch>
                </Fragment>
            )
        } else {
            return (
                <Spinner />
            )
        }
    }
}

const mapStateToProps = (state) => {
    return { blogs: state.blogs };
}



export default connect(mapStateToProps)(FetchBlogs);