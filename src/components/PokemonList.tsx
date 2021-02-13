import { createStyles, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import Pokemon from "./Pokemon";
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      padding:"2em 0"
    },
  }),
);
const PokemonsList = () => {
	const classes = useStyles()
    return (
        <Grid container justify="space-between" className={classes.root}>            
            <Grid item lg={3}>
                <Pokemon id={"10"} />
            </Grid>
            <Grid item lg={3}>
                <Pokemon id={"20"} />
            </Grid>
            <Grid item lg={3}>
                <Pokemon id={"30"} />
            </Grid>
            <Grid item lg={3}>
                <Pokemon id={"pikachu"} />
            </Grid>
        </Grid>
    );
};

export default PokemonsList;
