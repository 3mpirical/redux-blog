import React, { Fragment } from "react";
import { Link } from "react-router-dom";



class Navbar extends React.Component {
    render() {
        return (
            <Fragment>
                <nav className="navbar" >
                    <div className="navbar__title">
                        Blogify
                    </div>

                    <div className="navbar__links">
                        <form onSubmit={(event) => event.preventDefault()} >
                            <input 
                                placeholder="...Search Blogs"
                                className="navbar__searchbar">
                            </input>
                        </form>
                        <Link className="btn-white" to="/" >See Our Blogs</Link>
                    </div>
                </nav>
                <div className="navbar__clearfix"></div>
            </Fragment>
        )
    }
}


export { Navbar };