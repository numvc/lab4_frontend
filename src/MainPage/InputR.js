import React from "react";
import {connect} from "react-redux";

class InputR extends React.Component{
    render() {
        return(
            <select onChange={(e) => this.props.dispatch({type:"MAIN_SET_R",value: e.target.value})}>
                <option value="4" name="r" selected={this.props.r === 4}>-4</option>
                <option value="3" name="r" selected={this.props.r === 3}>-3</option>
                <option value="2" name="r" selected={this.props.r === 2}>-2</option>
                <option value="1" name="r" selected={this.props.r === 1}>-1</option>
                <option value="4" name="r" selected={this.props.r === 4}>4</option>
                <option value="3 " name="r" selected={this.props.r === 3}>3</option>
                <option value="2" name="r" selected={this.props.r === 2}>2</option>
                <option selected value="1" name="r " selected={this.props.r === 1}>1</option>
            </select>
        )
    }
}

const mapStateToProps = function(store) {
    return {
        r: store.mainState.rField,
    }
};

export default connect(mapStateToProps)(InputR)