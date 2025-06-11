'use client';
import { LogOutIcon } from "lucide-react";
import { Button } from "./ui/button";
import { authClient } from "@/lib/auth-client";

const Logout = () => {

  const handleLogout = async () => {
    try {
      await authClient.signOut();
      window.location.href = "/";
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <Button variant="outline" onClick={handleLogout}>
      Logout <LogOutIcon className="size-4" />
    </Button>
  );
};

export default Logout;
