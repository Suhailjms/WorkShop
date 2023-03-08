import './Getdata.css' ;
// import ReactDOM from 'react-dom/client';
import axios from "axios"
import React, { useEffect, useState } from "react"

const Getdata=()=>
{
    const [users, setUsers] = useState([])
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const[Number,setTicket] = useState('');
    const [movie, setMovie] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [screen, setScreen] = useState('');
    const [seat, setSeat] = useState('');
  
    const handleIdChange = (event) => {
      setId(event.target.value);
    };
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
      const suhail={"id":id,"name":name,"email":email,"tickets":Number,"movie_name":movie,"date":date,"time":time,"seat":seat,"screen_no":screen,"price":price};
      axios.put("http://localhost:8080/update",suhail);
      console.log(suhail);
      alert("updated successfully");
      window.location.reload();

  
    }

  const fetchData = () => {
    axios.get("http://127.0.0.1:8080/name").then(response => {
      setUsers(response.data)
      console.log(Response.data)
    })
  }
  const handleDelete = (Id) => {
   axios.delete("http://127.0.0.1:8080/deleteById/" + Id).then(()=>{
    fetchData();})
    //  alert("Successfully deleted");
  };
  // const handleUpdate = (Id) => {
  //   axios.put("http://127.0.0.1:8080/update")
  // }

  useEffect(() => {
    fetchData()
  }, [])

  return (
       <div class="col-12">


                <div class="card-body">

                    <table class="table table-borderless">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Show Time</th>
                                <th scope="col">Movie</th>
                                <th scope="col">Date</th>
                                <th scope="col">Number of Tickets</th>
                                <th scope="col">Price</th>
                                <th scope="col">Screen_No</th>
                                <th scope="col">Seat_No</th>
                                <th scope="col">Update</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody class="table_body">
                        {users.length > 0 && (
                            <>
                        {users.map(user => (
                            <tr>
                            <td key={user.suhail}>{user.id}</td>
                            <td key={user.suhail}>{user.name}</td>
                            <td key={user.suhail}>{user.email}</td>
                            <td key={user.suhail}>{user.time}</td>
                            <td key={user.suhail}>{user.movie_name}</td>
                            <td key={user.suhail}>{user.date}</td>
                            <td key={user.suhail}>{user.tickets}</td>
                            <td key={user.suhail}>{user.price}</td>
                            <td key={user.suhail}>{user.screen_no}</td>
                            <td key={user.suhail}>{user.seat}</td>
                            <td><button className="update">Update</button></td>
                            <td><button className="btn-btn-danger" onClick={() => {handleDelete(user.id)}}>Delete</button></td>
                            </tr>
                        ))}
                        </>
                        )}
                        </tbody>

                    </table>

                </div>
         <form className="ticket-booking-form" onSubmit={handleSubmit}>
         <label>
        ID:
      </label>  
        <input className="form-input" type="text" value={id} onChange={handleIdChange} />
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
      <button className="form-button" type="submit">update Ticket</button>
    </form>
        </div>
  )
}

export default Getdata;