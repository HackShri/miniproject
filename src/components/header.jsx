'use client'
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import Headroom from 'react-headroom'
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const Header = () => {
    const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const toggleSidebar = () => setIsOpen(!isOpen)
  return (
    <Headroom>
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="mr-4">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                  </SheetHeader>
                  <nav className="mt-6">
                    <ul className="space-y-4">
                      <li><a href="#" className="text-lg hover:underline">Home</a></li>
                      <li><a href="#" className="text-lg hover:underline">Services</a></li>
                      <li><a href="#" className="text-lg hover:underline">About</a></li>
                      <li><a href="#" className="text-lg hover:underline">Contact</a></li>
                    </ul>
                  </nav>
                </SheetContent>
              </Sheet>
              <h1 className="text-xl font-bold">Vtu Network</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" onClick={()=>navigate('/auth/Login')}>Login</Button>
              <Button onClick={()=>navigate('/auth/Register')}>Register</Button>
            </div>
          </div>
        </div>
      </header>
    </Headroom>
  )
}

export default Header
