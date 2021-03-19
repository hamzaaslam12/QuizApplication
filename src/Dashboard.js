import React, {useState} from 'react';

const Dashboard = () => {
          const [qust, setQust] = useState([
          { Q1: '2 + 2',
            A1: '3',
            B1: '4',
            C1: '5'
          },
          { Q2: '2 + 12',
            A2: '13',
            B2: '14',
            C2: '15'
          }
          ])          
          return ( 
          <div>
                    <h2>HELLO HAMZA</h2>
          </div> 
          );
}
 
export default Dashboard;