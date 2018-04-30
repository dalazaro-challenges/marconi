import React, { Component } from 'react';

class Headers extends React.Component {
  render() {
    let selected = this.props.selectedPane;
    let headers = this.props.panes.map((pane, index) => {
      let title = pane.title;
      let toggleActive = '';
      if (index === selected) {
        toggleActive = 'active';
      }

      return (
        <a
          key={index}
          className={`${toggleActive} sample-btn`}
          onClick={this.props.onTabChosen.bind(null, index)}>
          {title}
        </a>
      );
    });

    return (
      <div className='center'>
        {headers}
      </div>
    );
  }
}

class SampleCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPane: 0
    };
    this.selectTab = this.selectTab.bind(this);
  }

  selectTab(num) {
    this.setState({ 
      selectedPane: num 
    });
  }

  render() {
    let pane = this.props.panes[this.state.selectedPane];

    return (
      <div>
        <Headers
          selectedPane={this.state.selectedPane}
          onTabChosen={this.selectTab}
          panes={this.props.panes}
        />

        <div className="center">
          <p className="sample-info">
            {pane.description}
          </p>
        </div>

        {pane.content}
      </div>
    )
  }
}

export default SampleCode;