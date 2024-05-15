import { Driver } from "../../models/driverType";

export interface ApiResponseSingleSeason {
    MRData: {
      StandingsTable: {
        season: string;
       
        StandingsLists: [{ round: string, DriverStandings:Driver[]}, ]
      };
    };
    isLoading: boolean;
    error?: Error;
  }