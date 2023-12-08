import { AppRoute } from "./routes"
import { DraweMenu } from "./shared/components"

export const App = () => {
  return(
    <> 
      <DraweMenu>
        <AppRoute />
      </DraweMenu>
      
    </>
     
  )
}
