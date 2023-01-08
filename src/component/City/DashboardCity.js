import React, {useState, useEffect} from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Nav from 'react-bootstrap/Nav';
import config from '../../config.json'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import CityPage from '../../page/CityPage';



export default function DashboardCity({cityName}) {
  let navigate = useNavigate()
  const [city, setCity] = useState([])
  const [cityId, setCityId] = useState('')
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);


  useEffect(() => {
    axios.get(config.host.city)
    .then(res => {
        const response = res.data.data
        setCity(response)
    })
    .catch(error => error)
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    console.log('e.target.attributes.value.value', e.target.attributes.value.value);
    // navigate({
    //     pathname: e.target.attributes.value.value,
    //     search: '/city'
    // })
    navigate('/city')
    
  };




  return (
    <div>
      <Nav.Link
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {cityName}
      </Nav.Link>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{'aria-labelledby': 'basic-button',}}
      >
        {
            city.map(item => 
                <MenuItem 
                    key={item.city_id} 
                    value={item.city_id} 
                    onClick={handleClose}
                    >
                        {item.city_name['ru-RU']}
                </MenuItem>
            )
        }

      </Menu>
    </div>
  );
}
