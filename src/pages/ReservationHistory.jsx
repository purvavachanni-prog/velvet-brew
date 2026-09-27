import { useEffect, useState } from "react";
import { supabase } from "../supabase";

function ReservationHistory() {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchReservations = async () => {
    const { data, error } = await supabase
      .from("reservations")
      .select("*")
      .order("created_at", {
        ascending: false,
      });

    if (error) {
      console.error(error);
      alert("Unable to load reservations.");
      setLoading(false);
      return;
    }

    setReservations(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  const cancelReservation = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to cancel this reservation?"
    );

    if (!confirmed) {
      return;
    }

    const { error } = await supabase
      .from("reservations")
      .delete()
      .eq("id", id);

    if (error) {
      console.error(error);
      alert("Unable to cancel reservation.");
      return;
    }

    setReservations(
      reservations.filter(
        (reservation) => reservation.id !== id
      )
    );
  };

  return (
    <main className="history-page">
      <p className="welcome-text">YOUR RESERVATIONS</p>

      <h1>Reservation History</h1>

      {loading ? (
        <div className="empty-history">
          <p>Loading reservations...</p>
        </div>
      ) : reservations.length === 0 ? (
        <div className="empty-history">
          <p>You don't have any reservations yet.</p>
        </div>
      ) : (
        <div className="history-table-wrapper">
          <table className="history-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Time</th>
                <th>Guests</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {reservations.map((reservation) => (
                <tr key={reservation.id}>
                  <td>{reservation.name}</td>
                  <td>{reservation.date}</td>
                  <td>{reservation.time}</td>
                  <td>{reservation.guests}</td>

                  <td>
                    <button
                      className="cancel-button"
                      onClick={() =>
                        cancelReservation(reservation.id)
                      }
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}

export default ReservationHistory;