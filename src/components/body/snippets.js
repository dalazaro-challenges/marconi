import React, { Component } from 'react';
import Highlight from 'react-highlight';
import '../../assets/styles/atom-one-dark.css';

export const SnippetOne = () => {
  return(
    <div>
      <Highlight language="bash">
        {`
    $ marconi branch foo
    >>> Success. Created branch foo.

    $ marconi status --branch_name=foo
    >>> Branch foo: uninitialized

    $ marconi init --config=/tmp/config.txt --branch_name=foo
    >>> Success. Configured branch foo.

    $ marconi run --branch_name=foo
    >>> Success. Running branch foo.
        `}
      </Highlight>
    </div>
  )
}

export const SnippetTwo = () => {
  return(
    <div>
      <Highlight language="javascript">
        {`Contract IntranetFirewall {
  Init(Address target_address) {
    TunnelRef handle = mOpen(target_address);
    mApply(handle, {AllowOnlyCorpOrHTTPS});
  }
}

Status AllowOnlyCorpOrHTTPS(PacketRef packet) {
  if (packet.src().port() != 443 &&
      !packet.src().url().as_string().match('intranet.example.com')) {
    return Status::UNSAFE;
  }
  return Status::OK;
}
        `}
      </Highlight>
    </div>
  )
}

export const SnippetThree = () => {
  return (
    <div>
      <Highlight language="javascript">
        {`Contract PhishCatcher {
  Init(Address client_address) {
    TunnelRef handle = mOpen(client_address);
    mApply(handle, {PhishFunc});
  }
}

Status PhishFunc(PacketRef packet) {  
  if (packet.src().url().as_string().match('[^\\u0000-\\u007F]')) {
    return Status::UNSAFE;
  }
  return Status::OK;
}
        `}
      </Highlight>
    </div>
  )
}