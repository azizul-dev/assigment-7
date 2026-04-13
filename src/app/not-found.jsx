import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#244D3F",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'DM Sans', sans-serif",
      overflow: "hidden",
      position: "relative",
      padding: "2rem",
      color: "white"
    }}>
      
      <style>{`
        .nf-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        .nf-glow {
          position: absolute;
          width: 600px; height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          animation: pulse 3s ease-in-out infinite;
        }

        @keyframes pulse {
          0%,100% { transform: translate(-50%,-50%) scale(1); opacity:0.5; }
          50% { transform: translate(-50%,-50%) scale(1.2); opacity:1; }
        }

        .nf-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(140px, 22vw, 220px);
          color: transparent;
          -webkit-text-stroke: 1.5px rgba(255,255,255,0.3);
          letter-spacing: -4px;
        }

        .nf-num span:nth-child(2) {
          color: #A7F3D0; /* light green highlight */
          -webkit-text-stroke: 0;
        }

        .nf-line {
          width: 1px;
          height: 60px;
          background: linear-gradient(to bottom, transparent, #A7F3D0, transparent);
          margin: 1rem 0;
        }

        .nf-title {
          font-family:'Bebas Neue',sans-serif;
          font-size:clamp(28px,4vw,42px);
          letter-spacing:2px;
          margin-bottom:0.5rem;
        }

        .nf-sub {
          font-size:15px;
          color:rgba(255,255,255,0.7);
          margin-bottom:2rem;
        }

        .nf-btn {
          padding:14px 32px;
          border:1px solid rgba(255,255,255,0.4);
          color:#fff;
          letter-spacing:2px;
          text-transform:uppercase;
          position:relative;
          overflow:hidden;
          background: transparent;
          cursor: pointer;
        }

        .nf-btn::before {
          content:'';
          position:absolute;
          inset:0;
          background:#A7F3D0;
          transform:translateX(-100%);
          transition:0.4s;
        }

        .nf-btn:hover::before {
          transform:translateX(0);
        }

        .nf-btn span {
          position:relative;
          color:#244D3F;
          font-weight:600;
        }

        .nf-corner {
          position:absolute;
          width:20px; height:20px;
          border-color:rgba(255,255,255,0.3);
          border-style:solid;
        }

        .nf-corner.tl { top:20px; left:20px; border-width:1px 0 0 1px; }
        .nf-corner.tr { top:20px; right:20px; border-width:1px 1px 0 0; }
        .nf-corner.bl { bottom:20px; left:20px; border-width:0 0 1px 1px; }
        .nf-corner.br { bottom:20px; right:20px; border-width:0 1px 1px 0; }
      `}</style>

      <div className="nf-grid" />
      <div className="nf-glow" />

      <div className="nf-corner tl" />
      <div className="nf-corner tr" />
      <div className="nf-corner bl" />
      <div className="nf-corner br" />

      {/* 404 */}
      <div className="nf-num">
        <span>4</span><span>0</span><span>4</span>
      </div>

      <div className="nf-line" />

      {/* Text */}
      <div className="text-center">
        <div className="nf-title">Page Not Found</div>
        <div className="nf-sub">
          তুমি যে পেজটা খুঁজতেছো সেটা আর নেই।
        </div>

        <Link href="/">
          <button className="nf-btn">
            <span>← Back Home</span>
          </button>
        </Link>
      </div>
    </div>
  );
}