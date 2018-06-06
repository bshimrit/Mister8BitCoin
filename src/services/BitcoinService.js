import axios from 'axios'

export default function getBitcoinRate() {
    // return axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    return axios.get('https://blockchain.info/ticker')
        .then((res) => {
            return res.data;
        }
    )
}