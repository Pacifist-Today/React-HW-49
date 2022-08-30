import React from "react";

const checkType = (checkType) => {
    const arrTypes = ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"]
    return arrTypes.includes(checkType)
}

class Alert extends React.Component {
    render() {
        const {type, text} = this.props
        return (
            <div className={`alert alert-${checkType(type) ? type : 'danger'}`} role="alert">
                {checkType(type) ? text : 'This style doesn\'t exist'}</div>
        )
    }
}

export default Alert