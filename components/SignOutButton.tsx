"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import SignOutModal from "./SignOutModal";

function SignOutButton({ userId }: { userId: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        type="button"
        onClick={openModal}
        aria-label="Sign out"
        title="Sign out"
        className="btn-secondary"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM4 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 10.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
          />
        </svg>

        <span className="max-md:hidden">Sign out</span>
      </Button>

      <SignOutModal isOpen={isModalOpen} userId={userId} onClose={closeModal} />
    </>
  );
}

export default SignOutButton;
