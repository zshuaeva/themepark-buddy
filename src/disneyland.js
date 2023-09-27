import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DisneylandUSA() {
    axios.get('http://localhost:3001/api/data')
    .then((response) => {
      console.log(response, "this is the response")
    })
    .catch((error) =>
    console.log(error, "this is an error"))

    return (
      <>
      </>
    )

  }

export default DisneylandUSA;
