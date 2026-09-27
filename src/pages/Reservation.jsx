import { useState } from "react";
import { supabase } from "../supabase";

function Reservation() {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    guests: "2",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { error } = await supabase
      .from("reservations")
      .insert([
        {
          name: formData.name,
          date: formData.date,
          time: formData.time,
          guests: Number(formData.guests),
        },
      ]);

    if (error) {
      console.error(error);
      alert("Something went wrong while making the reservation.");
      return;
    }

    alert("Your table has been reserved successfully! ☕");

    setFormData({
      name: "",
      date: "",
      time: "",
      guests: "2",
    });
  };

  return (
    <main className="reservation-page">
      <p className="welcome-text">TABLE RESERVATION</p>

      <h1>Reserve Your Table</h1>

      <p>
        Choose your preferred date, time and number of guests.
      </p>

      <form className="reservation-form" onSubmit={handleSubmit}>
        <label>Name</label>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />

        <label>Date</label>

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <label>Time</label>

        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />

        <label>Number of Guests</label>

        <select
          name="guests"
          value={formData.guests}
          onChange={handleChange}
        >
          <option value="1">1 Guest</option>
          <option value="2">2 Guests</option>
          <option value="3">3 Guests</option>
          <option value="4">4 Guests</option>
          <option value="5">5 Guests</option>
          <option value="6">6 Guests</option>
        </select>

        <button type="submit">
          Reserve Table
        </button>
      </form>
    </main>
  );
}

export default Reservation;
