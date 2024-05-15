
const apiUrl = process.env.REACT_APP_API_URL;

export async function fetchChampionsByYear(year: number): Promise<any[]> {
    const response = await fetch(`${apiUrl}/${year}/driverStandings.json`);
  
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
  
    return await response.json();
  }
  