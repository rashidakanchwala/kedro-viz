import React from 'react';
import classnames from 'classnames';
import modifiers from '../../../utils/modifiers';
import './toggle.scss';

/**
 * Shows a toggle button for code panel
 */
const Toggle = ({
  id = '',
  checked,
  enabled = true,
  title,
  onChange,
  className = '',
  dataTest,
}) => (
  <div
    className={modifiers(classnames('pipeline-toggle', className), {
      enabled,
    })}
  >
    <input
      id={`pipeline-toggle-input-${id}`}
      data-test={dataTest}
      className="pipeline-toggle-input"
      type="checkbox"
      checked={checked}
      disabled={!enabled}
      onChange={onChange}
    />
    <label
      className={modifiers('pipeline-toggle-label', {
        checked: enabled && checked,
      })}
      htmlFor={`pipeline-toggle-input-${id}`}
    >
      {title}
    </label>
  </div>
);

export default Toggle;
