import React from 'react';
import './../styles/Header.scss'
interface HeaderProps {
  title: String
}
//made it modular, styles can be used as a dynamic input dependig on the heading required

const Header: React.FC<HeaderProps> = ({ title }) => {
  // Interface to define expected prop types (optional for type safety)

  return (
    <h1>{title}</h1>
  );
};

export default Header;
