import React from 'react';
import PropTypes from 'prop-types';
import EditControls from './EditControls';
import EditButton from './EditButton';

const EditFooter = ({
  isInEditMode,
  toggleEditMode,
  checkedItems,
  watchListId,
  watchListName,
}) => (isInEditMode
  ? (
    <EditControls
      checkedItems={checkedItems}
      isInEditMode={isInEditMode}
      toggleEditMode={toggleEditMode}
      watchListId={watchListId}
      watchListName={watchListName}
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
  watchListId: PropTypes.number.isRequired,
  watchListName: PropTypes.string.isRequired,
};

export default EditFooter;
