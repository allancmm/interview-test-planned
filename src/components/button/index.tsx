import React from 'react';

interface ButtonPlanedProps {
  label: string,
  onClick() : void
}
const ButtonPlanned = ({ label, onClick } : ButtonPlanedProps) => {
return <button type="button" onClick={onClick}>{label}</button>;
}

export default ButtonPlanned;
