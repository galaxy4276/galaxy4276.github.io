import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faPersonSnowboarding } from '@fortawesome/free-solid-svg-icons';
import { GrReactjs } from 'react-icons/gr';
import { SiJavascript, SiTypescript } from 'react-icons/si';
import { FcBriefcase } from 'react-icons/fc';

export const TagIcon: React.FC<{ tagName: string }> = ({ tagName }) => {
  switch (tagName) {
    case 'daily': return <FontAwesomeIcon icon={faPersonSnowboarding} />
    case 'Algorithm': return <FontAwesomeIcon icon={faCircleQuestion} />
    case 'react.js': return <GrReactjs />
    case 'javascript': return <SiJavascript />
    case 'typescript': return <SiTypescript />
    case 'project': return <FcBriefcase />
    default: return null;
  }
};
