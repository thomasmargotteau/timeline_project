function CreerEvent() {
    return (
      <div>
        <form className="p-4 rounded-lg border border-gray-700 mx-auto" method='post' action='/api/event'>
          <div className="mb-4">
            <label htmlFor="title" className="block font-bold mb-1">Titre Evénement:</label>
            <input type="text" id="title" name="title" className="w-full p-2 border border-gray-700 rounded-lg text-black" />
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block font-bold mb-1">Date:</label>
            <input type="date" id="date" name="date" className="w-full p-2 border border-gray-700 rounded-lg text-black" />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block font-bold mb-1">Description:</label>
            <textarea id="description" name="description" className="w-full p-2 border border-gray-700 rounded-lg text-black"></textarea>
          </div>
          {/* Add more input fields as needed*/ }
          <button type="submit" className="bg-gray-100 text-blue-900 px-4 py-2 border border-gray-700 rounded-lg hover:bg-green-500 hover:text-white">Add Event</button>
        </form>
      </div>
    );
  }
  

export default CreerEvent;