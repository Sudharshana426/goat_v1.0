import React, { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';
export { SensorsData };
const SensorsData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from('Sensors_data') // Replace with your table name
          .select('*'); // Fetch all columns

        if (error) {
          console.error('Error fetching data:', error.message);
        } else {
          setData(data);
        }
      } catch (err) {
        console.error('Unexpected error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Sensor Data</h1>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Temperature</th>
            <th>Humidity</th>
            <th>Moisture</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.temperature}</td>
              <td>{row.humidity}</td>
              <td>{row.moisture}</td>
              <td>{row.inserted_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SensorsData;
