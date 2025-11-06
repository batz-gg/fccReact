const { useState } = React;

export function EventRSVPForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [attendee, setAttendee] = useState(0);
  const [dietary, setDietary] = useState("");
  const [guest, setGuest] = useState(false);
  
  const handleSubmit = e => {
    e.preventDefault();
    alert(`
      <div>
        <h3>RSVP Submitted!</h3>
        <span><strong>Name:</strong> ${name}</span>
        <br />
        <span><strong>Email:</strong> ${email}</span>
        <br />
        <span><strong>Number of Attendees:</strong> ${attendee}</span>
        <br />
        <span><strong>Dietary Preferences:</strong> ${dietary}</span>
        <br />
        <span><strong>Bringing Others:</strong> ${guest}</span>
      </div>
    `);
  }

  return <form type="submit" onSubmit={handleSubmit}>
    <h2>Event RSVP Form</h2>
    <label>Name:</label>
    <input 
      type="text" 
      placeholder="Your Name" 
      value={name} 
      key={name}
      onChange={e => setName(e.target.value)} 
      required 
    />
    <label>E-mail:</label>
    <input 
      type="email" 
      placeholder="Your Email" 
      value={email} 
      key={email}
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
      key={attendee}
      onChange={e => setAttendee(e.target.value)} 
      required 
    />
    <label>Dietary preferences:</label>
    <input 
      type="text" 
      placeholder="Dietary preferences (Optional)" 
      value={dietary} 
      key={dietary}
      onChange={e => setDietary(e.target.value)} 
    />
    <label>Bringing additional guests?</label>
    <input 
      type="checkbox" 
      onChange={e => setGuest(e.target.value)} 
      value={guest} 
      key={guest}
    />
    <button 
      className="submit-btn"
      type='submit' 
    >Submit RSVP</button>
  </form>
}
