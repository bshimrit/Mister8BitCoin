import axios from 'axios'

export default function getBitcoinRate() {
    return axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then((res) => {
            return res.data;
        }
    )
}