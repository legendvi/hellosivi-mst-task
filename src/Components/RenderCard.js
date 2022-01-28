//This component gives a grid within which we can have items in rows and columns
import { observer } from "mobx-react-lite";
// imports all required components from MUI library, BasicCard and data that has to be inserted
import BasicCard from "../Layout/BasicCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import store from "../store/app-store";
import { Container } from "@mui/material";

function RenderCard(props) {
  //this is a stateless function that renders the grid view
  //The columns of this grid are cards that are returned from BasicCard components
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#1976d2" }}>
      <Container>
        <Grid container spacing={2}>
          {store.itemListRendered.map((item, index) => {
            return (
              <Grid item md={6} sm={12} lg={3} key={index}>
                <BasicCard
                  name={`${item.name}`}
                  category={item.category}
                  imageUrl={item.imageUrl}
                  key={item.id}
                  price={item.price}
                  rating={item.rating}
                  stock={item.stock}
                  index={index}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
//observer is used to listen to changes in the app state and render components
//RenderCard is the only component that is listening to state Changes in this project
export default observer(RenderCard);
