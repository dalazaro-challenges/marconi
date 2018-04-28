import React, { Component } from 'react';

class SampleCode extends Component {
  render() {
    return (
      <div>
        $ marconi branch foo
        >>> Success. Created branch foo. 
        
        $ marconi status --branch_name=foo
        >>> Branch foo: uninitialized 
        
        $ marconi init --config=/tmp/config.txt --branch_name=foo
        >>> Success. Configured branch foo. 
        
        $ marconi run --branch_name=foo
        >>> Success. Running branch foo.
      </div>
    )
  }
}

export default SampleCode;