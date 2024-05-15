const apiUrl = process.env.REACT_APP_API_URL;

export async function fetchRacesByYear(year: number, raceIndex:number): Promise<any[]> {
    const response = await fetch(`${apiUrl}/${year}/${raceIndex}/results.json`);
  
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
  
    return await response.json();
  }
  