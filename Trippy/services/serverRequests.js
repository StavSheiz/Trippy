import axios from 'axios'
export function addTags(user, trip, tags) {
    fetch('localhost/TripyServer/addTags',
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
        'https://192.168.43.244:3000/getIntrests'
      );
    } catch (error) {
      console.error(error);
    }
  }
export function addPartner() {}
export function nextPartner() {}