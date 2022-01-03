//debugger;
const greetingList = [
    {
        language: "English",
        hello: "Welcome!",
    },
    {
        language: "Afrikaans",
        hello: "hallo",
    },
    {
        language: "Albanian",
        hello: "Përshëndetje",
    },
    {
        language: "Amharic",
        hello: "ሰላም",
    },
    {
        language: "Arabic",
        hello: "مرحبا",
    },
    {
        language: "Armenian",
        hello: "Բարեւ",
    },
    {
        language: "Azerbaijani",
        hello: "Salam",
    },
    {
        language: "Basque",
        hello: "Kaixo",
    },
    {
        language: "Belarusian",
        hello: "добры дзень",
    },
    {
        language: "Bengali",
        hello: "হ্যালো",
    },
    {
        language: "Bosnian",
        hello: "zdravo",
    },
    {
        language: "Bulgarian",
        hello: "Здравейте",
    },
    {
        language: "Catalan",
        hello: "Hola",
    },
    {
        language: "Cebuano",
        hello: "Hello",
    },
    {
        language: "Chichewa",
        hello: "Moni",
    },
    {
        language: "Chinese (Simplified)",
        hello: "您好",
    },
    {
        language: "Chinese (Traditional)",
        hello: "您好",
    },
    {
        language: "Corsican",
        hello: "Bonghjornu",
    },
    {
        language: "Croatian",
        hello: "zdravo",
    },
    {
        language: "Czech",
        hello: "Ahoj",
    },
    {
        language: "Danish",
        hello: "Hej",
    },
    {
        language: "Dutch",
        hello: "Hallo",
    },
    {
        language: "English",
        hello: "Hello",
    },
    {
        language: "Esperanto",
        hello: "Saluton",
    },
    {
        language: "Estonian",
        hello: "Tere",
    },
    {
        language: "Filipino",
        hello: "Hello",
    },
    {
        language: "Finnish",
        hello: "Hei",
    },
    {
        language: "French",
        hello: "Bonjour",
    },
    {
        language: "Frisian",
        hello: "Hello",
    },
    {
        language: "Galician",
        hello: "Ola",
    },
    {
        language: "Georgian",
        hello: "გამარჯობა",
    },
    {
        language: "German",
        hello: "Hallo",
    },
    {
        language: "Greek",
        hello: "Γεια σας",
    },
    {
        language: "Gujarati",
        hello: "હેલો",
    },
    {
        language: "Haitian Creole",
        hello: "Bonjou",
    },
    {
        language: "Hausa",
        hello: "Sannu",
    },
    {
        language: "Hawaiian",
        hello: "Alohaʻoe",
    },
    {
        language: "Hebrew",
        hello: "שלום",
    },
    {
        language: "Hindi",
        hello: "नमस्ते",
    },
    {
        language: "Hmong",
        hello: "Nyob zoo",
    },
    {
        language: "Hungarian",
        hello: "Helló",
    },
    {
        language: "Icelandic",
        hello: "Halló",
    },
    {
        language: "Igbo",
        hello: "Ndewo",
    },
    {
        language: "Indonesian",
        hello: "Halo",
    },
    {
        language: "Irish",
        hello: "Dia duit",
    },
    {
        language: "Italian",
        hello: "Ciao",
    },
    {
        language: "Japanese",
        hello: "こんにちは",
    },
    {
        language: "Javanese",
        hello: "Hello",
    },
    {
        language: "Kannada",
        hello: "ಹಲೋ",
    },
    {
        language: "Kazakh",
        hello: "Сәлем",
    },
    {
        language: "Khmer",
        hello: "ជំរាបសួរ",
    },
    {
        language: "Korean",
        hello: "안녕하세요.",
    },
    {
        language: "Kurdish (Kurmanji)",
        hello: "Hello",
    },
    {
        language: "Kyrgyz",
        hello: "салам",
    },
    {
        language: "Lao",
        hello: "ສະບາຍດີ",
    },
    {
        language: "Latin",
        hello: "salve",
    },
    {
        language: "Latvian",
        hello: "Labdien!",
    },
    {
        language: "Lithuanian",
        hello: "Sveiki",
    },
    {
        language: "Luxembourgish",
        hello: "Moien",
    },
    {
        language: "Macedonian",
        hello: "Здраво",
    },
    {
        language: "Malagasy",
        hello: "Hello",
    },
    {
        language: "Malay",
        hello: "Hello",
    },
    {
        language: "Malayalam",
        hello: "ഹലോ",
    },
    {
        language: "Maltese",
        hello: "Hello",
    },
    {
        language: "Maori",
        hello: "Hiha",
    },
    {
        language: "Marathi",
        hello: "हॅलो",
    },
    {
        language: "Mongolian",
        hello: "Сайн байна уу",
    },
    {
        language: "Myanmar (Burmese)",
        hello: "မင်္ဂလာပါ",
    },
    {
        language: "Nepali",
        hello: "नमस्ते",
    },
    {
        language: "Norwegian",
        hello: "Hallo",
    },
    {
        language: "Pashto",
        hello: "سلام",
    },
    {
        language: "Persian",
        hello: "سلام",
    },
    {
        language: "Polish",
        hello: "Cześć",
    },
    {
        language: "Portuguese",
        hello: "Olá",
    },
    {
        language: "Punjabi",
        hello: "ਹੈਲੋ",
    },
    {
        language: "Romanian",
        hello: "Alo",
    },
    {
        language: "Russian",
        hello: "привет",
    },
    {
        language: "Samoan",
        hello: "Talofa",
    },
    {
        language: "Scots Gaelic",
        hello: "Hello",
    },
    {
        language: "Serbian",
        hello: "Здраво",
    },
    {
        language: "Sesotho",
        hello: "Hello",
    },
    {
        language: "Shona",
        hello: "Hello",
    },
    {
        language: "Sindhi",
        hello: "هيلو",
    },
    {
        language: "Sinhala",
        hello: "හෙලෝ",
    },
    {
        language: "Slovak",
        hello: "ahoj",
    },
    {
        language: "Slovenian",
        hello: "Pozdravljeni",
    },
    {
        language: "Somali",
        hello: "Hello",
    },
    {
        language: "Spanish",
        hello: "Hola",
    },
    {
        language: "Sundanese",
        hello: "halo",
    },
    {
        language: "Swahili",
        hello: "Sawa",
    },
    {
        language: "Swedish",
        hello: "Hallå",
    },
    {
        language: "Tajik",
        hello: "Салом",
    },
    {
        language: "Tamil",
        hello: "ஹலோ",
    },
    {
        language: "Telugu",
        hello: "హలో",
    },
    {
        language: "Thai",
        hello: "สวัสดี",
    },
    {
        language: "Turkish",
        hello: "Merhaba",
    },
    {
        language: "Ukranian",
        hello: "Здрастуйте",
    },
    {
        language: "Urdu",
        hello: "ہیلو",
    },
    {
        language: "Uzbek",
        hello: "Salom",
    },
    {
        language: "Vietnamese",
        hello: "Xin chào",
    },
    {
        language: "Welsh",
        hello: "Helo",
    },
    {
        language: "Xhosa",
        hello: "Sawubona",
    },
    {
        language: "Yiddish",
        hello: "העלא",
    },
    {
        language: "Yoruba",
        hello: "Kaabo",
    },
    {
        language: "Zulu",
        hello: "Sawubona",
    },
];

