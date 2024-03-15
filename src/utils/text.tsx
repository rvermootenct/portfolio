import React from 'react'

export const formatWithLineBreaks = (s: string) => s.split('\n').map((line) => (
  <React.Fragment key={line}>
    {line}
    <br />
  </React.Fragment>
))
