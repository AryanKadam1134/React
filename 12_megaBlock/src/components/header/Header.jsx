import React from 'react'
import { Logout, Logo, Container } from '../index.js'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {

  const authStatus = useSelector( (state) => state.auth.status )

  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]


  return (
    <header className='py-3 bg-gray-500 shadow'>
      <Container>
        <nav className='flex'>
          <div className='mr-4 '>
            <Link>
            <Logo width="70px"/>
            </Link>
          </div>

          <ul className='flex ml-auto'>
            {navItems.map((item) => (
                item.active ? <li key={item.name}>
                  <button className="" onClick={() => navigate(item.slug)}>{item.name}</button>
                </li> : null
            ))}

            {authStatus && (
              <li>
                <Logout />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header