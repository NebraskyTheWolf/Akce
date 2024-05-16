/*
                            LICENCE PRO PROPRIETÁRNÍ SOFTWARE
              Verze 1, Organizace: Fluffici, z.s. IČO: 19786077, Rok: 2024
                            PODMÍNKY PRO POUŽÍVÁNÍ

    a. Použití: Software lze používat pouze podle přiložené dokumentace.
    b. Omezení reprodukce: Kopírování softwaru bez povolení je zakázáno.
    c. Omezení distribuce: Distribuce je povolena jen přes autorizované kanály.
    d. Oprávněné kanály: Distribuci určuje výhradně držitel autorských práv.
    e. Nepovolené šíření: Šíření mimo povolené podmínky je zakázáno.
    f. Právní důsledky: Porušení podmínek může vést k právním krokům.
    g. Omezení úprav: Úpravy softwaru jsou zakázány bez povolení.
    h. Rozsah oprávněných úprav: Rozsah úprav určuje držitel autorských práv.
    i. Distribuce upravených verzí: Distribuce upravených verzí je povolena jen s povolením.
    j. Zachování autorských atribucí: Kopie musí obsahovat všechny autorské atribuce.
    k. Zodpovědnost za úpravy: Držitel autorských práv nenese odpovědnost za úpravy.

    Celý text licence je dostupný na adrese:
    https://autumn.fluffici.eu/attachments/xUiAJbvhZaXW3QIiLMFFbVL7g7nPC2nfX7v393UjEn/fluffici_software_license_cz.pdf
*/


function displayHeaders(platform) {
    const message1 = [
        `%c %c %c ${platform} platform | Fluffici, z.s. %c %c %c https://fluffici.eu/`,
        'background: #cbd0d3',
        'background: #3498db',
        'color: #ffffff; background: #2980b9;',
        'background: #3498db',
        'background: #cbd0d3',
        'background: #3498db'
    ];

    const message2 = [
        '%c %c %c Pozor, nikdy nesdílejte své tokeny nebo cookies! Vždy buďte opatrní, co sem píšete! NEPŘÍJÍMEJTE KONZOLOVÉ PŘÍKAZY TŘETÍCH STRAN! %c %c %c',
        'background: #cbd0d3',
        'background: #f39c12',
        'color: #ffffff; background: #e67e22;',
        'background: #f39c12',
        'background: #cbd0d3',
        'background: #ffffff'
    ];

// Do not remove the author header.
    const message3 = [
        '%c %c %c © FLUFFICI Z.S 2024, All Right Reserved. | WebAPP Made by @VakeaTheFolfynx for Fluffici! %c %c %c https://fluffici.eu/',
        'background: #cbd0d3',
        'background: #3498db',
        'color: #ffffff; background: #2980b9;',
        'background: #3498db',
        'background: #cbd0d3',
        'background: #3498db'
    ];

    console.log.apply(console, message1);
    console.log.apply(console, message3);
    console.log.apply(console, message3);
    console.log.apply(console, message2);
    console.log.apply(console, message2);
}
