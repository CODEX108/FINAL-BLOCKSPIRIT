import "./TermStyle.css"
import { BsCurrencyBitcoin } from "react-icons/bs";
import {SiHiveBlockchain} from "react-icons/si";
import {AiOutlineStock} from "react-icons/ai";
import React from 'react'

const Terminology = () => {
    return (
        <div className="terms">
            <div className="card-container">

                <div className="card">
                <BsCurrencyBitcoin fontSize={29} className="text-white" />

                    <span className="bar"></span>
                    <p className="btc text-style">Crypto</p>
                    <p className="det">The name cryptocurrency is a combination of cryptography and currency.
                        With cryptography, we use advanced math to secure our funds,
                        making sure that nobody else can spend them. A form of digital asset based on a network that is distributed
                        across a large number of computers.

                    </p>
                </div>

                <div className="card">
                <SiHiveBlockchain fontSize={29} className="text-white" />
                
                    <span className="bar"></span>
                    <p className="btc">Blockchain</p>
                    <p className="det">A blockchain is a distributed database or ledger that is shared among the nodes of a computer network. As a database, a blockchain stores
                        information electronically in digital format.Blockchains are best known for their crucial role in cryptocurrency systems,such as Bitcoin, for maintaining a secure and decentralized record of transactions. </p>
                </div>


                <div className="card">
                <AiOutlineStock fontSize={29} className="text-white" />
                
                    <span className="bar"></span>
                    <p className="btc">Trading</p>
                    <p className="det">Trading generally implies a shorter-term approach to generating profit.
                        One of the most common ways to make sense of the cryptocurrency market is through an
                        approach called technical analysis (TA). Technical analysts look at price history, charts, and other types
                        of market data to find bets that have a good chance of returning a profit.</p>
                </div>

            </div>
        </div>
    )
}

export default Terminology;