// This is a card layout used to display individual items in the grid
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  CardMedia,
} from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
export default function BasicCard({
  imageUrl,
  category,
  name,
  price,
  rating,
  stock,
}) {
  //This take props from Render Component and returns Card view for each element
  return (
    <Card sx={{ minWidth: 275, borderRadius: 25 }} onClick={undefined}>
      <CardContent>
        <CardHeader
          style={{ textalign: "center" }}
          title={name}
          subheader={category}
        />

        <CardMedia
          component="img"
          height="200"
          style={{ objectFit: "contain" }}
          image={imageUrl}
          alt={name}
        />
        <Typography textAlign="center" variant="h5" component="div">
          <StarBorderIcon /> {rating}
        </Typography>
        <Typography textAlign="center" variant="h4" component="div">
          Rs: {price}
        </Typography>
        <Typography textAlign="center" variant="body2">
          Available Items: {stock}
        </Typography>
      </CardContent>
    </Card>
  );
}
