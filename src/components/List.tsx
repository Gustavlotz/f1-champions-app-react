import React, { useState, useEffect } from 'react';
import Season from './Season/Season';
import Race from './Race/Race'; // Assuming a component for displaying lap data

const currentYear = new Date().getFullYear();


//Dont know what the standard is for interfaces, could have easily put them into a model
interface InputProp {
  inputValue?: {
    input?: number;
    year?: number;
    winnerId?:string;
  };
}

interface DataType {
  index: number;
  year?: number;
  winnerId?: string;
}

// could make the this more abstract by assigning lower limit to a variable thats passed, upper limit can also be done like this
// could handle different inputs with a switch case
 const List: React.FC<InputProp> = ({ inputValue }) => {
  
  const [data, setData] = useState<DataType[]>([]);
  useEffect(() => {
    const newData: DataType[] = [];
    if (!inputValue) {
      for (let index = 2005; index <= currentYear; index++) {
        newData.push({ index });
      }
    } else {
      if (inputValue && inputValue.input) { 
      for (let lowerLimit = 1; lowerLimit <= inputValue.input; lowerLimit++) {
        newData.push({ index: lowerLimit, year: inputValue.year, winnerId: inputValue.winnerId });
      }
    }
    }
    setData(newData);
  }, [inputValue]);

 // Choose component based on inputValue
 const DynamicComponent:any = inputValue ? Race : Season;

  return( 
    <div>
      {data.map(item => (
        <DynamicComponent key={item.index} data={item} />))} 
    </div>);

};

export default List;