import { Button, Grid, TextField } from "@material-ui/core";
import React from "react";

interface Props {
    value: string
    handleClick():void
    handleChange(e: React.ChangeEvent<HTMLInputElement>):void
}

const PokemonSeekerForm = (props: Props) => {
    return ( 
            <Grid container justify="center" alignItems="center" spacing={2}>
                <Grid item lg={4}>
                    <TextField
                        fullWidth
                        value={props.value}
                        onChange={props.handleChange}
                        label="Search Pokemon"
                        variant="outlined"
                    />
                </Grid>
                <Grid item lg={2}>
                    <Button variant="contained" color="primary" onClick={props.handleClick}>Search</Button>
                </Grid>
            </Grid>        
    );
};

export default PokemonSeekerForm;
