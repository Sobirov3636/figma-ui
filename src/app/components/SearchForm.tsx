import React from "react";
import { Box, TextField, IconButton, InputAdornment } from "@mui/material";
import "../../scss/searchForm.scss";

function SearchForm() {
  return (
    <Box className='search-form'>
      <TextField
        fullWidth
        placeholder='후속 질문을 물어보세요.'
        variant='outlined'
        className='search-input'
        InputProps={{
          endAdornment: (
            <>
              <InputAdornment position='end'>
                <IconButton sx={{ padding: 1 }}>
                  <img height='30px' width='30px' src='/icons/upload.svg' alt='' />
                </IconButton>
              </InputAdornment>
              <InputAdornment position='end'>
                {" "}
                <IconButton color='primary' sx={{ padding: 0 }}>
                  <img height='30px' width='30px' src='/icons/generate.svg' alt='' />
                </IconButton>
              </InputAdornment>
            </>
          ),
        }}
      />
    </Box>
  );
}

export default SearchForm;
