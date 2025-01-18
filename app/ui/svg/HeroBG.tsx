

const HeroBG: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <>
      <svg
        width="1440"
        height="866"
        viewBox="0 0 1440 866"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g clip-path="url(#clip0_2479_1080)">
          <circle opacity="0.6" cx="1290" cy="166" r="203" fill="#7C3AED" />
          <circle opacity="0.6" cx="913" cy="548" r="84" fill="#1DB5BE" />
          <g
            clip-path="url(#bgblur_1_2479_1080_clip_path)"
            data-figma-skip-parse="true"
          >
            <foreignObject x="-100" y="-100" width="1640" height="952">
              <div
                style={{
                  backdropFilter: "blur(50px)",
                  height: "100%",
                  width: "100%",
                }}
              ></div>
            </foreignObject>
          </g>
          <path
            data-figma-bg-blur-radius="100"
            d="M0 0H1440V572L0 752V0Z"
            fill="#F2F7FF"
            fill-opacity="0.7"
          />
          <path
            d="M1260 594.005L1680 541.488V605.488L1260 658.005V594.005Z"
            fill="#75E3EA"
          />
          <path
            d="M828 584.808L1440 508V572L828 648.808V584.808Z"
            fill="#C4B5FD"
          />
          <path
            d="M988 500.517L1408 448V512L988 564.517V500.517Z"
            fill="#EDE9FE"
          />
          <path
            d="M0 688.016L420 635.499V699.499L0 752.016V688.016Z"
            fill="#75E3EA"
          />
          <path
            d="M-152 771.005L268 718.488V782.488L-152 835.005V771.005Z"
            fill="#EDE9FE"
          />
        </g>
        <defs>
          <clipPath id="bgblur_1_2479_1080_clip_path">
            <path d="M0 0H1440V572L0 752V0Z" />
          </clipPath>
          <clipPath id="clip0_2479_1080">
            <rect width="1440" height="866" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
}

export default HeroBG
