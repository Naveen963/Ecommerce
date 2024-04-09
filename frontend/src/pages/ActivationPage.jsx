import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { server } from '../server';
import axios from 'axios';
const ActivationPage = () => {
    const { activation_token } = useParams()
    const [error, setError] = useState(false);

    useEffect(() => {
        if (activation_token) {
            const activationEmail = async () => {
                await axios.post(`${server}/user/activation`, {
                    activation_token
                })
                    .then(res => {
                        console.log(res)

                    })
                    .catch((err) => {
                        console.log(err.response.data.message)
                        setError(true)
                    })
            }
            activationEmail()
        }
    }, [activation_token])
    return (
        <div style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            {
                error ?
                    (
                        <p>Your token is expired!</p>
                    ) :
                    (
                        <p>Your account has been created successfully</p>
                    )
            }
        </div>
    )
}

export default ActivationPage