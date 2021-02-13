import { createStyles, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import PokemonCard from "../Pokemon";

import PokemonSeekerForm from "./PokemonSeekerForm";
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      margin:"2em 0"
    },
  }),
);
export default function PokemonSeeker() {
    const classes = useStyles()
    const [id, setId] = useState("1");
    const [value, setValue] = useState("1");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setId(e.target.value);
    };
    const handleClick = () => {
        setValue(id);
    };
    return (
        <Grid container justify="center">
            <Grid item lg={10} sm={12} xs={12}>
                <PokemonSeekerForm
                    value={id}
                    handleClick={handleClick}
                    handleChange={handleChange}
                />
            </Grid>
            <Grid item lg={6} sm={12} xs={12} className={classes.root}>
                <PokemonCard id={value}/>
            </Grid>
        </Grid>
    );
}
