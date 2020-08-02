import React from 'react';
import { connect } from 'react-redux'
import {setFilter} from '../redux/actionCreators'

const VisibilityFilters = ({visibilityFilter, setFilter}) => {
    return (
        <div>
            <h2>Filters</h2>
            <p>
                <span 
                    style={{textDecoration: visibilityFilter === "all" ? "underline" : null}}
                    onClick={() => setFilter("all")}
                >
                    all
                </span> {" "}
                <span 
                    style={{textDecoration: visibilityFilter === "completed" ? "underline" : null}}
                    onClick={() => setFilter("completed")}
                >
                    completed
                </span> {" "}
                <span 
                    style={{textDecoration: visibilityFilter === "incomplete" ? "underline" : null}}
                    onClick={() => setFilter("incomplete")}
                >
                    incomplete
                </span> {" "}
            </p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        visibilityFilter: state.visibilityFilter
    }
}

const mapDispatchToProps = {
    setFilter
}


export default connect(mapStateToProps, mapDispatchToProps)(VisibilityFilters)