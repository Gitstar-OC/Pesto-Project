import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import Image1 from "../assets/Welcome.png"
import { Helmet } from 'react-helmet-async';

const Welcome = () => {
  const [userEmail, setUserEmail] = useState("");

  return (
    <>
    <Helmet>
        <title>Welcome - Todo</title>
    </Helmet>
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[775px] ">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Sign In</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email and get started!
            </p>
          </div>
          <form>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="email@example.com"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  required
                />
              </div>
              <Link to="/home">
              <Button type="submit" className="w-full">
                Login
              </Button>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className="dark:bg-welcomeDark bg-welcomeLight hidden lg:block bg-cover bg-fixed h-[100vh]">
        <img src={Image1} className="h-full" alt="Welcome Background" />
      </div>
    </div>
    </>
  );
}

export default Welcome;
