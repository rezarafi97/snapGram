import { Routes, Route } from "react-router-dom";

import "./globals.css";
import { SigninForm, SignupForm } from "./_auth/forms";
import { Home } from "./_root/pages";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import { Toaster } from "@/components/ui/toaster"

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        <Route element={<AuthLayout />}>
          {/* Public Routes */}
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>

        <Route element={<RootLayout />}>
          {/* Private Routes */}
          <Route index element={<Home />} />
        </Route>
      </Routes>

      <Toaster />
    </main>
  );
};

export default App;
