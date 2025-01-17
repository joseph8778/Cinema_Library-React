import React, { useEffect, useRef, useState } from 'react';
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../firebase/init';
import { Avatar } from "./ui/avatar"
import { RiArrowRightLine } from 'react-icons/ri';
import { Box, Button } from '@chakra-ui/react';

const Nav = () => {
  const [user, setUser] = useState(null)
  const [showMenu, setShowMenu] = useState(false)
  const menuRef = useRef(null)

  const toggleMenu = () => {
    setShowMenu((prev) => !prev)
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false)
      }
    };
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const auth = getAuth();
    const checkLogin = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
      return () => checkLogin();
    }, [])

  }, []);

  function logout() {
    signOut(auth);
    setShowMenu((prev) => !prev)
  }

    return (
        <nav>
          <div className="row">
            <div className="nav_wrapper">
              <Link to='/'>
              <img src={logo} className='logo_svg' alt="" />
              </Link>

              {user ? (
                <>
                  <Avatar
                  className="avatar"
                  colorPalette='red' 
                  variant='solid'
                  onClick={toggleMenu}
                  size="sm"
                  name={user.email}>
                    
                  </Avatar>

                  {showMenu && (
                    <Box
                    ref={menuRef}
                    position='absolute'
                    right='120px'
                    bg="white"
                    boxShadow="md"
                    p="2"
                    borderRadius="md"
                    >
                      <Button
                        onClick={logout}
                        colorScheme="red"
                        variant="solid"
                        >
                        Logout
                      </Button>
                    </Box>
                  )}
                  </>

                  ) :
               <Link to='/signin'>
               <Button colorPalette="red" variant="solid">
                    Sign in <RiArrowRightLine />
                </Button>
              </Link>
              }
            </div>
          </div>
        </nav>
    );
}

export default Nav;
