import React from 'react';
import PropTypes from 'prop-types';
import EditControls from './EditControls';
import EditButton from './EditButton';

const EditFooter = ({ isInEditMode, toggleEditMode, checkedItems }) => (
  isInEditMode
    ? (
      <EditControls
        checkedItems={checkedItems}
        isInEditMode={isInEditMode}
        toggleEditMode={toggleEditMode}
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
};

export default EditFooter;
