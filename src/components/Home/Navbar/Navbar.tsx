import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../lib/hooks";
import { auth } from "../../../firebase";
import { signOut } from "firebase/auth";

const Navbar: React.FC = () => {
  const user = useAppSelector((state) => state.user.user);

  return (
    <AppBar
      position="static"
      sx={{
        background: "var(--color-tertiary)",
        marginTop: { xs: 0, sm: 3 },
        padding: 1,
        boxShadow: 0,
      }}
    >
      <Toolbar sx={{ padding: { xs: 0, sm: "0 1rem 0 1rem" } }}>
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="50.000000pt"
          height="50.000000pt"
          viewBox="0 0 300.000000 248.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,248.000000) scale(0.100000,-0.100000)"
            fill="#fff"
            stroke="none"
          >
            <path
              d="M1224 2184 c-87 -152 -163 -278 -170 -281 -6 -2 -157 7 -335 21 -178
14 -324 24 -326 23 -1 -1 82 -130 184 -287 142 -217 183 -288 176 -300 -11
-17 -455 -790 -543 -945 -32 -55 -85 -149 -119 -208 -34 -60 -64 -114 -67
-121 -3 -8 82 10 238 51 134 35 380 99 548 143 168 44 363 96 434 115 72 19
132 32 134 30 3 -3 64 -95 136 -206 72 -111 136 -202 141 -202 5 0 103 121
217 269 114 148 221 285 237 305 28 34 41 40 178 77 81 23 189 51 238 63 50
12 93 25 97 28 3 3 -36 64 -87 135 l-94 128 135 177 c74 97 180 235 235 306
168 217 182 235 177 240 -5 5 -1037 85 -1096 85 -42 0 -2 -50 -392 488 -56 78
-106 142 -110 142 -5 0 -79 -124 -166 -276z m232 95 c17 -24 149 -206 292
-403 144 -198 262 -362 262 -366 0 -7 -572 -203 -948 -325 -131 -43 -141 -48
-132 -65 6 -11 58 -93 117 -182 58 -90 140 -215 180 -278 41 -63 84 -128 95
-143 11 -16 18 -31 15 -33 -5 -5 -146 -43 -587 -158 -135 -35 -325 -86 -422
-112 -98 -26 -181 -45 -184 -41 -4 4 -2 12 3 19 6 7 109 184 228 393 120 209
324 565 453 790 130 226 262 457 295 515 33 58 81 141 107 185 25 44 73 127
105 184 65 117 54 116 121 20z m-674 -420 c128 -11 234 -22 236 -24 2 -2 -47
-92 -109 -200 -90 -158 -114 -194 -124 -183 -16 16 -275 415 -275 423 0 8 21
7 272 -16z m1498 -114 c411 -32 594 -47 598 -51 2 -1 -74 -103 -169 -226 -95
-122 -245 -317 -334 -433 -89 -116 -226 -293 -304 -395 -79 -102 -202 -263
-274 -357 -73 -95 -134 -173 -137 -173 -11 0 -647 985 -640 993 3 4 249 89
546 188 296 100 540 182 541 183 2 2 -41 64 -171 244 l-38 52 34 0 c18 0 175
-11 348 -25z m190 -861 c33 -47 60 -88 58 -89 -5 -6 -320 -86 -323 -83 -2 2
37 55 87 118 49 63 92 121 95 128 10 22 21 13 83 -74z"
            />
          </g>
        </svg>
        <Typography
          variant="h5"
          sx={{
            marginLeft: 1,
            fontFamily: "var(--font-heading)",
            flexGrow: 1,
            fontSize: { xs: 18 },
          }}
        >
          CODENOTE
        </Typography>

        {!user ? (
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Button variant="outlined" color="info">
              Login
            </Button>
          </Link>
        ) : (
          <Button
            variant="outlined"
            color="info"
            onClick={() => {
              signOut(auth).then(() => {});
            }}
          >
            Logout
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
