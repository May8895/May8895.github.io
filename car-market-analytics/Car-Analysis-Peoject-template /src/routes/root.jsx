// import { Link,Outlet ,NavLink,} from "react-router-dom";
// import './Root.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';


// export default function Root() {
//     return (
//       <>
      
//         <div id="sidebar">
        
          
//           <nav>
           
//             <ul>
            
//             <li>
//             <h1 style={{ fontFamily: 'Arial, sans-serif', fontSize: '1rem', fontWeight: 800 }}>
//                  <i className="bi bi-car-front"></i> Car Analysis
//                    </h1>
//               <NavLink
//                 to="/dashboard"
                
//                 className={({ isActive, isPending }) =>
//                   isActive
//                     ? "active"     // Apply "active" class when this route is active
//                     : isPending
//                     ? "pending"    // Apply "pending" class when this route is loading
//                     : ""
//                 }
//               >
//                 <i className="bi bi-house-door">  Dashboard</i>
//               </NavLink>
              
//             </li>
//             <li>
//               <NavLink
//                 to="/highlighted"
//                 className={({ isActive, isPending }) =>
//                   isActive
//                     ? "active"
//                     : isPending
//                     ? "pending"
//                     : ""
//                 }
//               >
//                <i class="bi bi-bag-heart">  Highlighted</i> 
//               </NavLink>
//             </li>
            
//           </ul>
//           </nav>
//         </div>
//         <div id="detail">
//         <Outlet />

//         </div>
//       </>
//     );
// }
import { Link,Outlet ,NavLink,} from "react-router-dom";
import './Root.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


export default function Root() {
    return (
      <>
      
        <div id="sidebar">
        
          
          <nav>
           
            <ul>
            
            <li>
            <h1 style={{ fontFamily: 'Arial, sans-serif', fontSize: '1rem', fontWeight: 800 }}>
                 <i className="bi bi-car-front"></i> Car Analysis
                   </h1>
              <Link
                to="/car-market-analytics"
                
                // className={({ isActive, isPending }) =>
                //   isActive
                //     ? "active"     // Apply "active" class when this route is active
                //     : isPending
                //     ? "pending"    // Apply "pending" class when this route is loading
                //     : ""
                // }
              >
                <i className="bi bi-house-door">  Home</i>
              </Link>
              
            </li>
            <li>
              <NavLink
                to="/car-market-analytics/dashboard"
                className={({ isActive, isPending }) =>
                  isActive
                    ? "active"
                    : isPending
                    ? "pending"
                    : ""
                }
              >
               <i class="bi bi-table"> Dashboard</i> 
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/car-market-analytics/hightlighted"
                className={({ isActive, isPending }) =>
                  isActive
                    ? "active"
                    : isPending
                    ? "pending"
                    : ""
                }
              >
               <i class="bi bi-bag-heart">  Highlighted</i> 
              </NavLink>
            </li>
            
          </ul>
          </nav>
        </div>
        <div id="detail">
        <Outlet />

        </div>
      </>
    );
}
