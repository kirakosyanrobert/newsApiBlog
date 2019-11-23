import React, {useState, useEffect} from 'react';
import './Crypto.scss';
import Axios from 'axios';
const ACCESS_KEY = "ce8352eba0506536201d9068ab028242";

const Crypto = () => {
    const [rates, setRates] = useState([])
    const getData = () => {
        Axios.get(` http://api.coinlayer.com/live?access_key=${ACCESS_KEY}&symbols=BTC,ETH,XLM`)
        .then(res => {
            let arr = [];
            Object.keys(res.data.rates).map(each => {
                arr.push({name: each, value: res.data.rates[each]})
            })
            setRates(arr);
        })
        .catch(err => console.log(err.message))
    }

    useEffect(() => getData(), [])

    return (
        <div className="card my-4">
            <h5 className="card-header">Live Crypto Values</h5>
            <div className="card-body">
                <ul className="list-group" style={{minHeight: '150px'}}>
                    {rates.map((rate, index) => {
                        return <li key={`rate${index}`} className="list-group-item
                                d-flex
                                justify-content-between
                                align-items-center">
                                    <strong>{rate.name}</strong>
                                    <span>{rate.value}</span>
                                </li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Crypto;