const loader = document.querySelector(".loader-wrapper");
document.body.classList.add("overflow-hidden");
window.onload = function (e) {

    setTimeout(() => {
        loader.classList.remove("d-block");
        document.body.classList.remove("overflow-hidden");
        let rellax = new Rellax(".rellax");
        let typed = new Typed(".main_text", {
            strings: ["", `<span>${greetingList[Math.floor(Math.random() * greetingList.length)].hello}</span> I'm <br /> Sargis`],
            typeSpeed: 80,
        });
    }, 3000);
    $(".burger, .overlay").click(function () {
        $(".burger").toggleClass("clicked");
        $(".burger").toggleClass("active");
        $(".overlay").toggleClass("show");
        $("nav").toggleClass("show");
        $("body").toggleClass("overflow");
    });

    document.querySelectorAll('.menu-item').forEach(ele => {
        ele.addEventListener('click', () => {
            $(".burger").toggleClass("clicked");
            $(".burger").toggleClass("active");
            $(".overlay").toggleClass("show");
            $("nav").toggleClass("show");
            $("body").toggleClass("overflow");
        })

    })

    $(".js-tilt").tilt({
        glare: true,
        maxGlare: 0.5,
    });

    Particles.init({
        selector: ".background",
        color: "#eeeeee", //#e22367
        connectParticles: true,
        maxParticles: 70,

        responsive: [
            {
                breakpoint: 850,
                options: {
                    maxParticles: 50,
                },
            },
            {
                breakpoint: 320,
                options: {
                    maxParticles: 20,
                },
            },
        ],
    });

    SmoothScroll({
        animationTime: 800,
        stepSize: 75,
        accelerationDelta: 30,
        accelerationMax: 2,
        keyboardSupport: true,
        arrowScroll: 50,
        pulseAlgorithm: true,
        pulseScale: 4,
        pulseNormalize: 1,
        touchpadSupport: true,
    });


    let cursor = document.querySelector(".cursor");
    let cursorinner = document.querySelector(".cursor2");
    document.addEventListener("mousemove", function (e) {
        let x = e.clientX;
        let y = e.clientY;
        cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
    });

    document.addEventListener("mousemove", function (e) {
        let x = e.clientX;
        let y = e.clientY;
        cursorinner.style.left = x + "px";
        cursorinner.style.top = y + "px";
    });


};
