import Palette from "./layout/Palette";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Grid } from "@material-ui/core";
import PokemonSeeker from "./components/PokemonSeeker/PokemonSeeker";
import PokemonsList from "./components/PokemonList";

function App() {
    return (
        <Palette>
            <Grid container justify="space-around">
				<Grid item lg={12}>
					<Typography variant="h1">Poke API</Typography>
				</Grid>		
				<Grid item lg={12}>
					<PokemonsList/>
				</Grid>		

				<Grid item lg={12}>
					<PokemonSeeker/>
				</Grid>						
            </Grid>
        </Palette>
    );
}

export default App;
