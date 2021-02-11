import { Card, createStyles, makeStyles, Typography } from "@material-ui/core";
import { useState, useEffect } from "react";
import PokeApi from "../classes/PokeApi";
import Pokemon from "../classes/Pokemon";
import PokemonRepository from '../classes/PokemonRepository'

const useStyles = makeStyles(() =>
  createStyles({    
    paper: {
      padding: "1em",
      width:"90%",
      margin:"auto",
      textAlign: 'center',
    },
    h3:{
        textTransform: "capitalize",
    }
  }),
);
type pokemon = {
    id: number;
    name?: string;
    base_experience?: number;
    height?: number;
    is_default?: boolean;
    order?: number;
    weight?: number;
};
export default function PokemonCard({ id }: pokemon) {
    const [pokemon, setPokemon] = useState<Pokemon>();
    const classes = useStyles();
    useEffect(() => {
        let repo:PokemonRepository = new PokeApi()
        repo.getPokemon(id)
        .then(response => setPokemon(response))
    }, [id]);
    return (        
            <Card className={classes.paper}>
                <Typography variant="h3" className={classes.h3} >{pokemon?.name}</Typography>
                <Typography variant="body1">
                    Height: {pokemon?.height}
                </Typography>
                <Typography variant="body1">
                    Weight: {pokemon?.weight}
                </Typography>
                <Typography variant="body1">
                    Base Experience: {pokemon?.base_experience}
                </Typography>
            </Card>     
    );
}
