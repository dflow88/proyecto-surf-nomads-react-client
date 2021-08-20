import React, { useState, useEffect, useContext } from 'react'
import UserContext from '../../context/users/UserContext'
export default function Checkout(props) {

    const ctx = useContext(UserContext)

    const { 
        user,
        generateCheckout,
        redirect_url,
        eraseRedirect
     } = ctx

     useEffect(() => {
        const reloadingPage = () => {
            if(redirect_url !== ""){
                const currentUrl = redirect_url
                eraseRedirect()
                window.location.assign(currentUrl)                
            }
            return
        }
        reloadingPage()
        return
     }, [redirect_url])


     const sendData = async (event) => {
        event.preventDefault()
        
        return await generateCheckout(user.email)

     }


    return (
        <div>
            <section>
                <div className="product">
                    <img
                        src="https://i.imgur.com/EHyR2nP.png"
                        alt="The cover of Stubborn Attachments"
                    />
                    <div className="description">
                        <h3>Stubborn Attachments</h3>
                        <h5>$20.00</h5>
                    </div>
                </div>

                
                    <button onClick={(e) => { sendData(e) }}>
                        Generar pago
                    </button>
                
            </section>
        </div>
    )
}