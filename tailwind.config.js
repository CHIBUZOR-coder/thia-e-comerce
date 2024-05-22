/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blackk: "rgb(30,40,50)",
        primary: "rgb(241, 236, 236)",
        primary2: "	rgba(255,255,255,1)",
        trans: "	rgba(30, 26, 26, 0.6)",
        trans2: "rgb(0,0,0,0.5)",
        btn: "rgba(229,231,235,0.6)",
        footerlinks: "rgb(101,99,99)",
      },

      fontFamily: {
        primaryT: ["Roboto", "sans-serif", "Avro"],
      },
      height: {
        big: "400px",
        big2: "580px",
        big3: "500px",
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
