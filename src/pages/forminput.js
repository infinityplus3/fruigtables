import React from "react";
import "./forminput.css";

export default class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: (props.locked && props.active) || false,
      error: props.error || "",
      label: props.label || "Label"
    };
    this.changeValue = this.changeValue.bind(this)
  }

  changeValue(event) {
    this.props.changeFunc(event.target.value);
  }

  render() {
    const { active, label } = this.state;
    const { locked, id, type, height, value, error } = this.props;
    const fieldClassName = `field ${(locked ? active : active || value) &&
      "active"} ${locked && !active && "locked"}`;

    return (
      <div className={`${fieldClassName} nofade`} style={{ height: `${height}px` || "56px" }}>
        {(type === 'input') ?
            <input
                id={id}
                type="text"
                value={value || ""}
                placeholder={label}
                onChange={this.changeValue}
                onFocus={() => !locked && this.setState({ active: true })}
                onBlur={() => !locked && this.setState({ active: false })}
            ></input>
        :
            <div className="wrapper">
                <textarea
                    id={id}
                    value={value || ""}
                    placeholder={label}
                    onChange={this.changeValue}
                    onFocus={() => !locked && this.setState({ active: true })}
                    onBlur={() => !locked && this.setState({ active: false })}
                ></textarea>
                <label htmlFor={id} className={`${error && 'error'}`}>
                    {error || label}
                </label>
            </div>
        }
        {(type === 'input') ? 
            <label htmlFor={id} className={`${error && 'error'}`}>
                {error || label}
            </label>
        : null}
      </div>
    );
  }
}