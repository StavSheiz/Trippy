import axios from 'axios'
export function addTags(user, trip, tags) {
    fetch('http://192.168.43.244:3000/TripyServer/addTags',
        {
            method: 'POST',
            body: JSON.stringify({ user, trip, tags })
        })
        .then((response) => response.json())
}

// export function getTags() {
//     return axios.get('https://localhost:3000/getInterests').then(()=>{},(err)=>{console.log(err)})
// }
export async function getTags() {
    try {
      console.log('send')
      return axios.get(
        'http://192.168.43.244:3000/getIntrests'
        ,{ crossdomain: true });
    } catch (error) {
      console.error(error);
    }
  }

 export function findPartners() {
    try {
      console.log('send')
      return axios.get(
        'http://192.168.43.244:3000/findPartners'
      );
    } catch (error) {
      console.error(error);
    }
 } 
export function addPartner() {}
export function nextPartner() {}
export function addTrip(newTrip) {
    try {
      console.log(newTrip)
      return axios.post(
        'http://192.168.43.244:3000/addNewTrip',
        newTrip
      );
    } catch (error) {
      console.error(error);
    }
}