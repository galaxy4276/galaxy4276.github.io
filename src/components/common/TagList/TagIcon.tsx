import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faPersonSnowboarding } from '@fortawesome/free-solid-svg-icons';

export const TagIcon: React.FC<{ tagName: string }> = ({ tagName }) => {
  switch (tagName) {
    case 'daily': return <FontAwesomeIcon icon={faPersonSnowboarding} />
    case 'Algorithm': return <FontAwesomeIcon icon={faCircleQuestion} />
    default: return null;
  }
};
