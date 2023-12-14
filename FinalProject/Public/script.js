document.addEventListener('DOMContentLoaded', function() {
    // Event listener for Add Event form
    var addEventForm = document.getElementById('addEventForm');
    if (addEventForm) {
        addEventForm.addEventListener('submit', function(e) {
            e.preventDefault();
            var formData = new FormData(this);
            fetch('http://localhost:8000/add/event', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                var message = 'Event added successfully';
                if (data.error) {
                    message = 'Error: ' + data.error;
                }
                document.getElementById('addEventMessage').innerText = message;
            })
            .catch(error => {
                console.error('Error:', error);
                document.getElementById('addEventMessage').innerText = 'Error adding event';
            });
        });
    }

    // Event listener for View Events form
    var viewEventsForm = document.getElementById('viewEventsForm');
    if (viewEventsForm) {
        viewEventsForm.addEventListener('submit', function(e) {
            e.preventDefault();
            var date = document.getElementById('eventDate').value;
            fetch(`http://localhost:8000/read/events?date=${date}`)
            .then(response => response.json())
            .then(data => {
                if (!data || data.error) {
                    document.getElementById('eventsDisplay').innerText = 'No events found';
                } else {
                    var displayHtml = data.map(event => {
                        // Format date as "YYYY-MM-DD"
                        var formattedDate = new Date(event.date).toISOString().substr(0, 10);
                        return `<div>
                                    <h3>${event.name}</h3>
                                    <p>Place: ${event.place}</p>
                                    <p>Date: ${formattedDate}</p>
                                    <p>Time: ${event.time}</p>
                                    <p>Price: ${event.price}</p>
                                    <p>Description: ${event.description}</p>
                                    <p>URL: ${event.url}</p>
                                </div>`;
                    }).join('');
                    document.getElementById('eventsDisplay').innerHTML = displayHtml;
                }
            })
            .catch(error => {
                console.error('Error:', error);
                document.getElementById('eventsDisplay').innerText = 'Error fetching events';
            });
        });
    }

    var updateEventForm = document.getElementById('updateEventForm');
    if (updateEventForm) {
        updateEventForm.addEventListener('submit', function(e) {
            e.preventDefault();
            var formData = new FormData(this);
            var eventId = formData.get('eventId');

            // Ensure eventId is present
            if (!eventId) {
                document.getElementById('updateMessage').innerText = 'Please enter an Event ID';
                return;
            }

            formData.delete('eventId'); // Remove eventId from formData as it's passed in URL

            fetch(`http://localhost:8000/update/events/${eventId}`, {
                method: 'PUT',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    document.getElementById('updateMessage').innerText = "Error: " + data.error;
                } else {
                    document.getElementById('updateMessage').innerText = 'Event updated successfully';
                }
            })
            .catch(error => {
                console.error('Error:', error);
                document.getElementById('updateMessage').innerText = 'Error updating event';
            });
        });
    }

    // Event listener for Delete Event form
    var deleteForm = document.getElementById('deleteForm');
    if (deleteForm) {
        deleteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            var eventId = this.elements['eventId'].value;
            fetch(`http://localhost:8000/remove/events/${eventId}`, {
                method: 'DELETE'
            })
            .then(response => response.json())
            .then(data => {
                var message = data.error ? 'Error: ' + data.error : 'Event removed successfully';
                document.getElementById('deleteMessage').innerText = message;
            })
            .catch(error => {
                console.error('Error:', error);
                document.getElementById('deleteMessage').innerText = 'Error removing event';
            });
        });
    }
});