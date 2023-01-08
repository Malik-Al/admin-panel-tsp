import React, { useState, useEffect } from 'react';
import RightNavigation from './RightNavigation';
import SimpleAccordion from '../component/Category/SimpleAccordion';
import config from '../config.json'
import axios from 'axios'
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom'
import SpinnerComponent from '../component/SpinnerComponent';

function CategoryPage (){
    const [category, setCategory] = useState([]);
    let navigate = useNavigate()

    useEffect(() => {
        axios.get(config.host.category)
        .then(res => {
            const response = res.data.data
            setCategory(response)
        })
        .catch(error => error)
      }, []);


    return (
        <>
        <RightNavigation>
            {/* <h1>Category</h1> */}
            <Button 
                    style={{margin:'5px', fontSize: '15px'}} 
                    variant="contained"
                    color="success"
                    onClick={() => navigate('/category/create')}
                >
                    Добавить Категорию 
                 </Button>

            <div>
                {
                category.length 
                ?
                    category.map(item =>
                        <SimpleAccordion key={item.category_id} category={item}/>
                    )
                :
                <SpinnerComponent/>
                }
            </div>
        </RightNavigation>
    </>
    )
}
  
export default CategoryPage;