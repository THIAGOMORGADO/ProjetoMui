import { ToolBar } from "../../shared/components";
import { LayoutBase } from "../../shared/layouts"

export const Dashboard = () => {
  return(
   <LayoutBase titulo="dashboard" barraDeFerramentas={(
    <ToolBar 
        showInputSearch
           
       />
   )}>
     
   </LayoutBase>
  );
};
