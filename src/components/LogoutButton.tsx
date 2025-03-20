"use client";

import { Loader2 } from "lucide-react"
import { Button } from "./ui/button"
import { useState } from "react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
function LogoutButton() {
    const [loading, setLoading] = useState(false) // Changed initial state to false
    const router = useRouter() // Added parentheses to call the hook

    const handleLogout = async () => {
        try {
            setLoading(true)
            await new Promise((resolve) => setTimeout(resolve, 2000))
            
            toast.success('Logged out successfully') // Corrected toast usage
            router.push('/login') // Added navigation
        } catch (error) {
            toast.error('Failed to logout')
        } finally {
            setLoading(false)
        }
    }

    return (
        <Button 
            className="w-24" 
            variant="outline" 
            onClick={handleLogout} 
            disabled={loading}
        >
            {loading ? <Loader2 className="animate-spin"/> : "Logout"}
        </Button>
    )
}

export default LogoutButton