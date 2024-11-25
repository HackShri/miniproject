'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function LoginPage() {
    const initialstate = {
         password:'',
        email:'',
    }
    const [formdata, setformdata] = useState(initialstate)
    
    function HandleChange(e) {
        setformdata({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        // Your submit logic here
    }
    
    console.log(formdata)

    return (
        <div className='w-full min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8'>
            <Card className="w-full max-w-md shadow-md">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold">Login</CardTitle>
                    <CardDescription className="text-sm text-gray-500">Enter your credentials to access your account</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
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
                                name='password'
                                onChange={(e) => HandleChange(e)}
                                required
                            />
                        </div>
                        <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                            Log in
                        </Button>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <a href="#" className="text-sm text-blue-600 hover:underline hover:text-blue-800">
                        Forgot password?
                    </a>
                </CardFooter>
            </Card>
        </div>
    )
}

