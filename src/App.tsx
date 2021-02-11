import Palette from "./layout/Palette";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Pokemon from "./components/Pokemon";
import { Grid } from "@material-ui/core";

function App() {
    return (
        <Palette>
            <Grid container justify="space-around">
                
				<Grid item lg={12}>
					<Typography variant="h1">Poke API :D</Typography>
				</Grid>				
				<Grid lg={3}>
					<Pokemon id={10}/>
				</Grid>
				<Grid lg={3}>
					<Pokemon id={20}/>
				</Grid>
				<Grid lg={3}>
					<Pokemon id={30}/>
				</Grid>
				<Grid lg={3}>
					<Pokemon id={19}/>
				</Grid>                
            </Grid>
        </Palette>
    );
}

export default App;
