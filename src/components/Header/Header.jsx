import React from "react";
import logo from '../../assets/w.png'
import './Header.css'
import {SearchCircle, GlobeOutline, PersonCircle, PersonCircleOutline, MenuOutline} from 'react-ionicons'
import { Link } from "react-router-dom";
export default function Header({item}){
    return (
        <div className = {'container'}>
            <Link to={'/Home'} style={{textDecoration : 'none', color: 'inherit'}}>
            <div className="CompanyContainer">
                <img src = {logo} alt="Logo" className="LogoImage"></img>
                <p className="CompanyText">wherebnb</p>
            </div>
            </Link>
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
            <Link to = {'/MakeYourBNB'} style = {{textDecoration:'none', color:'inherit', position: 'relative', left:'8%'}}> 
            <p className="PostHome">WhereBnB your home</p>
            </Link>
            <GlobeOutline color={'black'} height = '22px' width = '22px' className = "globe"/> 
            <div className="userContainer">
                <MenuOutline color = {'black'} height='20px' width = '20px'/>
                <PersonCircleOutline color={'grey'} height = '35px' width = '35px'/>
                
            </div>
        </div>
    )
}