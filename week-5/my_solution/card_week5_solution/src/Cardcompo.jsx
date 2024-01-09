import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
function Cardcomponent(props) {
  return (
    <Card style={{ width: "500px", margin: "auto", marginTop: "100px" }}>
      <CardContent
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <Typography variant="h4" gutterBottom sx={{ color: "#42a5f7" }}>
          {props.name}
        </Typography>
        <Typography variant="h6" gutterBottom sx={{ color: "text.secondary" }}>
          {props.description}
        </Typography>
        <Typography variant="h5" gutterBottom sx={{ paddingRight: "40%" }}>
          My Interests
        </Typography>
        <ul
          style={{
            listStyle: "dotted",
            paddingRight: "40%",
            paddingTop: "1px",
          }}>
          {props.myInterests.map((interest, index) => (
            <li
              key={index}
              style={{
                fontSize: "18px",
              }}>
              {interest}
            </li>
          ))}
        </ul>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Button variant="contained" style={{ marginRight: "10px" }}>
            Linkedin
          </Button>
          <Button variant="contained">Twitter</Button>
        </div>
      </CardContent>
    </Card>
  );
}
export default Cardcomponent;
