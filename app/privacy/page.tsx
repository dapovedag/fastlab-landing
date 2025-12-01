"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

type Lang = "es" | "en" | "fr" | "sk" | "de" | "it" | "pt";

const content = {
  es: {
    title: "Política de Privacidad",
    lastUpdate: "Última actualización: 1 de diciembre de 2025",
    backHome: "← Volver al inicio",
    footer: "Tu fábrica de software.",
    sections: [
      {
        title: "1. Información General",
        content: 'FastLab ("nosotros", "nuestro" o "la empresa") se compromete a proteger la privacidad de los visitantes de nuestro sitio web fastlab.art y de nuestros clientes. Esta Política de Privacidad describe cómo recopilamos, usamos, almacenamos y protegemos su información personal.',
      },
      {
        title: "2. Información que Recopilamos",
        content: "Podemos recopilar los siguientes tipos de información:",
        list: [
          "<strong>Información de contacto:</strong> nombre, correo electrónico, número de teléfono y empresa, cuando nos contacta a través de nuestro formulario.",
          "<strong>Información técnica:</strong> dirección IP, tipo de navegador, dispositivo utilizado y páginas visitadas, recopiladas automáticamente para mejorar nuestro servicio.",
          "<strong>Información del proyecto:</strong> detalles sobre sus necesidades de software que comparte voluntariamente durante las consultas.",
        ],
      },
      {
        title: "3. Uso de la Información",
        content: "Utilizamos su información para:",
        list: [
          "Responder a sus consultas y solicitudes de servicio.",
          "Proporcionar y mejorar nuestros servicios de desarrollo de software.",
          "Enviar comunicaciones relacionadas con proyectos activos.",
          "Mejorar la experiencia del usuario en nuestro sitio web.",
          "Cumplir con obligaciones legales aplicables.",
        ],
      },
      {
        title: "4. Protección de Datos",
        content: "Implementamos medidas de seguridad técnicas y organizativas para proteger su información personal contra acceso no autorizado, alteración, divulgación o destrucción. Estas medidas incluyen cifrado de datos, acceso restringido y servidores seguros.",
      },
      {
        title: "5. Compartir Información",
        content: "No vendemos, alquilamos ni compartimos su información personal con terceros, excepto en las siguientes circunstancias:",
        list: [
          "Con proveedores de servicios que nos ayudan a operar nuestro negocio (hosting, email).",
          "Cuando sea requerido por ley o autoridades competentes.",
          "Con su consentimiento explícito.",
        ],
      },
      {
        title: "6. Sus Derechos",
        content: "Usted tiene derecho a:",
        list: [
          "Acceder a la información personal que tenemos sobre usted.",
          "Solicitar la corrección de datos inexactos.",
          "Solicitar la eliminación de sus datos personales.",
          "Oponerse al procesamiento de sus datos.",
          "Retirar su consentimiento en cualquier momento.",
        ],
      },
      {
        title: "7. Cookies",
        content: "Nuestro sitio web utiliza cookies esenciales para su funcionamiento básico. No utilizamos cookies de seguimiento de terceros ni publicidad. Puede configurar su navegador para rechazar cookies, aunque esto puede afectar algunas funcionalidades del sitio.",
      },
      {
        title: "8. Retención de Datos",
        content: "Conservamos su información personal solo durante el tiempo necesario para cumplir con los fines descritos en esta política, a menos que la ley requiera o permita un período de retención más largo.",
      },
      {
        title: "9. Cambios a esta Política",
        content: "Podemos actualizar esta Política de Privacidad ocasionalmente. Le notificaremos sobre cambios significativos publicando la nueva política en esta página con una fecha de actualización revisada.",
      },
      {
        title: "10. Contacto",
        content: "Si tiene preguntas sobre esta Política de Privacidad o desea ejercer sus derechos, puede contactarnos a través de nuestro formulario de contacto o enviando un correo electrónico a contacto@fastlab.art.",
        hasContactLink: true,
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    lastUpdate: "Last updated: December 1, 2025",
    backHome: "← Back to home",
    footer: "Your software factory.",
    sections: [
      {
        title: "1. General Information",
        content: 'FastLab ("we", "our" or "the company") is committed to protecting the privacy of visitors to our website fastlab.art and our clients. This Privacy Policy describes how we collect, use, store and protect your personal information.',
      },
      {
        title: "2. Information We Collect",
        content: "We may collect the following types of information:",
        list: [
          "<strong>Contact information:</strong> name, email, phone number and company, when you contact us through our form.",
          "<strong>Technical information:</strong> IP address, browser type, device used and pages visited, collected automatically to improve our service.",
          "<strong>Project information:</strong> details about your software needs that you voluntarily share during consultations.",
        ],
      },
      {
        title: "3. Use of Information",
        content: "We use your information to:",
        list: [
          "Respond to your inquiries and service requests.",
          "Provide and improve our software development services.",
          "Send communications related to active projects.",
          "Improve user experience on our website.",
          "Comply with applicable legal obligations.",
        ],
      },
      {
        title: "4. Data Protection",
        content: "We implement technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure or destruction. These measures include data encryption, restricted access and secure servers.",
      },
      {
        title: "5. Sharing Information",
        content: "We do not sell, rent or share your personal information with third parties, except in the following circumstances:",
        list: [
          "With service providers who help us operate our business (hosting, email).",
          "When required by law or competent authorities.",
          "With your explicit consent.",
        ],
      },
      {
        title: "6. Your Rights",
        content: "You have the right to:",
        list: [
          "Access the personal information we hold about you.",
          "Request correction of inaccurate data.",
          "Request deletion of your personal data.",
          "Object to the processing of your data.",
          "Withdraw your consent at any time.",
        ],
      },
      {
        title: "7. Cookies",
        content: "Our website uses essential cookies for basic functionality. We do not use third-party tracking or advertising cookies. You can configure your browser to reject cookies, although this may affect some site functionality.",
      },
      {
        title: "8. Data Retention",
        content: "We retain your personal information only for as long as necessary to fulfill the purposes described in this policy, unless the law requires or permits a longer retention period.",
      },
      {
        title: "9. Changes to this Policy",
        content: "We may update this Privacy Policy occasionally. We will notify you of significant changes by posting the new policy on this page with a revised update date.",
      },
      {
        title: "10. Contact",
        content: "If you have questions about this Privacy Policy or wish to exercise your rights, you can contact us through our contact form or by sending an email to contacto@fastlab.art.",
        hasContactLink: true,
      },
    ],
  },
  fr: {
    title: "Politique de Confidentialité",
    lastUpdate: "Dernière mise à jour : 1er décembre 2025",
    backHome: "← Retour à l'accueil",
    footer: "Votre usine logicielle.",
    sections: [
      {
        title: "1. Informations Générales",
        content: 'FastLab ("nous", "notre" ou "l\'entreprise") s\'engage à protéger la confidentialité des visiteurs de notre site web fastlab.art et de nos clients. Cette Politique de Confidentialité décrit comment nous collectons, utilisons, stockons et protégeons vos informations personnelles.',
      },
      {
        title: "2. Informations que Nous Collectons",
        content: "Nous pouvons collecter les types d'informations suivants :",
        list: [
          "<strong>Informations de contact :</strong> nom, email, numéro de téléphone et entreprise, lorsque vous nous contactez via notre formulaire.",
          "<strong>Informations techniques :</strong> adresse IP, type de navigateur, appareil utilisé et pages visitées, collectées automatiquement pour améliorer notre service.",
          "<strong>Informations sur le projet :</strong> détails sur vos besoins logiciels que vous partagez volontairement lors des consultations.",
        ],
      },
      {
        title: "3. Utilisation des Informations",
        content: "Nous utilisons vos informations pour :",
        list: [
          "Répondre à vos demandes et sollicitations de service.",
          "Fournir et améliorer nos services de développement logiciel.",
          "Envoyer des communications liées aux projets actifs.",
          "Améliorer l'expérience utilisateur sur notre site web.",
          "Respecter les obligations légales applicables.",
        ],
      },
      {
        title: "4. Protection des Données",
        content: "Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles pour protéger vos informations personnelles contre l'accès non autorisé, l'altération, la divulgation ou la destruction. Ces mesures incluent le chiffrement des données, l'accès restreint et des serveurs sécurisés.",
      },
      {
        title: "5. Partage des Informations",
        content: "Nous ne vendons, ne louons ni ne partageons vos informations personnelles avec des tiers, sauf dans les circonstances suivantes :",
        list: [
          "Avec des prestataires de services qui nous aident à exploiter notre entreprise (hébergement, email).",
          "Lorsque la loi ou les autorités compétentes l'exigent.",
          "Avec votre consentement explicite.",
        ],
      },
      {
        title: "6. Vos Droits",
        content: "Vous avez le droit de :",
        list: [
          "Accéder aux informations personnelles que nous détenons sur vous.",
          "Demander la correction de données inexactes.",
          "Demander la suppression de vos données personnelles.",
          "Vous opposer au traitement de vos données.",
          "Retirer votre consentement à tout moment.",
        ],
      },
      {
        title: "7. Cookies",
        content: "Notre site web utilise des cookies essentiels pour son fonctionnement de base. Nous n'utilisons pas de cookies de suivi tiers ni de publicité. Vous pouvez configurer votre navigateur pour refuser les cookies, bien que cela puisse affecter certaines fonctionnalités du site.",
      },
      {
        title: "8. Conservation des Données",
        content: "Nous conservons vos informations personnelles uniquement pendant la durée nécessaire pour atteindre les objectifs décrits dans cette politique, sauf si la loi exige ou permet une période de conservation plus longue.",
      },
      {
        title: "9. Modifications de cette Politique",
        content: "Nous pouvons mettre à jour cette Politique de Confidentialité occasionnellement. Nous vous informerons des changements significatifs en publiant la nouvelle politique sur cette page avec une date de mise à jour révisée.",
      },
      {
        title: "10. Contact",
        content: "Si vous avez des questions sur cette Politique de Confidentialité ou souhaitez exercer vos droits, vous pouvez nous contacter via notre formulaire de contact ou en envoyant un email à contacto@fastlab.art.",
        hasContactLink: true,
      },
    ],
  },
  sk: {
    title: "Zásady Ochrany Osobných Údajov",
    lastUpdate: "Posledná aktualizácia: 1. december 2025",
    backHome: "← Späť na úvod",
    footer: "Vaša softvérová továreň.",
    sections: [
      {
        title: "1. Všeobecné Informácie",
        content: 'FastLab ("my", "náš" alebo "spoločnosť") sa zaväzuje chrániť súkromie návštevníkov našej webovej stránky fastlab.art a našich klientov. Tieto Zásady ochrany osobných údajov popisujú, ako zhromažďujeme, používame, uchovávame a chránime vaše osobné údaje.',
      },
      {
        title: "2. Informácie, Ktoré Zhromažďujeme",
        content: "Môžeme zhromažďovať nasledujúce typy informácií:",
        list: [
          "<strong>Kontaktné informácie:</strong> meno, email, telefónne číslo a spoločnosť, keď nás kontaktujete prostredníctvom nášho formulára.",
          "<strong>Technické informácie:</strong> IP adresa, typ prehliadača, použité zariadenie a navštívené stránky, automaticky zhromažďované na zlepšenie našich služieb.",
          "<strong>Informácie o projekte:</strong> podrobnosti o vašich softvérových potrebách, ktoré dobrovoľne zdieľate počas konzultácií.",
        ],
      },
      {
        title: "3. Použitie Informácií",
        content: "Vaše informácie používame na:",
        list: [
          "Odpovedanie na vaše otázky a žiadosti o služby.",
          "Poskytovanie a zlepšovanie našich služieb vývoja softvéru.",
          "Zasielanie komunikácií súvisiacich s aktívnymi projektmi.",
          "Zlepšovanie používateľského zážitku na našej webovej stránke.",
          "Dodržiavanie platných právnych povinností.",
        ],
      },
      {
        title: "4. Ochrana Údajov",
        content: "Implementujeme technické a organizačné bezpečnostné opatrenia na ochranu vašich osobných údajov pred neoprávneným prístupom, zmenou, zverejnením alebo zničením. Tieto opatrenia zahŕňajú šifrovanie údajov, obmedzený prístup a zabezpečené servery.",
      },
      {
        title: "5. Zdieľanie Informácií",
        content: "Nepredávame, neprenajímame ani nezdieľame vaše osobné údaje s tretími stranami, okrem nasledujúcich okolností:",
        list: [
          "S poskytovateľmi služieb, ktorí nám pomáhajú prevádzkovať naše podnikanie (hosting, email).",
          "Keď to vyžaduje zákon alebo príslušné orgány.",
          "S vaším výslovným súhlasom.",
        ],
      },
      {
        title: "6. Vaše Práva",
        content: "Máte právo:",
        list: [
          "Pristupovať k osobným údajom, ktoré o vás máme.",
          "Požadovať opravu nepresných údajov.",
          "Požadovať vymazanie vašich osobných údajov.",
          "Namietať proti spracovaniu vašich údajov.",
          "Kedykoľvek odvolať svoj súhlas.",
        ],
      },
      {
        title: "7. Cookies",
        content: "Naša webová stránka používa základné cookies pre základnú funkčnosť. Nepoužívame sledovacie cookies tretích strán ani reklamné cookies. Môžete si nakonfigurovať prehliadač tak, aby cookies odmietol, hoci to môže ovplyvniť niektoré funkcie stránky.",
      },
      {
        title: "8. Uchovávanie Údajov",
        content: "Vaše osobné údaje uchovávame len po dobu nevyhnutnú na splnenie účelov opísaných v týchto zásadách, pokiaľ zákon nevyžaduje alebo nepovoľuje dlhšiu dobu uchovávania.",
      },
      {
        title: "9. Zmeny Tejto Politiky",
        content: "Tieto Zásady ochrany osobných údajov môžeme príležitostne aktualizovať. O významných zmenách vás budeme informovať zverejnením novej politiky na tejto stránke s aktualizovaným dátumom.",
      },
      {
        title: "10. Kontakt",
        content: "Ak máte otázky týkajúce sa týchto Zásad ochrany osobných údajov alebo chcete uplatniť svoje práva, môžete nás kontaktovať prostredníctvom nášho kontaktného formulára alebo zaslaním emailu na contacto@fastlab.art.",
        hasContactLink: true,
      },
    ],
  },
  de: {
    title: "Datenschutzrichtlinie",
    lastUpdate: "Letzte Aktualisierung: 1. Dezember 2025",
    backHome: "← Zurück zur Startseite",
    footer: "Ihre Software-Fabrik.",
    sections: [
      {
        title: "1. Allgemeine Informationen",
        content: 'FastLab ("wir", "unser" oder "das Unternehmen") verpflichtet sich, die Privatsphäre der Besucher unserer Website fastlab.art und unserer Kunden zu schützen. Diese Datenschutzrichtlinie beschreibt, wie wir Ihre persönlichen Daten erfassen, verwenden, speichern und schützen.',
      },
      {
        title: "2. Informationen, die Wir Erfassen",
        content: "Wir können die folgenden Arten von Informationen erfassen:",
        list: [
          "<strong>Kontaktinformationen:</strong> Name, E-Mail, Telefonnummer und Unternehmen, wenn Sie uns über unser Formular kontaktieren.",
          "<strong>Technische Informationen:</strong> IP-Adresse, Browsertyp, verwendetes Gerät und besuchte Seiten, die automatisch erfasst werden, um unseren Service zu verbessern.",
          "<strong>Projektinformationen:</strong> Details zu Ihren Software-Anforderungen, die Sie während der Beratungen freiwillig teilen.",
        ],
      },
      {
        title: "3. Verwendung der Informationen",
        content: "Wir verwenden Ihre Informationen, um:",
        list: [
          "Auf Ihre Anfragen und Serviceanforderungen zu antworten.",
          "Unsere Softwareentwicklungsdienste bereitzustellen und zu verbessern.",
          "Kommunikationen zu aktiven Projekten zu senden.",
          "Die Benutzererfahrung auf unserer Website zu verbessern.",
          "Geltende gesetzliche Verpflichtungen einzuhalten.",
        ],
      },
      {
        title: "4. Datenschutz",
        content: "Wir implementieren technische und organisatorische Sicherheitsmaßnahmen, um Ihre persönlichen Daten vor unbefugtem Zugriff, Änderung, Offenlegung oder Zerstörung zu schützen. Diese Maßnahmen umfassen Datenverschlüsselung, eingeschränkten Zugang und sichere Server.",
      },
      {
        title: "5. Weitergabe von Informationen",
        content: "Wir verkaufen, vermieten oder teilen Ihre persönlichen Daten nicht mit Dritten, außer unter folgenden Umständen:",
        list: [
          "Mit Dienstleistern, die uns beim Betrieb unseres Unternehmens helfen (Hosting, E-Mail).",
          "Wenn es von Gesetzen oder zuständigen Behörden verlangt wird.",
          "Mit Ihrer ausdrücklichen Zustimmung.",
        ],
      },
      {
        title: "6. Ihre Rechte",
        content: "Sie haben das Recht:",
        list: [
          "Auf die persönlichen Daten zuzugreifen, die wir über Sie haben.",
          "Die Korrektur ungenauer Daten zu verlangen.",
          "Die Löschung Ihrer persönlichen Daten zu verlangen.",
          "Der Verarbeitung Ihrer Daten zu widersprechen.",
          "Ihre Einwilligung jederzeit zu widerrufen.",
        ],
      },
      {
        title: "7. Cookies",
        content: "Unsere Website verwendet wesentliche Cookies für grundlegende Funktionalität. Wir verwenden keine Tracking-Cookies von Drittanbietern oder Werbe-Cookies. Sie können Ihren Browser so konfigurieren, dass er Cookies ablehnt, obwohl dies einige Funktionen der Website beeinträchtigen kann.",
      },
      {
        title: "8. Datenspeicherung",
        content: "Wir bewahren Ihre persönlichen Daten nur so lange auf, wie es zur Erfüllung der in dieser Richtlinie beschriebenen Zwecke erforderlich ist, es sei denn, das Gesetz verlangt oder erlaubt eine längere Aufbewahrungsfrist.",
      },
      {
        title: "9. Änderungen dieser Richtlinie",
        content: "Wir können diese Datenschutzrichtlinie gelegentlich aktualisieren. Wir werden Sie über wesentliche Änderungen informieren, indem wir die neue Richtlinie auf dieser Seite mit einem aktualisierten Datum veröffentlichen.",
      },
      {
        title: "10. Kontakt",
        content: "Wenn Sie Fragen zu dieser Datenschutzrichtlinie haben oder Ihre Rechte ausüben möchten, können Sie uns über unser Kontaktformular oder per E-Mail an contacto@fastlab.art kontaktieren.",
        hasContactLink: true,
      },
    ],
  },
  it: {
    title: "Informativa sulla Privacy",
    lastUpdate: "Ultimo aggiornamento: 1 dicembre 2025",
    backHome: "← Torna alla home",
    footer: "La tua fabbrica di software.",
    sections: [
      {
        title: "1. Informazioni Generali",
        content: 'FastLab ("noi", "nostro" o "l\'azienda") si impegna a proteggere la privacy dei visitatori del nostro sito web fastlab.art e dei nostri clienti. Questa Informativa sulla Privacy descrive come raccogliamo, utilizziamo, conserviamo e proteggiamo le tue informazioni personali.',
      },
      {
        title: "2. Informazioni che Raccogliamo",
        content: "Possiamo raccogliere i seguenti tipi di informazioni:",
        list: [
          "<strong>Informazioni di contatto:</strong> nome, email, numero di telefono e azienda, quando ci contatti attraverso il nostro modulo.",
          "<strong>Informazioni tecniche:</strong> indirizzo IP, tipo di browser, dispositivo utilizzato e pagine visitate, raccolte automaticamente per migliorare il nostro servizio.",
          "<strong>Informazioni sul progetto:</strong> dettagli sulle tue esigenze software che condividi volontariamente durante le consultazioni.",
        ],
      },
      {
        title: "3. Utilizzo delle Informazioni",
        content: "Utilizziamo le tue informazioni per:",
        list: [
          "Rispondere alle tue richieste e domande di servizio.",
          "Fornire e migliorare i nostri servizi di sviluppo software.",
          "Inviare comunicazioni relative ai progetti attivi.",
          "Migliorare l'esperienza utente sul nostro sito web.",
          "Rispettare gli obblighi legali applicabili.",
        ],
      },
      {
        title: "4. Protezione dei Dati",
        content: "Implementiamo misure di sicurezza tecniche e organizzative per proteggere le tue informazioni personali da accesso non autorizzato, alterazione, divulgazione o distruzione. Queste misure includono crittografia dei dati, accesso limitato e server sicuri.",
      },
      {
        title: "5. Condivisione delle Informazioni",
        content: "Non vendiamo, affittiamo o condividiamo le tue informazioni personali con terze parti, eccetto nelle seguenti circostanze:",
        list: [
          "Con fornitori di servizi che ci aiutano a gestire la nostra attività (hosting, email).",
          "Quando richiesto dalla legge o dalle autorità competenti.",
          "Con il tuo consenso esplicito.",
        ],
      },
      {
        title: "6. I Tuoi Diritti",
        content: "Hai il diritto di:",
        list: [
          "Accedere alle informazioni personali che conserviamo su di te.",
          "Richiedere la correzione di dati inesatti.",
          "Richiedere la cancellazione dei tuoi dati personali.",
          "Opporti al trattamento dei tuoi dati.",
          "Revocare il tuo consenso in qualsiasi momento.",
        ],
      },
      {
        title: "7. Cookie",
        content: "Il nostro sito web utilizza cookie essenziali per la funzionalità di base. Non utilizziamo cookie di tracciamento di terze parti o pubblicitari. Puoi configurare il tuo browser per rifiutare i cookie, anche se questo potrebbe influire su alcune funzionalità del sito.",
      },
      {
        title: "8. Conservazione dei Dati",
        content: "Conserviamo le tue informazioni personali solo per il tempo necessario a soddisfare gli scopi descritti in questa informativa, a meno che la legge non richieda o consenta un periodo di conservazione più lungo.",
      },
      {
        title: "9. Modifiche a Questa Informativa",
        content: "Possiamo aggiornare questa Informativa sulla Privacy occasionalmente. Ti informeremo di modifiche significative pubblicando la nuova informativa su questa pagina con una data di aggiornamento rivista.",
      },
      {
        title: "10. Contatto",
        content: "Se hai domande su questa Informativa sulla Privacy o desideri esercitare i tuoi diritti, puoi contattarci attraverso il nostro modulo di contatto o inviando un'email a contacto@fastlab.art.",
        hasContactLink: true,
      },
    ],
  },
  pt: {
    title: "Política de Privacidade",
    lastUpdate: "Última atualização: 1 de dezembro de 2025",
    backHome: "← Voltar ao início",
    footer: "Sua fábrica de software.",
    sections: [
      {
        title: "1. Informações Gerais",
        content: 'FastLab ("nós", "nosso" ou "a empresa") compromete-se a proteger a privacidade dos visitantes do nosso site fastlab.art e dos nossos clientes. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais.',
      },
      {
        title: "2. Informações que Coletamos",
        content: "Podemos coletar os seguintes tipos de informações:",
        list: [
          "<strong>Informações de contato:</strong> nome, email, número de telefone e empresa, quando você nos contata através do nosso formulário.",
          "<strong>Informações técnicas:</strong> endereço IP, tipo de navegador, dispositivo utilizado e páginas visitadas, coletadas automaticamente para melhorar nosso serviço.",
          "<strong>Informações do projeto:</strong> detalhes sobre suas necessidades de software que você compartilha voluntariamente durante as consultas.",
        ],
      },
      {
        title: "3. Uso das Informações",
        content: "Usamos suas informações para:",
        list: [
          "Responder às suas consultas e solicitações de serviço.",
          "Fornecer e melhorar nossos serviços de desenvolvimento de software.",
          "Enviar comunicações relacionadas a projetos ativos.",
          "Melhorar a experiência do usuário em nosso site.",
          "Cumprir obrigações legais aplicáveis.",
        ],
      },
      {
        title: "4. Proteção de Dados",
        content: "Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Essas medidas incluem criptografia de dados, acesso restrito e servidores seguros.",
      },
      {
        title: "5. Compartilhamento de Informações",
        content: "Não vendemos, alugamos nem compartilhamos suas informações pessoais com terceiros, exceto nas seguintes circunstâncias:",
        list: [
          "Com provedores de serviços que nos ajudam a operar nosso negócio (hospedagem, email).",
          "Quando exigido por lei ou autoridades competentes.",
          "Com seu consentimento explícito.",
        ],
      },
      {
        title: "6. Seus Direitos",
        content: "Você tem o direito de:",
        list: [
          "Acessar as informações pessoais que temos sobre você.",
          "Solicitar a correção de dados imprecisos.",
          "Solicitar a exclusão de seus dados pessoais.",
          "Opor-se ao processamento de seus dados.",
          "Retirar seu consentimento a qualquer momento.",
        ],
      },
      {
        title: "7. Cookies",
        content: "Nosso site usa cookies essenciais para funcionalidade básica. Não usamos cookies de rastreamento de terceiros ou publicidade. Você pode configurar seu navegador para rejeitar cookies, embora isso possa afetar algumas funcionalidades do site.",
      },
      {
        title: "8. Retenção de Dados",
        content: "Retemos suas informações pessoais apenas pelo tempo necessário para cumprir os propósitos descritos nesta política, a menos que a lei exija ou permita um período de retenção mais longo.",
      },
      {
        title: "9. Alterações nesta Política",
        content: "Podemos atualizar esta Política de Privacidade ocasionalmente. Notificaremos você sobre alterações significativas publicando a nova política nesta página com uma data de atualização revisada.",
      },
      {
        title: "10. Contato",
        content: "Se você tiver dúvidas sobre esta Política de Privacidade ou desejar exercer seus direitos, pode nos contatar através do nosso formulário de contato ou enviando um email para contacto@fastlab.art.",
        hasContactLink: true,
      },
    ],
  },
};

function PrivacyContent() {
  const searchParams = useSearchParams();
  const langParam = searchParams.get("lang");
  const lang: Lang = (langParam && ["es", "en", "fr", "sk", "de", "it", "pt"].includes(langParam))
    ? (langParam as Lang)
    : "en";

  const t = content[lang];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-6 lg:px-12 py-4">
          <Link href={`/?lang=${lang}`} className="text-2xl font-bold hover:text-primary transition-colors">
            FastLab
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 lg:px-12 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">{t.title}</h1>
        <p className="text-muted-foreground mb-8">{t.lastUpdate}</p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
          {t.sections.map((section, index) => (
            <section key={index}>
              <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {section.hasContactLink ? (
                  <>
                    {section.content.split("formulario de contato").length > 1 ||
                     section.content.split("contact form").length > 1 ||
                     section.content.split("formulaire de contact").length > 1 ||
                     section.content.split("kontaktného formulára").length > 1 ||
                     section.content.split("Kontaktformular").length > 1 ||
                     section.content.split("modulo di contatto").length > 1 ||
                     section.content.split("formulário de contato").length > 1 ? (
                      section.content
                    ) : section.content}
                  </>
                ) : section.content}
              </p>
              {section.list && (
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  {section.list.map((item, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t">
          <Link href={`/?lang=${lang}`} className="text-primary hover:underline">
            {t.backHome}
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t py-8 mt-12">
        <div className="container mx-auto px-6 lg:px-12 text-center text-muted-foreground">
          <p>&copy; 2025 FastLab. {t.footer}</p>
        </div>
      </footer>
    </div>
  );
}

export default function PrivacyPolicy() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center">Loading...</div>}>
      <PrivacyContent />
    </Suspense>
  );
}
