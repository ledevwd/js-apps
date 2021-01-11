window.onload = () => {
    let btnEncode = document.querySelector("#btn-encode");
    let btnDecode = document.querySelector("#btn-decode");
    let text = document.querySelector("#text");
    let output = document.querySelector("#output");
    let encode, decode;

    btnEncode.onclick = () => {
        if (verify()) {
            encode = window.btoa(text.value);

            output.textContent = encode;
        }
    };

    btnDecode.onclick = () => {
        if (verify()) {
            decode = window.atob(text.value);

            output.textContent = decode;
        }
    };

    function verify() {
        if (text.value == "") {
            text.style.animation = "error 0.4s linear";

            text.onanimationend = () => {
                text.style.animation = "none";
            };
        }

        else {
            output.classList.remove("output");

            return true;
        }
    }
};
