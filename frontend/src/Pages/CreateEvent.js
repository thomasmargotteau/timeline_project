import { Link } from 'react-router-dom';

function CreerEvent(){
    return(
    <div className='Interface-creation'>
        <h2>Ajouter un event:</h2>
        <form method='post'action='/api/event'>

            <div>
                <label htmlFor="title">Event Title:</label>
                <input type="text" id="title" name="title" />
            </div>
            <div>
                <label htmlFor="date">Date:</label>
                <input type="date" id="date" name="date" />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea id="description" name="description"></textarea>
            </div>
  {/* Add more input fields as needed */}
  <button type="submit">Add Event</button>

        </form>
    </div>
    
    );
}

export default CreerEvent;