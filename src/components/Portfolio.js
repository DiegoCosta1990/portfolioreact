import React from 'react';
import '../styles/Portfolio.css';
import ReactCardCarousel from "react-card-carousel";
import { 
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.JPG';
import project3 from '../assets/project3.JPG';
import project4 from '../assets/project4.JPG';
import project5 from '../assets/project5.jpg';



const useStyles =  makeStyles({
    mainContainer: {
      position: "relative",
      minHeight: "100vh",
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignContent: "center"      
    },
    cardContainer: {
        maxWidth: 600,
        Height: 500,
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignContent: "center"
    }
});

const Portfolio = () => {

    const classes = useStyles();

    return (
        <Box component= "div" className={classes.mainContainer}>
            <Typography variant="h3" align="center" style={{position: "absolute", marginTop: "40px" }}color="initial">Portfolio</Typography>            
              <Grid container  justify="center">
              <ReactCardCarousel disable_box_shadow={true} spread="wide" autoplay={ true } autoplay_speed={ 4300 }>
                    <Grid item xs={12}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia component="img" alt="proyect1" height="140" image={ project1 }/>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" color="initial">
                                        Front End <i>Netflix Clone</i>
                                    </Typography>
                                    <Typography variant="body2" color="textSecundary" component="p">
                                        A front end example of a Netflix clone built with React.js, API, NPM React Packages, axios and deployed Firebase.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary" href="https://netflix-clone-d8a63.web.app/">
                                        Live Demo
                                    </Button>
                                </CardActions>
                            </CardActionArea>
                        </Card>                    
                    </Grid>
                    <Grid item xs={12}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia component="img" alt="proyect2" height="140" image={ project2 }/>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" color="initial">
                                        <i>Movie Finder Proyect</i>
                                    </Typography>
                                    <Typography variant="body2" color="textSecundary" component="p">
                                        A Movie Finder App built with React.js, using the Imdb API and deployed with surge.sh.
                                        You can find and filter your favorite movie and see the data bring thanks to Imdb.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary" href="http://diegocosta-search-movie.surge.sh/">
                                        Live Demo
                                    </Button>
                                </CardActions>
                            </CardActionArea>
                        </Card>                    
                    </Grid>
                    <Grid item xs={12}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia component="img" alt="proyect3" height="140" image={ project3 }/>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" color="initial">
                                        <i>React.js / Material UI Simple Website</i>
                                    </Typography>
                                    <Typography variant="body2" color="textSecundary" component="p">
                                        Simple Website with React.js and Material UI from scratch, learning some MUI basis and some Css decorations.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary" href="http://diegocosta-react-material-ui.surge.sh/">
                                        Live Demo
                                    </Button>
                                </CardActions>
                            </CardActionArea>
                        </Card>                    
                    </Grid>
                    <Grid item xs={12}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia component="img" alt="proyect4" height="140" image={ project4 }/>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" color="initial">
                                        MERN Full Stack <i>Tinder Clone</i>
                                    </Typography>
                                    <Typography variant="body2" color="textSecundary" component="p">
                                        A MERN Full Stack Tinder Clone with the frontend deployed in Firebase and the backend deployed in Heroku.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary" href="https://tinderclone-ef528.web.app/">
                                        Live Demo
                                    </Button>
                                </CardActions>
                            </CardActionArea>
                        </Card>                    
                    </Grid>
                    <Grid item xs={12}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia component="img" alt="proyect5" height="140" image={ project5 }/>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" color="initial">
                                        MERN Full Stack Simple <i>Tik tok Clone</i>
                                    </Typography>
                                    <Typography variant="body2" color="textSecundary" component="p">
                                        A Simple MERN Full Stack Tiktok Clone with the frontend deployed in Firebase and the backend deployed in Heroku.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary" href="https://tiktokclone-5c5a9.firebaseapp.com/">
                                        Live Demo
                                    </Button>
                                </CardActions>
                            </CardActionArea>
                        </Card>                    
                    </Grid>
                  </ReactCardCarousel>    
              </Grid>                 
        </Box>
    )
}

export default Portfolio;