import { Driver } from "../../models/driverType";


// tried breaking down interfaces into more manageble chunks for easier reading, some of these value are not required
// interfaces can be greatly trimmed or reduced to use only funcitonal properties
export interface ApiResponseRaces {
    MRData: {
      RaceTable: {
        season: string;
        round: string;
        Races: [Race];
        limit: string;
        offset: string;
        series: string;
        total: string;
        url: string;
        xmlns: string;
      };
    };
    isLoading: boolean;
    error?: Error;
  }

   interface Race {
    season: string;
    round: string;
    url: string;
    raceName: string;
    date: string;
    Circuit: {
        circuitId: string;
        url: string;
        circuitName: string;
        Location: {
            locality: string;
            country: string;
        };
    };
    Results: [Results]
}

interface Results {
  position: string;
  positionText: string;
  points: string;
  Driver: Driver
  Constructor: {
      constructorId: string;
      url: string;
      name: string;
      nationality: string;
  };
  grid: string;
  laps: string;
  status: string;
  Time: {
      millis: string;
      time: string;
  };
  FastestLap: {
      rank: string;
      lap: string;
      Time: {
          time: string;
      };
      AverageSpeed: {
          units: string;
          speed: string;
      };
  };
};

