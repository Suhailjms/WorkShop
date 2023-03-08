import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './TicketBooking.css';

function Home() {
  const nav = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const[Number,setTicket] = useState('');
  const [movie, setMovie] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [screen, setScreen] = useState('');
  const [seat, setSeat] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMovieChange = (event) => {
    setMovie(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleSeatChange = (event) => {
    setSeat(event.target.value);
  };
  const handleTicketChange = (event) => {
    setTicket(event.target.value);
  };
  const handleScreenChange = (event) => {
    setScreen(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let price = (200*Number);
    const suhail={"name":name,"email":email,"tickets":Number,"movie_name":movie,"date":date,"time":time,"seat":seat,"screen_no":screen,"price":price};
    axios.post("http://localhost:8080/savedata",suhail);
    alert("Added");
    nav("/data");

  }

  return (
    <div className="suhail">
    <form className="ticket-booking-form" onSubmit={handleSubmit}>
      <label>
        Name:
      </label>  
        <input className="form-input" type="text" value={name} onChange={handleNameChange} />
      <label>
        Email:
      </label>
        <input className="form-input" type="email" value={email} onChange={handleEmailChange} />
      <label>
        Number of Tickets:
      </label>
        <input className="form-input" type="Tickets" value={Number} onChange={handleTicketChange} />
      <label>
      Movie:
      </label>
            <select className="form-select" value={movie} onChange={handleMovieChange}>
            <option value="">Select a movie</option>
            <option>Interstellar</option>
            <option>Titanic</option>
            <option>Demon Slayer</option>
            </select>
      <label>
        Date:
      </label>
        <input className="form-input" type="date" value={date} onChange={handleDateChange} />
      <label>
        Time:
      </label>
        <select className="form-select" value={time} onChange={handleTimeChange} >
        <option value="">Select Timing</option>
          <option>9:00am</option>
          <option>12:00pm</option>
          <option>3:00pm</option>
          <option>7:00pm</option>
          <option>10:00pm</option>
        </select>
      <label>
        Seat:
      </label>
        <input className="form-input" type="text" value={seat} onChange={handleSeatChange} />
      <label>
        Screen No:
      </label>
        <input className="form-input" type="text" value={screen} onChange={handleScreenChange} />   
      <button className="form-button" type="submit">Book Ticket</button>
    </form>
    </div>
  );
}
export default Home;