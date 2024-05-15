import React, { useEffect, useState } from 'react';
import { ApiResponseRaces } from './RaceTypes';
import { fetchRacesByYear } from './Race.service'; 
import Item from '../Item';


//not sure what the standard is here but placed immediate call model in same file
interface RaceProps {
    data: {
        index: number;
        year: number;
        winnerId:string;
    };
  }

const Race: React.FC<RaceProps> = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [champions, setChampions] = useState<ApiResponseRaces | null>(null); // Initial state can be null
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Set loading state
      try {
        const response: any = await fetchRacesByYear(data.year, data.index);
        setChampions(response); // Update state with fetched data
        setIsLoading(false); // Reset loading state
      } catch (error) {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [data]); // Dependency array 

  let champ: any | null = null;
  if (champions) {
    champ = champions.MRData.RaceTable.Races[0].Results[0].Driver;
  }

  return (
        <Item 
        styling={
          champions?.MRData?.RaceTable?.Races[0].Results[0].Driver.driverId ===
            data.winnerId
            ? 'race highlighted'
            : 'race'
        }
        title={`Race ${data.index} `}
        index={data.index}
        isLoading={isLoading}
        error={champions?.error?.message}
        winner={champ}
         />
  );
};

export default Race;
