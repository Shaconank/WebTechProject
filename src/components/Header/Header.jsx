import React from "react";
import logo from '../../assets/w.png'
import './Header.css'
import {SearchCircle, GlobeOutline, PersonCircle, PersonCircleOutline, MenuOutline} from 'react-ionicons'
export default function Header({item}){
    return (
        <div className = {'container'}>
            <div className="CompanyContainer">
                <img src = {logo} alt="Logo" className="LogoImage"></img>
                <p className="CompanyText">wherebnb</p>
            </div>
            <div className="Nav">
                <h className = 'anywhere'>Anywhere</h>
                <div className="line"></div>
                <h className = 'anyweek'>Any week</h>
                <div className="line"></div>
                <div className="NavSearch">
                    <h className = "AddGuests" >Add guests</h>
                    <SearchCircle color = '#FF5A5F' height = '35px' width = '35px' style={{top : '2px', position : 'relative'}}/>
                </div>
            </div>
            <p className="PostHome">WhereBnB your home</p>
            <GlobeOutline color={'black'} height = '22px' width = '22px' className = "globe"/> 
            <div className="userContainer">
                <MenuOutline color = {'black'} height='20px' width = '20px'/>
                <PersonCircleOutline color={'grey'} height = '35px' width = '35px'/>
                
            </div>
        </div>
    )
}