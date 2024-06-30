import React from "react";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";

const OTP = () => {
  const handleVerify = () => {
    // Handle OTP verification logic here
    alert("OTP Verified!");
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
        <div className="mt-4 flex justify-center">
          <Button onClick={handleVerify}>Verify OTP</Button>
        </div>
      </div>
    </div>
  );
};

export default OTP;