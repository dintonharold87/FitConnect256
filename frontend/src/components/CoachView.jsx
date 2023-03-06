import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import axios from "axios";
const CoachView = () => {
  const { id } = useParams();
  // const history = useHistory;
  const [coach, setCoach] = useState({});
  // console.log(JSON.stringify(token));
  const token= localStorage.getItem('token');

  useEffect(() => {
    const fetchCoachDetails = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/coaches/${id}`,
          {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}}` },
          }
        );
        setCoach(response.data.coaches);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCoachDetails();
  }, [id, token]);
  return (
    <>
      <h1 className="mt-12">Coach </h1>
      <p>Name: {coach.name}</p>
      <p>Name: {coach.email}</p>
    </>
  );
};

export default CoachView;
