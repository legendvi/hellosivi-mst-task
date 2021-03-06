// This is a card layout used to display individual items in the grid
import "./BasicCard.css";
import { Card, CardContent, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
export default function BasicCard({ item }) {
  //This take props from Render Component and returns Card view for each element
  return (
    <>
      <Card
        border="light"
        style={{
          Width: 432,
          Height: 505,
          border: "none",
          boxShadow: "none",
          marginBottom: 4,
        }}
      >
        <CardContent style={{ padding: 0 }}>
          <div
            // className="imagediv"
            style={{ width: 432, height: 310, position: "relative" }}
          >
            <img
              src={item.imageUrl}
              alt={item.name}
              style={{ objectFit: "fill", Width: "100%", maxHeight: "100%" }}
            ></img>
            <div
              // className="ratingdiv"
              style={{
                position: "absolute",
                top: 268,
                left: 10,
                backgroundColor: "white",
                opacity: "0.9",
                borderRadius: "0.15em",
                padding: 4,
                width: 95,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography
                textAlign="left"
                component="div"
                style={{ fontWeight: "bold", fontSize: 14 }}
              >
                {item.rating}{" "}
                <StarIcon
                  style={{ color: "teal", fontSize: 18, marginBottom: 2 }}
                />{" "}
                | {item.totalReviews}
              </Typography>
            </div>
          </div>
          <div style={{ margin: 0, padding: 6 }}>
            <header
              style={{
                textalign: "left",
                fontSize: "1.2rem",
                fontWeight: "bold",
              }}
            >
              {item.name}
            </header>
            <header style={{ textalign: "left" }}>{item.category}</header>
            <Typography textAlign="left" component="div" variant="body3">
              <span style={{ fontWeight: "bold" }}> Rs. {item.price} </span>
              <strike style={{ color: "grey" }}>
                Rs. {item.originalPrice}
              </strike>
              <span style={{ color: "orange" }}> ({item.offer}% OFF)</span>
            </Typography>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
