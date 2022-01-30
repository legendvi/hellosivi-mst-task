//This component gives a grid within which we can have items in rows and columns
import { observer } from "mobx-react-lite";
// imports all required components from MUI library, BasicCard and data that has to be inserted
import BasicCard from "../Layout/BasicCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import store from "../store/app-store";

function RenderCard(props) {
  //this is a stateless function that renders the grid view
  //The columns of this grid are cards that are returned from BasicCard components
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2.4} justifyContent={"space-beween"}>
        {store.itemListRendered.map((item, index) => {
          return (
            <Grid item md={4} sm={6} lg={3} xl={2.4} xs={12} key={index}>
              <BasicCard item={item} index={index} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
//observer is used to listen to changes in the app state and render components
//RenderCard is the only component that is listening to state Changes in this project
export default observer(RenderCard);
