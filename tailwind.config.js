/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        spinRight: "spinRight 1s linear infinite",
        spinLeft: "spinLeft 6s linear infinite",
        
      },
      

      keyframes: {
        // Clockwise spin (spinRight)
        spinRight: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        // Counterclockwise spin (spinLeft)
        spinLeft: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },

      colors: {
        blackk: "rgb(30,40,50)",
        primary: "rgb(241, 236, 236)",
        primary2: "rgba(255,255,255,1)",
        trans: "rgba(30, 26, 26, 0.6)",
        trans2: "rgb(0,0,0,0.5)",
        btn: "rgba(229,231,235,0.6)",
        subnav: "rgba(255,255,255,.7)",
        footerlinks: "rgb(101,99,99)",
        location: "rgb(79,70,229)",
        media: "rgb(122,102,251)",
        green: "rgb(0,128,0)",
        adminTex: "rgb(143,143,143)",
        lists: "rgb(159,161,162)",
        Anav: "rgba(249, 245, 255, 1)",
        pink2: "rgb(241,176,173, 0.5)",
        AdminblueBlack: "rgba(10, 25, 47, 1)",
        AdminnavDark: "rgba(44, 14, 55, 1)",
        AdminnavDark2: "rgba(44, 14, 55, 0.6)",
        AdminnavLight: "rgba(255, 255, 255, 1)",
        formBorder: "rgb(107, 114, 128)",
        input: "rgb(107, 114, 128, 0.2)",
        spin: "rgb(0, 0, 255)",
        spinbg: "rgb(241,236,236)",
        AccountNav:"rgb(241,239,233)",
        accountDiv:"rgb(44,44,44)",
        signout:"rgb(44,44,44)"
      },

      fontFamily: {
        primaryT: ["Roboto", "sans-serif", "Avro"],
      },

      height: {
        big: "400px",
        big2: "580px",
        big3: "600px",
        large: "800px",
        product: "750px",
        product2: "800px",
        pics: "450px",
        product3: "600px",
        big4: "1100px",
        ppic: "1000px",
        ppic2: "800px",
        pic5: "2500px",
        custom: "600px",
      },

      right: {
        primary: "30px",
      },
      top: {
        minus: "-30px",
      },
      left: {
        primary: "30px",
      },
      width: {
        our: "500px",
      },
      maxHeight: {
        first: "440px",
      },
      minHeight: {
        primary: "620px",
      },
    },
  },
  plugins: [],
};
