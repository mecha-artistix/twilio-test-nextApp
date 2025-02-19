"use client";

import { createCall } from "@/actions/telephony";
import { useRef, useState } from "react";

const PhoneCallForm = () => {
  const [status, setStatus] = useState("");
  const [pending, setPending] = useState(false);
  const formRef = useRef(null);

  async function clientAction(formData) {
    setPending(true);
    setStatus("");

    try {
      const result = await createCall(formData);
      // setStatus(result.message);
      formRef.current?.reset();
    } catch (error) {
      // setStatus(`Error: ${error.message}`);
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-6 border rounded-lg shadow-sm bg-slate-900">
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Phone Call System</h2>
      </div>

      <form ref={formRef} action={clientAction}>
        <div className="mb-4">
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Enter phone number"
            className="w-full px-4 py-2 border rounded-md bg-slate-700"
            pattern="[0-9]+"
            required
          />
        </div>

        <button
          type="submit"
          disabled={pending}
          className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 disabled:bg-blue-300"
        >
          {pending ? "Initiating Call..." : "Start Call"}
        </button>

        {status && (
          <p
            className={`mt-4 text-sm ${status.includes("Error") ? "text-red-500" : "text-green-500"}`}
          >
            {status}
          </p>
        )}
      </form>
    </div>
  );
};

export default PhoneCallForm;
