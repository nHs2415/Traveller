import React, { Component } from 'react'
import './NavBar.css'
import { FaHome } from "react-icons/fa";
import { MdContentPasteSearch } from "react-icons/md";
import { MdMedicalServices } from "react-icons/md";
import { LuContact2 } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';


class NavBar extends Component{
    state = { clicked : false}
    handleClick = () =>{
        this.setState({ clicked: !this.state.clicked})
    }
    render(){
        return(
            <nav className='NavBarItems'>
                <h1 className='NavBar-logo'>Traveller</h1>

                <div className='menu-icons' onClick={this.handleClick}>
                    <i> {
                        this.state.clicked? <IoMdClose/>: <GiHamburgerMenu/> 
                        }
                    </i>
                    
                </div>

                <ul className={ this.state.clicked ? "NavBar-Menu active" : "NavBar-Menu"}>
                    <li className='listItems'>
                    <i><FaHome/></i>
                        <Link className='items' to='/'>Home</Link>
                        
                    </li>
                    <li className='listItems'>
                    <i ><MdContentPasteSearch /></i>
                        <Link className='items' to='/about'>About</Link>
                    </li>
                    
                    <li className='listItems'>
                    <i><MdMedicalServices /></i>
                        <Link className='items'  to='/service'>Service</Link>

                    </li>
                    <li className='listItems'>
                    <i><LuContact2 /></i>
                        <Link className='items' to='/contact'>Contact</Link>
                    </li>

                    <li>
                        <button>Sign Up</button>
                    </li>

                </ul>
            </nav>
        )
    }
}

export default NavBar;