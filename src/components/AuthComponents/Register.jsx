import React from 'react';



'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    setSuccess(false)
    // Basic form validation
    if (!formData.name || !formData.email || !formData.password) {
      setError('All fields are required')
      return
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long')
      return
    }
    // Here you would typically send the data to your backend API
    // For this example, we'll just log it and show a success message
    console.log('Form submitted:', formData)
    setSuccess(true)
  }
  return (
    <div className=" flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md flex flex-col flex justify-center">
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>Create a new account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            {error && (
              <Alert variant="destructive" className="mt-4">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            {success && (
              <Alert className="mt-4">
                <AlertDescription>Registration successful!</AlertDescription>
              </Alert>
            )}
            <CardFooter className="flex justify-end mt-4 p-0">
              <Button type="submit">Register</Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

