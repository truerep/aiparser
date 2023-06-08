import React from 'react';

import Header from './Header';

const HeaderContainer = ({
  showHeader
}) => {
  if (showHeader === undefined) {
    showHeader = true;
  } else {
    showHeader = false;
  }

  return (
    <Header
      showHeader={showHeader}
    />
  );
};

export default HeaderContainer;
