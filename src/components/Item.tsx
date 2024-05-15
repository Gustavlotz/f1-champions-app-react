import React from 'react';
import Loader from './loader/Loader';
import './../styles/ItemStyles.scss';

interface ItemProps {
  title: string;
  index: number;
  onClick?: (index: number, winnerID?:string) => void;
  isLoading?: boolean; 
  error?: string; 
  winner?: {
    givenName: string;
    familyName: string;
    driverId: string;
  };
  styling: string;
}

//made item as abstract as possible

const Item: React.FC<ItemProps> = ({ title, index, onClick, isLoading, error, winner, styling}) => {

  const handleClick = () => {
    if (onClick) {
      onClick(index, winner?.driverId);
    }
  }; 
  return (
    <div className="container">
      <div className={styling} onClick={handleClick}>
        <h2>{title}</h2>
        {isLoading && <Loader />}
        {!isLoading && (
          <>
            {error && <p>Error: {error}</p>}
            {winner && (
              <p>Winner: {winner.givenName} {winner.familyName}</p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Item;
