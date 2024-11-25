import React from 'react';
'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function LoginPage() {
    const initialstate = {
         password:'',
        email:'',
    }
  const [formdata,setformdata] = useState(initialstate)
 function HandleChange(e){
    setformdata({
     ...formdata,
     [e.target.name]:e.target.value
    })

 }

 function handleSubmit(){
    e.preventDefault()
 }
 console.log(formdata)
  return (
    <div className='w-full h-[100vh] flex items-center justify-center ' >
         <div className="bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription>Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                name='email'
                onChange={(e) => HandleChange(e)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                name = 'password'
                onChange={(e) => HandleChange(e)}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Log in
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <a href="#" className="text-sm text-blue-600 hover:underline">
            Forgot password?
          </a>
        </CardFooter>
      </Card>
    </div>



    </div>

   
  )
}

