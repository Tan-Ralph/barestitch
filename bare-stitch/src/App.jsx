import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import navbar from './components/navbar.jsx'
import './App.css'

const Card = ({title}) => {
  return (
    <div>{title}</div>
  )
}

const navItems = [
    { label: 'Home', href: '/' },
    { 
      label: 'Company', 
      children: [
        { label: 'About Us', href: '/about' },
        { label: 'Team', href: '/team' },
        { label: 'Careers', href: '/careers' }
      ]
    },
    { label: 'Marketplace', href: '/marketplace' },
    { label: 'Resources', href: '/resources' },
    { label: 'Contact', href: '/contact' }
  ];

  const megaMenuContent = {
    sections: [
      {
        items: [
          { label: 'Online Stores', href: '/stores' },
          { label: 'Segmentation', href: '/segmentation' },
          { label: 'Marketing CRM', href: '/crm' },
          { label: 'Customer Support', href: '/support' }
        ]
      },
      {
        items: [
          { label: 'Our Blog', href: '/blog' },
          { label: 'Terms & Conditions', href: '/terms' },
          { label: 'License', href: '/license' },
          { label: 'API Docs', href: '/api' }
        ]
      }
    ],
    promo: {
      backgroundImage: '/path/to/your/image.jpg',
      title: 'Check out our new dashboard features',
      buttonText: 'Get started'
    }
  };

const App = () => {
  return(
    <main>
    <div>
       <Navbar 
        logo={{
          src: 'https://flowbite.com/docs/images/logo.svg',
          alt: 'Company Logo',
          text: 'Flowbite'
        }}
        navItems={navItems}
        megaMenuContent={megaMenuContent}
      />
    <h2 className="text-3xl font-bold underline">Bare Stitch</h2>
    <Card title = "Cute cat"/>
    </div>
    </main>
  )
}

export default App
