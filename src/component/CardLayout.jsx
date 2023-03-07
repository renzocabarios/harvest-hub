import { Card } from "@/component";
import Grid from "@mui/material/Grid";
import { generateKey } from "@/services/generateKey";

export default function (props) {
  const { data } = props;
  return (
    <>
      <Grid container spacing={4}>
        {data.map((e) => {
          return (
            <Grid item key={generateKey(5)} xs={12} sm={6} md={2}>
              <Card name={e.name} price={e.price} description={e.description} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
