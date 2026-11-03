


document.addEventListener("DOMContentLoaded", () => {

    const nameElement = document.getElementById("typing-name");
    const professionElement = document.getElementById("typing-profession");

    const nameText = "Lasson Januário Nhar";

    const professions = [
        "Estudante de Informática",
        "Desenvolvedor Web",
        "Programador",
        "Criador de Sistemas",
        "Entusiasta de Tecnologia"
    ];

    let professionIndex = 0;


    // ==========================================
    // EFEITO DE ESCREVER O NOME
    // ==========================================

    function typeName() {

        let index = 0;

        function write() {

            if (index < nameText.length) {

                nameElement.textContent += nameText.charAt(index);

                index++;

                setTimeout(write, 100);

            } else {

                setTimeout(typeProfession, 700);

            }

        }

        write();
    }


    // ==========================================
    // EFEITO DE ESCREVER A PROFISSÃO
    // ==========================================

    function typeProfession() {

        const text = professions[professionIndex];

        professionElement.textContent = "";

        let index = 0;


        function write() {

            if (index < text.length) {

                professionElement.textContent += text.charAt(index);

                index++;

                setTimeout(write, 80);

            } else {

                setTimeout(deleteProfession, 1800);

            }

        }

        write();
    }


    // ==========================================
    // APAGAR A PROFISSÃO
    // ==========================================

    function deleteProfession() {

        const text = professionElement.textContent;

        if (text.length > 0) {

            professionElement.textContent =
                text.substring(0, text.length - 1);

            setTimeout(deleteProfession, 45);

        } else {

            professionIndex++;

            if (professionIndex >= professions.length) {

                professionIndex = 0;

            }

            setTimeout(typeProfession, 400);

        }

    }


    // ==========================================
    // INICIAR ANIMAÇÃO
    // ==========================================

    typeName();

        // ==========================================
    // MENU TOGGLE — MOBILE
    // ==========================================

    const menuToggle =
        document.getElementById("menu-toggle");

    const menu =
        document.querySelector(".menu");


    menuToggle.addEventListener("click", () => {

        const aberto =
            menu.classList.toggle("ativo");

        menuToggle.classList.toggle(
            "ativo",
            aberto
        );

        menuToggle.setAttribute(
            "aria-expanded",
            aberto
        );

        menuToggle.setAttribute(
            "aria-label",
            aberto
                ? "Fechar menu"
                : "Abrir menu"
        );

    });


    // ==========================================
    // FECHAR MENU AO CLICAR NUM LINK
    // ==========================================

    menu.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            menu.classList.remove("ativo");

            menuToggle.classList.remove("ativo");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Abrir menu"
            );

        });

    });

});