/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"],
    theme: {
        extend: {
            colors: {
                primaryDarkCyan: "hsl(158, 36%, 37%)",
                primaryCream: "hsl(30, 38%, 92%)",
                neutralDarkBlue: "hsl(212, 21%, 14%)",
                neutralDarkGrayishBlue: "hsl(228, 12%, 48%",
            },
        },
    },
    plugins: [],
};
