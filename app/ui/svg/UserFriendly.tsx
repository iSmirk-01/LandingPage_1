import React from 'react'

const UserFriendly: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M30.6667 7.99999V2.66666C30.6667 2.31304 30.5262 1.9739 30.2762 1.72385C30.0261 1.4738 29.687 1.33333 29.3334 1.33333H2.66671C2.31309 1.33333 1.97395 1.4738 1.7239 1.72385C1.47385 1.9739 1.33337 2.31304 1.33337 2.66666V7.99999H30.6667Z"
          fill="#1DB5BE"
        />
        <path
          d="M1.33337 10.6667V29.3333C1.33337 29.6869 1.47385 30.0261 1.7239 30.2761C1.97395 30.5262 2.31309 30.6667 2.66671 30.6667H9.33337V10.6667H1.33337Z"
          fill="#C4B5FD"
        />
        <path
          d="M12 30.6667H29.3333C29.687 30.6667 30.0261 30.5262 30.2761 30.2761C30.5262 30.0261 30.6667 29.6869 30.6667 29.3333V10.6667H12V30.6667Z"
          fill="#7C3AED"
        />
      </svg>
    </>
  );
};

export default UserFriendly
