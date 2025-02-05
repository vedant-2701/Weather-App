import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import ClearSkyImage from "./assets/clear-sky.png";
// import CardActions from '@mui/material/CardActions';
// import Button from '@mui/material/Button';
import InfoBoxImage from '../box-img/InfoBoxImage';
import "../../../styles/InfoBox.css";
import WeatherDetails from '../../weather-details/WeatherDetails';

export default function InfoBox({info}) {
    return (
        <div className="InfoBox">

            <div className="card">
                <Card sx={{ maxWidth: 345 }}>
                    {/* <CardMedia
                        component="img"
                        alt="ClearSkyImage"
                        height="250"
                        image={ClearSkyImage}
                    /> */}

                    <InfoBoxImage weather={info.temp < 10 ? "Cold" : info.weather} />

                    <CardContent style={{padding: ".5rem 5rem 0"}}>
                        <Typography gutterBottom variant="h5" component="div" style={{textAlign: "center"}}>
                            {info.city}
                        </Typography>

                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"} style={{textAlign: "left"}}>
                            <WeatherDetails info={info}/>
                        </Typography>
                    </CardContent>

                    {/* <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions> */}
                </Card>
            </div>
        </div>
    );
};
