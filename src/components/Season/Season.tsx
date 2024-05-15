import React, { useState, useEffect } from 'react';
import { fetchChampionsByYear } from './Season.service'; // Import the fetch function
import { ApiResponseSingleSeason } from './SeasonTypes';
import Item from '../Item';
import List from '../List';

interface SeasonProps {
  data: {
    index: number;
  };
}

// handles its child components, so nested list exists here

const Season: React.FC<SeasonProps> = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [champions, setChampions] = useState<ApiResponseSingleSeason | null>(null); // Initial state can be null
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [shouldOpenList, setShouldOpenList] = useState(false); // New state variable

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Set loading state
      try {
        const response: any = await fetchChampionsByYear(props.data.index);
        setChampions(response); // Update state with fetched data
        setIsLoading(false); // Reset loading state
      } catch (error) {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [props.data]); // Dependency array ensures fetch only on season change

  const handleItemClick = (year: number) => {
    setShouldOpenList(!shouldOpenList);
    setSelectedYear((prevSelectedYear) => (prevSelectedYear === year ? null : year));
  };

  let champ: any | null = null;
  let round:number=0;
  if (champions) {
    let key:any =champions.MRData.StandingsTable.StandingsLists[0]
    round = key.round;
    champ = key.DriverStandings[0].Driver;
     
  }

  const listProps = {
    isOpen: shouldOpenList, // Pass isOpen prop to List component
    inputValue: { input: round, year: props.data.index, winnerId: champ?.driverId },
  };

  return (
    <div>
      <Item
        styling="season"
        title={`${props.data.index} Season`}
        index={props.data.index} // Pass year for internal use
        isLoading={isLoading}
        error={champions?.error?.message} // Extract error message
        winner={champ}
        onClick={() => handleItemClick(props.data.index)}
      />
  {shouldOpenList && <List {...listProps} />}
    </div>
  );
};

export default Season;
