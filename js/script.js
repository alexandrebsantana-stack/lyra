document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // CADASTRO
    // =========================
    const cadastroForm = document.querySelector("form#cadastroForm");

    if (cadastroForm) {
        cadastroForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const nome = document.getElementById("nome").value;
            const email = document.getElementById("email").value;
            const senha = document.getElementById("senha").value;

            if (nome === "" || email === "" || senha === "") {
                alert("Preencha todos os campos!");
                return;
            }

            const usuario = {
                nome: nome,
                email: email,
                senha: senha
            };

            localStorage.setItem("usuario", JSON.stringify(usuario));

            alert("Cadastro realizado com sucesso!");

            window.location.href = "login.html";
        });
    }

    // =========================
    // LOGIN
    // =========================
    const loginForm = document.querySelector("form#loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const email = document.getElementById("email").value;
            const senha = document.getElementById("senha").value;

            const usuarioSalvo = JSON.parse(localStorage.getItem("usuario"));

            if (!usuarioSalvo) {
                alert("Nenhum usuário cadastrado.");
                return;
            }

            if (email === usuarioSalvo.email && senha === usuarioSalvo.senha) {

                localStorage.setItem("usuarioLogado", JSON.stringify(usuarioSalvo));

                alert("Login realizado!");

                window.location.href = "index.html";

            } else {
                alert("Email ou senha incorretos!");
            }
        });
    }

    // =========================
    // MOSTRAR USUÁRIO
    // =========================
    const nomeUsuario = document.getElementById("nomeUsuario");

    if (nomeUsuario) {

        const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

        if (usuarioLogado) {
            nomeUsuario.textContent = usuarioLogado.nome;
        }

    }

    // =========================
    // LOGOUT
    // =========================
    const logoutBtn = document.getElementById("logout");

    if (logoutBtn) {

        logoutBtn.addEventListener("click", function () {

            localStorage.removeItem("usuarioLogado");

            alert("Logout realizado!");

            window.location.href = "login.html";

        });

    }

});