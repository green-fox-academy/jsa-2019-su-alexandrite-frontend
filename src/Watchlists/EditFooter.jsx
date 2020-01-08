import React from 'react';
import PropTypes from 'prop-types';
import EditControls from './EditControls';
import EditButton from './EditButton';

const EditFooter = ({
  isInEditMode,
  toggleEditMode,
  checkedItems,
  onDeleteWatchlist,
  onDeleteStocks,
}) => (isInEditMode
  ? (
    <EditControls
      checkedItems={checkedItems}
      isInEditMode={isInEditMode}
      toggleEditMode={toggleEditMode}
      onDeleteWatchlist={onDeleteWatchlist}
      onDeleteStocks={onDeleteStocks}
    />
  )
  : <EditButton isInEditMode={isInEditMode} toggleEditMode={toggleEditMode} />
);

EditFooter.propTypes = {
  isInEditMode: PropTypes.bool.isRequired,
  toggleEditMode: PropTypes.func.isRequired,
  checkedItems: PropTypes.arrayOf(
    PropTypes.bool,
  ).isRequired,
  onDeleteWatchlist: PropTypes.func.isRequired,
  onDeleteStocks: PropTypes.func.isRequired,
};

export default EditFooter;
