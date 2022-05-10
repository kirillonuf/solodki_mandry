import React from "react";
import './contacts.scss';
import instagram from './image/instagram-icons.png';
import facebook from './image/facebook-inc-farmville-facebook.png'
import phone from './image/telephone-call.png'
import gmail from './image/email-icons-mes-email-i.png'
import marker from './image/icons-gps-navigation-systems.png'
export const Contacts = () => {

    return (
        <div className="contacts">
            <div className="contacts-info">
                <div className="contacts-photo">
                    <img src="https://lh3.googleusercontent.com/p/AF1QipOqUQ1Xjjhy6PfszzwPygBNWY4Tx7YW0L8qpuDF=s1600-w400" />
                </div>
                <div className="contacts-data" >

                    <div
                    ><a href="#"><img src={marker} alt="..." />м.Запоріжжя,вул.Миру,14</a></div>

                    <div
                    ><a href="tel:+380686613262"  ><img src={phone} alt="..." />+380686613262</a></div>

                    <div
                    ><a href="mailto:solodki_mandry@gmail.com" target='_blank'><img src={gmail} alt="..." />solodki_mandry@gmail.com</a></div>

                    <div
                    ><a href="https://www.instagram.com/solodki_mandry" target='_blank' rel="noreferrer noopener">
                            <img src={instagram} alt="..." />
                            @solodki_mandry</a></div>

                    <div
                    ><a href="https://www.facebook.com/solodkimandry" target='_blank' rel="noreferrer noopener"><img src={facebook} alt="..." />@solodkimandry</a></div>


                </div>
            </div>
            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2677.5086406833266!2d35.12031781551718!3d47.84911167920149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dc6756e81ae989%3A0x994d3c1a9a489d8e!2sSolodki%20Mandry!5e0!3m2!1sru!2sua!4v1648372768341!5m2!1sru!2sua"
                    allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>

    )
}