import React, { Component } from "react";
import p5 from "p5";

// @Cleanup - refactor into this https://github.com/PARC6502/basic-p5-react/blob/master/src/presenter/Sketch.jsx
class P5Wrapper extends Component {
  componentDidMount() {
    this.canvas = new p5(this.props.sketch, this.wrapper);
    if (this.canvas.myCustomRedrawAccordingToNewPropsHandler) {
      this.canvas.myCustomRedrawAccordingToNewPropsHandler(this.props);
    }
  }

  componentWillReceiveProps(newprops) {
    if (
      this.props.shouldRedrawOnPropsChange &&
      this.props.sketch !== newprops.sketch
    ) {
      this.canvas.remove();
      this.canvas = new p5(newprops.sketch, this.wrapper);
    }
    if (this.canvas.myCustomRedrawAccordingToNewPropsHandler) {
      this.canvas.myCustomRedrawAccordingToNewPropsHandler(newprops);
    }
  }

  componentWillUnmount() {
    this.canvas.remove();
  }

  render() {
    return (
      <div style={this.props.style} ref={wrapper => (this.wrapper = wrapper)} />
    );
  }
}

export default P5Wrapper;
