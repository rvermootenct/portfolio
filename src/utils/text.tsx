import React from 'react';

export const formatWithLineBreaks = (s: string) => s.split('\n').map((line, index) => (
  <React.Fragment key={index}>
    {line}
    <br />
  </React.Fragment>
))
