import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom'

export const BasicTabs = ({current, items}) => {
        
    const navigate = useNavigate();
    
    const handleChange = (_, newValue) => {
        navigate('/products/' + newValue);
    };

    

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', display:'flex', justifyContent:'center', margin:'0.5rem 0rem' }}>
                <Tabs value={current} onChange={handleChange} aria-label="basic tabs example">
                    {
                        items.map((item, index) => {
                            return(
                                <Tab key={item.id + index} value={item.id} label={item.name}  />
                            )
                        })
                    }
                </Tabs>
            </Box>
            
        </Box>
    )
}