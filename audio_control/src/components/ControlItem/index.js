import React from "react";
import PropTypes from "prop-types";

class ControlItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.value };
  }

  handlePlus = () => {
      //Atualizar o state
      this.setState({ value: this.state.value + 1})
  };
  handleMinus = () => {
      this.setState({ value: this.state.value - 1})
  };


  render() {
    return (
      <>
        <li>
          <button className="btn" onClick={this.handleMinus}>-</button>
          <div> 
          <span className="value"> 
              {/*Alterar props para state o que for state para atualizar*/}
            {this.state.value} 
          </span><br />
          <span className="title">
              {/*Alterar props para state o que for state para atualizar*/}
            {this.props.title} 
          </span>
          </div>
          <button className="btn" onClick={this.handlePlus}>+</button>
        </li>
      </>
    );
  }
}

ControlItem.propTypes = {
  value: PropTypes.number,
  title: PropTypes.string,
};

export default ControlItem;
