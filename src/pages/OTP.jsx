import React from "react";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const OTP = () => {
  const navigate = useNavigate();

  const handleVerify = () => {
    // Handle OTP verification logic here
    alert("OTP Verified!");
  };

  const handleNewOTP = () => {
    // Handle new OTP generation logic here
    alert("New OTP Generated!");
  };

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous screen
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div>
        <h1 className="text-3xl text-center">Verify OTP</h1>
        <p className="text-center">Enter the OTP sent to your mobile number.</p>
        <div className="mt-4 flex justify-center">
          <InputOTP maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>
        <div className="mt-4 flex justify-center space-x-4">
          <Button onClick={handleVerify}>Verify OTP</Button>
          <Button onClick={handleNewOTP}>New OTP Generate</Button>
          <Button onClick={handleBack}>Back</Button>
        </div>
      </div>
    </div>
  );
};

export default OTP;