import { Products } from './components/products';
 import contents from './content';
 import{PaginatedItems} from './components/PaginatedItems';
 import ReactDOM from 'react-dom';
 import{Header} from './components/Header';

 export default function App() {
     return(
      
            <div className='App'>
                {contents.map(contents => (
                  // ReactDOM.render(
                  //   <PaginatedItems itemsPerPage={4} />,
                  //   document.getElementById('container')
                  // )
                  
                    <Products 
                        key={contents.id}
                        image={contents.image}
                        name={contents.name}
                        price={contents.price}
                        totalSales={contents.totalSales}
                        timeLeft={contents.timeLeft}
                        rating={contents.rating}
                    />
                    
                ))}
               
                
            </div>
     )
 }