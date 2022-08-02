import { Route, Redirect } from 'react-router-dom';
 
const RouteGuard = ({ component: Component, ...rest }) => {
 
   const hasJWT = () => localStorage.getItem("token") && true;
 
   return (
       <Route {...rest}
           render={props => (
                hasJWT() ?
                   <Component {...props} />
                   :
                   <Redirect to={{ pathname: '/login' }} />
           )}
       />
   );
};
 
export default RouteGuard;
