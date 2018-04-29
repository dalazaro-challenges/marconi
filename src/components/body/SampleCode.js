import React, { Component } from 'react';

class Headers extends React.Component {
  render() {
    let selected = this.props.selectedPane;
    let headers = this.props.panes.map((pane, index) => {
      let title = pane.title;
      let klass = '';
      if (index === selected) {
        klass = 'active';
      }

      return (
        <a
          key={index}
          className={`${klass} sample-btn`}
          onClick={this.props.onTabChosen.bind(null, index)}>
          {title}{' '}
        </a>
      );
    });
    return (
      <div className='center-items'>
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
    this.selectTab = this.selectTab.bind(this)
  }

  selectTab(num) {
    this.setState({ selectedPane: num });
  }

  render() {
    let pane = this.props.panes[this.state.selectedPane]

    return (
      <div>
        <Headers
          selectedPane={this.state.selectedPane}
          onTabChosen={this.selectTab}
          panes={this.props.panes}
        />

        <div className="center-items">
          <p className="sample-info">
            {pane.description}
          </p>
        </div>

        <div id="code-container">
          {pane.content}
        </div>
      </div>
    )
  }
}

export default SampleCode;