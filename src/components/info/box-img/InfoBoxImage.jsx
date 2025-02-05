import Typography from '@mui/material/Typography';
import ClearSkyImage from '../../../assets/clear-sky.png';
import cold from '../../../assets/cold.png';
import rainy from '../../../assets/rainy.png';
import mist from '../../../assets/mist.png';
import cloudy from '../../../assets/cloudy.png';
import { useState, useEffect } from 'react';
import {ImageButton, ImageSrc, Image, ImageBackdrop, ImageMarked} from "../../../config/ButtonImageConfig";

// Custom capitalize function
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

export default function InfoBoxImage({weather}) {
    const [boxImg, setBoxImg] = useState(weather);   
    
    const getImg = {
        "Clear": ClearSkyImage,
        "Rainy": rainy,
        "Cold": cold,
        "Mist": mist,
        "Clouds": cloudy
    }

    useEffect(() => {
        setBoxImg(weather);
        image.url = getImg[boxImg];
    }, [weather]);

    const image = {
        url: getImg[boxImg], // Directly reference the image from the img object
        title: capitalize(boxImg), // Use custom capitalize function
        width: '100%',
    };

    
    return (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={(theme) => ({
                position: 'relative',
                p: 4,
                pt: 2,
                pb: `calc(${theme.spacing(1)} + 6px)`,
              })}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
    );
};
