import { Box, Button, Paper } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState } from 'react';

const Home = () => {
    const [display, setDisplay] = useState(0);
    return (
        <Container style={{ marginTop: '30px', }} >
            <Paper style={{ backgroundColor: ' #7bc0b1 ', paddingTop: '10px', paddingBottom: '10px', paddingRight: '15px', textAlign: 'end' }} elevation={3}><h1 color='red' >{display}</h1></Paper>
            <div style={{ marginTop: '30px', }}>
                <Box style={{ margin: 10 }} justifyItems=
                    {'center'} component="span" sx={{ p: 2, border: '1px dashed grey' }}>

                    <Button style={{ margin: 5 }} onClick={() => { setDisplay(display + 1) }}>1</Button>

                </Box>
                <Box style={{ marginTop: '130px', }} justifyItems=
                    {'center'} component="span" sx={{ p: 2, border: '1px dashed grey' }}>

                    <Button style={{ margin: 5 }} onClick={() => { setDisplay(display + 1) }}>2</Button>

                </Box>
                <Box style={{ margin: 10 }} justifyItems=
                    {'center'} component="span" sx={{ p: 2, border: '1px dashed grey' }}>

                    <Button style={{
                        margin: 2
                    }} onClick={() => { setDisplay(display + 1) }}>3</Button>

                </Box>
                <Box style={{ margin: 10 }} justifyItems=
                    {'center'} component="span" sx={{ p: 2, border: '1px dashed grey' }}>

                    <Button style={{ margin: 5 }} onClick={() => { setDisplay(display + 1) }}>/</Button>

                </Box>
            </div>

            <div style={{ marginTop: '30px', }}>
                <Box style={{ margin: 10 }} justifyItems=
                    {'center'} component="span" sx={{ p: 2, border: '1px dashed grey' }}>

                    <Button style={{ margin: 5 }} onClick={() => { setDisplay(display + 1) }}>4</Button>

                </Box>
                <Box style={{ marginTop: '130px', }} justifyItems=
                    {'center'} component="span" sx={{ p: 2, border: '1px dashed grey' }}>

                    <Button style={{ margin: 5 }} onClick={() => { setDisplay(display + 1) }}>5</Button>

                </Box>
                <Box style={{ margin: 10 }} justifyItems=
                    {'center'} component="span" sx={{ p: 2, border: '1px dashed grey' }}>

                    <Button style={{
                        margin: 2
                    }} onClick={() => { setDisplay(display + 1) }}>6</Button>

                </Box>
                <Box style={{ margin: 10 }} justifyItems=
                    {'center'} component="span" sx={{ p: 2, border: '1px dashed grey' }}>

                    <Button style={{ margin: 5 }} onClick={() => { setDisplay(display + 1) }}>*</Button>

                </Box>
            </div>

            <div style={{ marginTop: '30px', }}>
                <Box style={{ margin: 10 }} justifyItems=
                    {'center'} component="span" sx={{ p: 2, border: '1px dashed grey' }}>

                    <Button style={{ margin: 5 }} onClick={() => { setDisplay(display + 1) }}>7</Button>

                </Box>
                <Box style={{ marginTop: '130px', }} justifyItems=
                    {'center'} component="span" sx={{ p: 2, border: '1px dashed grey' }}>

                    <Button style={{ margin: 5 }} onClick={() => { setDisplay(display + 1) }}>8</Button>

                </Box>
                <Box style={{ margin: 10 }} justifyItems=
                    {'center'} component="span" sx={{ p: 2, border: '1px dashed grey' }}>

                    <Button style={{
                        margin: 2
                    }} onClick={() => { setDisplay(display + 1) }}>9</Button>

                </Box>
                <Box style={{ margin: 10 }} justifyItems=
                    {'center'} component="span" sx={{ p: 2, border: '1px dashed grey' }}>

                    <Button style={{ margin: 5 }} onClick={() => { setDisplay(display + 1) }}>-</Button>

                </Box>
            </div>

            <div style={{ marginTop: '30px', }}>
                <Box style={{ margin: 10 }} justifyItems=
                    {'center'} component="span" sx={{ p: 2, border: '1px dashed grey' }}>

                    <Button style={{ margin: 5 }} onClick={() => { setDisplay(display + 1) }}>0</Button>

                </Box>
                <Box style={{ marginTop: '130px', }} justifyItems=
                    {'center'} component="span" sx={{ p: 2, border: '1px dashed grey' }}>

                    <Button style={{ margin: 5 }} onClick={() => { setDisplay(display + 1) }}>.</Button>

                </Box>
                <Box style={{ margin: 10 }} justifyItems=
                    {'center'} component="span" sx={{ p: 2, border: '1px dashed grey' }}>

                    <Button style={{
                        margin: 2
                    }} onClick={() => { setDisplay(display + 1) }}>=</Button>
                </Box>
                <Box style={{ margin: 10 }} justifyItems=
                    {'center'} component="span" sx={{ p: 2, border: '1px dashed grey' }}>

                    <Button style={{
                        margin: 2
                    }} onClick={() => { setDisplay(display + 1) }}>+</Button>
                </Box>

            </div>
        </Container >
    );
};

export default Home;