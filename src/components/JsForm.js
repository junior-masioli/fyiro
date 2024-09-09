import { useState } from 'react';

export default function JsForm() {
    const [isError, setIsError] = useState(null);

    // Handles the submit event on form submit.
    const handleSubmit = async (event) => {
      // Stop the form from submitting and refreshing the page.
      event.preventDefault()

      // Get data from the form.
      const data = {
        name: event.target.name.value,
        company: event.target.company.value,
        email: event.target.email.value,
      }

      // Send the data to the server in JSON format.
      const JSONdata = JSON.stringify(data)

      // API endpoint where we send form data.
      const endpoint = '/api/form'

      // Form the request for sending data to the server.
      const options = {
        // The method is POST because we are sending data.
        method: 'POST',
        // Tell the server we're sending JSON.
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        // Body of the request is the JSON data we created above.
        body: JSONdata,
      }

      // Send the form data to our forms API on Vercel and get a response.
      fetch(endpoint, options).then((response) => {
        setIsError(false);
      })
      .catch(() => setIsError(true));

      event.target.reset();

      // Get the response data from server as JSON.
      // If server returns the name submitted, that means the form works.
    }
    return (
      // We pass the event to the handleSubmit() function on submit.
      <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
            <label htmlFor="company">Company</label>
            <input type="text" id="company" name="company" required />
        </div>
        <div className="form-group">
            <label htmlFor="Email">Email Address</label>
            <input type="email" id="email" name="email" required />
        </div>
        <button type="submit">Submit</button>
        { isError === true && (<div className="error">Something went wrong! Please try again.</div>) }
        { isError === false && (<div className="succes">Success! Your message has been sent.</div>) }
      </form>
    )
  }