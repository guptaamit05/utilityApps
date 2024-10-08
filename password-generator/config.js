window.env = {
    STATIC_TXT: "Generate password from 5 to 120 charcter long.",
    getLower:function() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
    },
    getUpper:function() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
    },
    getNumber:function() {
        return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
    },
    getSymbolsPattern:function() {
        let p = "!@#$%^&*()_+:;'<>?/'";
        return p[Math.floor(Math.random() * p.length)]
},

  };