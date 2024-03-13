import React from 'react';

const formatWithLineBreaks = (s: string) => s.split('\n').map((line, index) => (
  <React.Fragment key={index}>
    {line}
    <br />
  </React.Fragment>
));

export default formatWithLineBreaks;