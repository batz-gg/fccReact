import { useState } from "react";
import "./eventRSVP.css";

export function EventRSVPForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [attendee, setAttendee] = useState(0);
  const [dietary, setDietary] = useState("");
  const [guest, setGuest] = useState(false);
  const [report, setReport] = useState("none");
  
  const handleSubmit = e => {
    e.preventDefault();
    setReport("block");
  }

  return <form 
    type="submit" 
    onSubmit={handleSubmit}
  >
    <h2>Event RSVP Form</h2>
    <label>Name:</label>
    <input 
      type="text" 
      placeholder="Your Name" 
      value={name} 
      onChange={e => setName(e.target.value)} 
      required 
    />
    <label>E-mail:</label>
    <input 
      type="email" 
      placeholder="Your Email" 
      value={email} 
      onChange={e => setEmail(e.target.value)} 
      required 
    />
    <label>Number of attendees:</label>
    <input 
      type="number" 
      min="1" 
      max="100" 
      placeholder="Number of attendees" 
      value={attendee} 
      onChange={e => setAttendee(e.target.value)} 
      required 
    />
    <label>Dietary preferences:</label>
    <input 
      type="text" 
      placeholder="Dietary preferences (Optional)" 
      value={dietary} 
      onChange={e => setDietary(e.target.value)} 
    />
    <label>Bringing additional guests?</label>
    <input 
      type="checkbox" 
      onChange={e => setGuest(e.target.checked ? "Yes" : "No")} 
      value={guest} 
    />
    <button 
      className="submit-btn"
      type='submit' 
    >Submit RSVP</button>
    <div className="report" style={{display: report}}>
      <h3>RSVP Submitted!</h3>
      <span><strong>Name:</strong> {name}</span>
      <br />
      <span><strong>Email:</strong> {email}</span>
      <br />
      <span><strong>Number of Attendees:</strong> {attendee}</span>
      <br />
      <span><strong>Dietary Preferences:</strong> {dietary}</span>
      <br />
      <span><strong>Bringing Others:</strong> {guest}</span>
    </div>
  </form>
};