import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import "../../styles/SearchBox.css";
import { useState } from 'react';
import { getWeather } from '../../helper/getWeather';

export default function SearchBox({ updateInfo }) {

    const [city, setCity] = useState("");

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = async (evt) => {
        evt.preventDefault();
        console.log(city);
        
        setCity("");

        let weatherInfo = await getWeather(city);
        updateInfo(weatherInfo);
    };

    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField fullWidth id="city" label="City Name" variant="outlined" size='small' required value={city} onChange={handleChange}/>
                <Button variant="outlined" type='submit' endIcon={<SearchIcon />} size='large'>
                    Search
                </Button>
            </form>
        </div>
    );
};
