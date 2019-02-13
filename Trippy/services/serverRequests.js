export function addTags(user, trip, tags) {
    fetch('localhost/TripyServer/addTags',
        {
            method: 'POST',
            body: JSON.stringify({ user, trip, tags })
        })
        .then((response) => response.json())
}

export function getTags() {
    return fetch('localhost/TripyServer/getTags').then((response) => response.json())
}