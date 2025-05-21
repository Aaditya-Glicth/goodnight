document.addEventListener("DOMContentLoaded", () => {
    // Animate all elements fading in
    document.body.style.opacity = 0;
    document.body.style.transition = "opacity 1.5s cubic-bezier(.68,-0.55,.27,1.55)";
    setTimeout(() => {
        document.body.style.opacity = 1;
    }, 100);

    // Add a cute font from Google Fonts
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Quicksand:wght@500;700&family=Pacifico&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Apply cute font styles to body and headings
    const style = document.createElement("style");
    style.textContent = `
        body {
            font-family: 'Quicksand', Arial, sans-serif;
            background: linear-gradient(135deg, #f9d6e5 0%, #c2e9fb 100%);
            min-height: 100vh;
            margin: 0;
            padding: 0;
            transition: background 1s;
        }
        h1, h2, h3 {
            font-family: 'Pacifico', cursive;
            color: #ff69b4;
            text-shadow: 1px 2px 8px #fff6;
            letter-spacing: 2px;
            margin-bottom: 0.5em;
            animation: bounceIn 1s;
        }
        @keyframes bounceIn {
            0% { transform: scale(0.7); opacity: 0; }
            60% { transform: scale(1.1); opacity: 1; }
            100% { transform: scale(1); }
        }
        p, li {
            font-size: 1.1em;
            color: #444;
            background: #fff8;
            border-radius: 12px;
            padding: 0.5em 1em;
            margin: 0.5em 0;
            box-shadow: 0 2px 8px #0001;
            transition: background 0.3s;
        }
        p:hover, li:hover {
            background: #ffe0f7;
        }
        button, input[type="submit"] {
            font-family: 'Quicksand', Arial, sans-serif;
            background: #ffb6d5;
            color: #fff;
            border: none;
            border-radius: 20px;
            padding: 0.6em 1.4em;
            font-size: 1em;
            cursor: pointer;
            box-shadow: 0 2px 8px #0002;
            transition: background 0.3s, transform 0.2s;
        }
        button:hover, input[type="submit"]:hover {
            background: #ff69b4;
            transform: scale(1.07);
        }
    `;
    document.head.appendChild(style);
});
