import React from 'react';

const ClassName = (...arg) => arg.filter(Boolean).join(' ');

export default ClassName;