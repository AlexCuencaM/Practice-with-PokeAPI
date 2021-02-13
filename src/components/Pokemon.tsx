import { Card, createStyles, makeStyles, Theme, Typography } from "@material-ui/core";
import { useState, useEffect } from "react";
import PokeApi from "../classes/PokeApi";
//import PokeTest from "../classes/PokeTest";
import Pokemon from "../classes/Pokemon";
import PokemonRepository from "../classes/PokemonRepository";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            padding: "1em",
            width: "90%",
            margin: "auto",
            marginBottom:"1em",
            textAlign: "center",
            borderTop:`50px solid ${theme.palette.primary.main}`,            

        },
        h3: {
            textTransform: "capitalize",
        },
    })
);
type pokemon = {    
    id: string;    
};
export default function PokemonCard({ id }: pokemon) {
    const [pokemon, setPokemon] = useState<Pokemon>();
    const classes = useStyles();
    useEffect(() => {
        async function api() {
            let repo: PokemonRepository = new PokeApi();
            await repo.getPokemon(id)
                .then((response) => setPokemon(response))
                .catch(error=>alert("No se encontró su pokemon :c"))                
        }
        api()
    }, [id]);
    return (
        <Card className={classes.paper}>
            <Typography variant="h3" className={classes.h3}>
                {pokemon?.name}
            </Typography>
            <img src={pokemon?.imageUrl} alt={pokemon?.name} height="150px" width="150px" />
            <Typography variant="body1">Id: {pokemon?.id}</Typography>
            <Typography variant="body1">Height: {pokemon?.height}</Typography>
            <Typography variant="body1">Weight: {pokemon?.weight}</Typography>
            <Typography variant="body1">
                Base Experience: {pokemon?.base_experience}
            </Typography>
        </Card>
    );
}
