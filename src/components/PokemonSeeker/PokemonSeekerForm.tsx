import { Button, Grid, TextField } from "@material-ui/core";
import React from "react";
import SearchIcon from '@material-ui/icons/Search';

interface Props {
    value: string
    handleClick():void
    handleChange(e: React.ChangeEvent<HTMLInputElement>):void
}

const PokemonSeekerForm = (props: Props) => {
    return ( 
            <Grid container justify="center" alignItems="center">
                <Grid item lg={4} sm={3} xs={6}>
                    <TextField
                        fullWidth
                        value={props.value}
                        onChange={props.handleChange}
                        label="Search Pokemon"
                        variant="outlined"
                    />
                </Grid>
                <Grid item lg={2} sm={3} xs={2}>
                    <Button color="primary" onClick={props.handleClick}><SearchIcon/></Button>
                </Grid>
            </Grid>        
    );
};

export default PokemonSeekerForm;
