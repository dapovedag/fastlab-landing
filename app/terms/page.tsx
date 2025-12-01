"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

type Lang = "es" | "en" | "fr" | "sk" | "de" | "it" | "pt";

const content = {
  es: {
    title: "Términos de Uso",
    lastUpdate: "Última actualización: 1 de diciembre de 2025",
    backHome: "← Volver al inicio",
    footer: "Tu fábrica de software.",
    sections: [
      {
        title: "1. Aceptación de los Términos",
        content: "Al acceder y utilizar el sitio web fastlab.art y los servicios de FastLab, usted acepta estar sujeto a estos Términos de Uso. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestros servicios.",
      },
      {
        title: "2. Descripción de los Servicios",
        content: "FastLab es una empresa de desarrollo de software que ofrece servicios de creación de productos digitales, incluyendo pero no limitado a: desarrollo de aplicaciones web, soluciones de inteligencia artificial, dashboards, sistemas de automatización y consultoría tecnológica.",
      },
      {
        title: "3. Producto Inicial Gratuito",
        content: "FastLab ofrece un producto inicial sin costo bajo las siguientes condiciones:",
        list: [
          "El producto inicial es un desarrollo funcional entregado en un plazo aproximado de 2 semanas.",
          "El código fuente del producto inicial es propiedad del cliente.",
          "No existe obligación de continuar con servicios adicionales después del producto inicial.",
          "FastLab se reserva el derecho de evaluar y aceptar proyectos según su viabilidad técnica.",
        ],
      },
      {
        title: "4. Propiedad Intelectual",
        content: "Respecto a la propiedad intelectual:",
        list: [
          "<strong>Código del cliente:</strong> Todo el código desarrollado específicamente para el cliente es propiedad exclusiva del cliente.",
          "<strong>Herramientas y librerías:</strong> FastLab puede utilizar herramientas, frameworks y librerías de terceros sujetas a sus propias licencias.",
          "<strong>Contenido del sitio:</strong> El contenido, diseño y marca de fastlab.art son propiedad de FastLab.",
        ],
      },
      {
        title: "5. Responsabilidades del Cliente",
        content: "El cliente se compromete a:",
        list: [
          "Proporcionar información precisa y completa sobre los requerimientos del proyecto.",
          "Responder oportunamente a las solicitudes de información o clarificación.",
          "No utilizar los servicios para fines ilegales o no autorizados.",
          "Mantener la confidencialidad de cualquier credencial o acceso proporcionado.",
        ],
      },
      {
        title: "6. Limitación de Responsabilidad",
        content: "FastLab no será responsable por daños indirectos, incidentales, especiales o consecuentes que resulten del uso o la imposibilidad de usar nuestros servicios. Nuestra responsabilidad máxima estará limitada al monto pagado por el cliente por los servicios en cuestión.",
      },
      {
        title: "7. Confidencialidad",
        content: "FastLab se compromete a mantener la confidencialidad de toda la información del cliente compartida durante el proceso de desarrollo. No divulgaremos información confidencial a terceros sin el consentimiento previo del cliente, excepto cuando sea requerido por ley.",
      },
      {
        title: "8. Garantías y Soporte",
        content: "Para proyectos contratados (posterior al producto inicial gratuito):",
        list: [
          "Se proporciona documentación técnica completa.",
          "Se ofrece un período de corrección de errores según el acuerdo específico del proyecto.",
          "El soporte continuo está disponible bajo contratos de mantenimiento separados.",
        ],
      },
      {
        title: "9. Terminación",
        content: "Cualquiera de las partes puede terminar la relación de servicios con notificación por escrito. En caso de terminación, el cliente recibirá todo el código y documentación generados hasta la fecha de terminación.",
      },
      {
        title: "10. Modificaciones a los Términos",
        content: "FastLab se reserva el derecho de modificar estos Términos de Uso en cualquier momento. Los cambios entrarán en vigencia inmediatamente después de su publicación en el sitio web. El uso continuado de nuestros servicios después de dichos cambios constituye su aceptación de los nuevos términos.",
      },
      {
        title: "11. Ley Aplicable",
        content: "Estos Términos de Uso se regirán e interpretarán de acuerdo con las leyes de la República de Colombia. Cualquier disputa será sometida a la jurisdicción de los tribunales competentes de Colombia.",
      },
      {
        title: "12. Contacto",
        content: "Para preguntas sobre estos Términos de Uso, puede contactarnos a través de nuestro formulario de contacto o enviando un correo electrónico a contacto@fastlab.art.",
      },
    ],
  },
  en: {
    title: "Terms of Service",
    lastUpdate: "Last updated: December 1, 2025",
    backHome: "← Back to home",
    footer: "Your software factory.",
    sections: [
      {
        title: "1. Acceptance of Terms",
        content: "By accessing and using the fastlab.art website and FastLab services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you should not use our services.",
      },
      {
        title: "2. Description of Services",
        content: "FastLab is a software development company that offers digital product creation services, including but not limited to: web application development, artificial intelligence solutions, dashboards, automation systems and technology consulting.",
      },
      {
        title: "3. Free Initial Product",
        content: "FastLab offers a free initial product under the following conditions:",
        list: [
          "The initial product is a functional development delivered in approximately 2 weeks.",
          "The source code of the initial product is owned by the client.",
          "There is no obligation to continue with additional services after the initial product.",
          "FastLab reserves the right to evaluate and accept projects based on technical feasibility.",
        ],
      },
      {
        title: "4. Intellectual Property",
        content: "Regarding intellectual property:",
        list: [
          "<strong>Client code:</strong> All code developed specifically for the client is the exclusive property of the client.",
          "<strong>Tools and libraries:</strong> FastLab may use third-party tools, frameworks and libraries subject to their own licenses.",
          "<strong>Site content:</strong> The content, design and brand of fastlab.art are owned by FastLab.",
        ],
      },
      {
        title: "5. Client Responsibilities",
        content: "The client agrees to:",
        list: [
          "Provide accurate and complete information about project requirements.",
          "Respond promptly to requests for information or clarification.",
          "Not use the services for illegal or unauthorized purposes.",
          "Maintain the confidentiality of any credentials or access provided.",
        ],
      },
      {
        title: "6. Limitation of Liability",
        content: "FastLab shall not be liable for indirect, incidental, special or consequential damages resulting from the use or inability to use our services. Our maximum liability shall be limited to the amount paid by the client for the services in question.",
      },
      {
        title: "7. Confidentiality",
        content: "FastLab commits to maintaining the confidentiality of all client information shared during the development process. We will not disclose confidential information to third parties without the client's prior consent, except when required by law.",
      },
      {
        title: "8. Warranties and Support",
        content: "For contracted projects (after the free initial product):",
        list: [
          "Complete technical documentation is provided.",
          "A bug fix period is offered according to the specific project agreement.",
          "Ongoing support is available under separate maintenance contracts.",
        ],
      },
      {
        title: "9. Termination",
        content: "Either party may terminate the service relationship with written notice. In case of termination, the client will receive all code and documentation generated up to the termination date.",
      },
      {
        title: "10. Modifications to Terms",
        content: "FastLab reserves the right to modify these Terms of Service at any time. Changes will take effect immediately after posting on the website. Continued use of our services after such changes constitutes your acceptance of the new terms.",
      },
      {
        title: "11. Applicable Law",
        content: "These Terms of Service shall be governed by and construed in accordance with the laws of the Republic of Colombia. Any dispute shall be submitted to the jurisdiction of the competent courts of Colombia.",
      },
      {
        title: "12. Contact",
        content: "For questions about these Terms of Service, you can contact us through our contact form or by sending an email to contacto@fastlab.art.",
      },
    ],
  },
  fr: {
    title: "Conditions d'Utilisation",
    lastUpdate: "Dernière mise à jour : 1er décembre 2025",
    backHome: "← Retour à l'accueil",
    footer: "Votre usine logicielle.",
    sections: [
      {
        title: "1. Acceptation des Conditions",
        content: "En accédant et en utilisant le site web fastlab.art et les services de FastLab, vous acceptez d'être lié par ces Conditions d'Utilisation. Si vous n'êtes pas d'accord avec une partie de ces conditions, vous ne devez pas utiliser nos services.",
      },
      {
        title: "2. Description des Services",
        content: "FastLab est une entreprise de développement logiciel qui offre des services de création de produits numériques, incluant mais sans s'y limiter : développement d'applications web, solutions d'intelligence artificielle, tableaux de bord, systèmes d'automatisation et conseil technologique.",
      },
      {
        title: "3. Produit Initial Gratuit",
        content: "FastLab offre un produit initial gratuit sous les conditions suivantes :",
        list: [
          "Le produit initial est un développement fonctionnel livré en environ 2 semaines.",
          "Le code source du produit initial appartient au client.",
          "Il n'y a aucune obligation de continuer avec des services supplémentaires après le produit initial.",
          "FastLab se réserve le droit d'évaluer et d'accepter les projets selon leur faisabilité technique.",
        ],
      },
      {
        title: "4. Propriété Intellectuelle",
        content: "Concernant la propriété intellectuelle :",
        list: [
          "<strong>Code client :</strong> Tout le code développé spécifiquement pour le client est la propriété exclusive du client.",
          "<strong>Outils et bibliothèques :</strong> FastLab peut utiliser des outils, frameworks et bibliothèques tiers soumis à leurs propres licences.",
          "<strong>Contenu du site :</strong> Le contenu, le design et la marque de fastlab.art appartiennent à FastLab.",
        ],
      },
      {
        title: "5. Responsabilités du Client",
        content: "Le client s'engage à :",
        list: [
          "Fournir des informations précises et complètes sur les exigences du projet.",
          "Répondre rapidement aux demandes d'information ou de clarification.",
          "Ne pas utiliser les services à des fins illégales ou non autorisées.",
          "Maintenir la confidentialité de tout identifiant ou accès fourni.",
        ],
      },
      {
        title: "6. Limitation de Responsabilité",
        content: "FastLab ne sera pas responsable des dommages indirects, accessoires, spéciaux ou consécutifs résultant de l'utilisation ou de l'impossibilité d'utiliser nos services. Notre responsabilité maximale sera limitée au montant payé par le client pour les services en question.",
      },
      {
        title: "7. Confidentialité",
        content: "FastLab s'engage à maintenir la confidentialité de toutes les informations du client partagées pendant le processus de développement. Nous ne divulguerons pas d'informations confidentielles à des tiers sans le consentement préalable du client, sauf si la loi l'exige.",
      },
      {
        title: "8. Garanties et Support",
        content: "Pour les projets contractés (après le produit initial gratuit) :",
        list: [
          "Une documentation technique complète est fournie.",
          "Une période de correction de bugs est offerte selon l'accord spécifique du projet.",
          "Un support continu est disponible sous contrats de maintenance séparés.",
        ],
      },
      {
        title: "9. Résiliation",
        content: "L'une ou l'autre des parties peut mettre fin à la relation de service avec un préavis écrit. En cas de résiliation, le client recevra tout le code et la documentation générés jusqu'à la date de résiliation.",
      },
      {
        title: "10. Modifications des Conditions",
        content: "FastLab se réserve le droit de modifier ces Conditions d'Utilisation à tout moment. Les modifications prendront effet immédiatement après leur publication sur le site web. L'utilisation continue de nos services après ces modifications constitue votre acceptation des nouvelles conditions.",
      },
      {
        title: "11. Loi Applicable",
        content: "Ces Conditions d'Utilisation seront régies et interprétées conformément aux lois de la République de Colombie. Tout litige sera soumis à la juridiction des tribunaux compétents de Colombie.",
      },
      {
        title: "12. Contact",
        content: "Pour toute question concernant ces Conditions d'Utilisation, vous pouvez nous contacter via notre formulaire de contact ou en envoyant un email à contacto@fastlab.art.",
      },
    ],
  },
  sk: {
    title: "Podmienky Používania",
    lastUpdate: "Posledná aktualizácia: 1. december 2025",
    backHome: "← Späť na úvod",
    footer: "Vaša softvérová továreň.",
    sections: [
      {
        title: "1. Prijatie Podmienok",
        content: "Prístupom a používaním webovej stránky fastlab.art a služieb FastLab súhlasíte s tým, že ste viazaní týmito Podmienkami používania. Ak nesúhlasíte s akoukoľvek časťou týchto podmienok, nemali by ste používať naše služby.",
      },
      {
        title: "2. Popis Služieb",
        content: "FastLab je spoločnosť zaoberajúca sa vývojom softvéru, ktorá ponúka služby vytvárania digitálnych produktov, vrátane, ale nie výlučne: vývoj webových aplikácií, riešenia umelej inteligencie, dashboardy, automatizačné systémy a technologické poradenstvo.",
      },
      {
        title: "3. Bezplatný Počiatočný Produkt",
        content: "FastLab ponúka bezplatný počiatočný produkt za nasledujúcich podmienok:",
        list: [
          "Počiatočný produkt je funkčný vývoj dodaný približne za 2 týždne.",
          "Zdrojový kód počiatočného produktu je majetkom klienta.",
          "Neexistuje žiadna povinnosť pokračovať v ďalších službách po počiatočnom produkte.",
          "FastLab si vyhradzuje právo vyhodnotiť a prijať projekty na základe technickej uskutočniteľnosti.",
        ],
      },
      {
        title: "4. Duševné Vlastníctvo",
        content: "Pokiaľ ide o duševné vlastníctvo:",
        list: [
          "<strong>Kód klienta:</strong> Všetok kód vyvinutý špecificky pre klienta je výhradným vlastníctvom klienta.",
          "<strong>Nástroje a knižnice:</strong> FastLab môže používať nástroje, frameworky a knižnice tretích strán podliehajúce ich vlastným licenciám.",
          "<strong>Obsah stránky:</strong> Obsah, dizajn a značka fastlab.art sú vlastníctvom FastLab.",
        ],
      },
      {
        title: "5. Zodpovednosti Klienta",
        content: "Klient sa zaväzuje:",
        list: [
          "Poskytnúť presné a úplné informácie o požiadavkách projektu.",
          "Promptne reagovať na žiadosti o informácie alebo objasnenie.",
          "Nepoužívať služby na nezákonné alebo neautorizované účely.",
          "Udržiavať dôvernosť akýchkoľvek poskytnutých prihlasovacích údajov alebo prístupov.",
        ],
      },
      {
        title: "6. Obmedzenie Zodpovednosti",
        content: "FastLab nezodpovedá za nepriame, náhodné, špeciálne alebo následné škody vyplývajúce z používania alebo nemožnosti používať naše služby. Naša maximálna zodpovednosť bude obmedzená na sumu zaplatenú klientom za príslušné služby.",
      },
      {
        title: "7. Dôvernosť",
        content: "FastLab sa zaväzuje zachovávať dôvernosť všetkých informácií klienta zdieľaných počas procesu vývoja. Nezverejníme dôverné informácie tretím stranám bez predchádzajúceho súhlasu klienta, s výnimkou prípadov, keď to vyžaduje zákon.",
      },
      {
        title: "8. Záruky a Podpora",
        content: "Pre zmluvné projekty (po bezplatnom počiatočnom produkte):",
        list: [
          "Poskytuje sa kompletná technická dokumentácia.",
          "Ponúka sa obdobie na opravu chýb podľa konkrétnej dohody projektu.",
          "Priebežná podpora je dostupná v rámci samostatných zmlúv o údržbe.",
        ],
      },
      {
        title: "9. Ukončenie",
        content: "Ktorákoľvek zo strán môže ukončiť vzťah služieb písomným oznámením. V prípade ukončenia klient dostane všetok kód a dokumentáciu vygenerovanú do dátumu ukončenia.",
      },
      {
        title: "10. Zmeny Podmienok",
        content: "FastLab si vyhradzuje právo kedykoľvek upraviť tieto Podmienky používania. Zmeny nadobudnú účinnosť ihneď po zverejnení na webovej stránke. Pokračujúce používanie našich služieb po takýchto zmenách predstavuje váš súhlas s novými podmienkami.",
      },
      {
        title: "11. Rozhodné Právo",
        content: "Tieto Podmienky používania sa budú riadiť a vykladať v súlade so zákonmi Kolumbijskej republiky. Akýkoľvek spor bude postúpený jurisdikcii príslušných súdov Kolumbie.",
      },
      {
        title: "12. Kontakt",
        content: "V prípade otázok týkajúcich sa týchto Podmienok používania nás môžete kontaktovať prostredníctvom nášho kontaktného formulára alebo zaslaním emailu na contacto@fastlab.art.",
      },
    ],
  },
  de: {
    title: "Nutzungsbedingungen",
    lastUpdate: "Letzte Aktualisierung: 1. Dezember 2025",
    backHome: "← Zurück zur Startseite",
    footer: "Ihre Software-Fabrik.",
    sections: [
      {
        title: "1. Annahme der Bedingungen",
        content: "Durch den Zugriff auf und die Nutzung der Website fastlab.art und der FastLab-Dienste stimmen Sie zu, an diese Nutzungsbedingungen gebunden zu sein. Wenn Sie mit einem Teil dieser Bedingungen nicht einverstanden sind, sollten Sie unsere Dienste nicht nutzen.",
      },
      {
        title: "2. Beschreibung der Dienste",
        content: "FastLab ist ein Softwareentwicklungsunternehmen, das Dienstleistungen zur Erstellung digitaler Produkte anbietet, einschließlich, aber nicht beschränkt auf: Webanwendungsentwicklung, Lösungen für künstliche Intelligenz, Dashboards, Automatisierungssysteme und Technologieberatung.",
      },
      {
        title: "3. Kostenloses Anfangsprodukt",
        content: "FastLab bietet ein kostenloses Anfangsprodukt unter folgenden Bedingungen an:",
        list: [
          "Das Anfangsprodukt ist eine funktionale Entwicklung, die in etwa 2 Wochen geliefert wird.",
          "Der Quellcode des Anfangsprodukts gehört dem Kunden.",
          "Es besteht keine Verpflichtung, nach dem Anfangsprodukt weitere Dienste fortzusetzen.",
          "FastLab behält sich das Recht vor, Projekte auf Basis der technischen Machbarkeit zu bewerten und anzunehmen.",
        ],
      },
      {
        title: "4. Geistiges Eigentum",
        content: "Bezüglich des geistigen Eigentums:",
        list: [
          "<strong>Kundencode:</strong> Der gesamte speziell für den Kunden entwickelte Code ist ausschließliches Eigentum des Kunden.",
          "<strong>Tools und Bibliotheken:</strong> FastLab kann Tools, Frameworks und Bibliotheken von Drittanbietern verwenden, die ihren eigenen Lizenzen unterliegen.",
          "<strong>Website-Inhalt:</strong> Der Inhalt, das Design und die Marke von fastlab.art gehören FastLab.",
        ],
      },
      {
        title: "5. Kundenpflichten",
        content: "Der Kunde verpflichtet sich:",
        list: [
          "Genaue und vollständige Informationen über die Projektanforderungen bereitzustellen.",
          "Zeitnah auf Anfragen nach Informationen oder Klärungen zu antworten.",
          "Die Dienste nicht für illegale oder nicht autorisierte Zwecke zu nutzen.",
          "Die Vertraulichkeit aller bereitgestellten Zugangsdaten zu wahren.",
        ],
      },
      {
        title: "6. Haftungsbeschränkung",
        content: "FastLab haftet nicht für indirekte, zufällige, besondere oder Folgeschäden, die aus der Nutzung oder der Unmöglichkeit der Nutzung unserer Dienste resultieren. Unsere maximale Haftung ist auf den vom Kunden für die betreffenden Dienste gezahlten Betrag beschränkt.",
      },
      {
        title: "7. Vertraulichkeit",
        content: "FastLab verpflichtet sich, die Vertraulichkeit aller während des Entwicklungsprozesses geteilten Kundeninformationen zu wahren. Wir werden vertrauliche Informationen nicht ohne vorherige Zustimmung des Kunden an Dritte weitergeben, außer wenn dies gesetzlich vorgeschrieben ist.",
      },
      {
        title: "8. Garantien und Support",
        content: "Für vertraglich vereinbarte Projekte (nach dem kostenlosen Anfangsprodukt):",
        list: [
          "Vollständige technische Dokumentation wird bereitgestellt.",
          "Eine Fehlerbehebungsperiode wird gemäß der spezifischen Projektvereinbarung angeboten.",
          "Laufender Support ist unter separaten Wartungsverträgen verfügbar.",
        ],
      },
      {
        title: "9. Kündigung",
        content: "Jede Partei kann die Dienstleistungsbeziehung mit schriftlicher Mitteilung beenden. Im Falle einer Kündigung erhält der Kunde den gesamten bis zum Kündigungsdatum generierten Code und die Dokumentation.",
      },
      {
        title: "10. Änderungen der Bedingungen",
        content: "FastLab behält sich das Recht vor, diese Nutzungsbedingungen jederzeit zu ändern. Änderungen treten unmittelbar nach der Veröffentlichung auf der Website in Kraft. Die fortgesetzte Nutzung unserer Dienste nach solchen Änderungen stellt Ihre Annahme der neuen Bedingungen dar.",
      },
      {
        title: "11. Anwendbares Recht",
        content: "Diese Nutzungsbedingungen unterliegen den Gesetzen der Republik Kolumbien und werden entsprechend ausgelegt. Jeder Streit wird der Gerichtsbarkeit der zuständigen Gerichte Kolumbiens unterworfen.",
      },
      {
        title: "12. Kontakt",
        content: "Bei Fragen zu diesen Nutzungsbedingungen können Sie uns über unser Kontaktformular oder per E-Mail an contacto@fastlab.art kontaktieren.",
      },
    ],
  },
  it: {
    title: "Termini di Servizio",
    lastUpdate: "Ultimo aggiornamento: 1 dicembre 2025",
    backHome: "← Torna alla home",
    footer: "La tua fabbrica di software.",
    sections: [
      {
        title: "1. Accettazione dei Termini",
        content: "Accedendo e utilizzando il sito web fastlab.art e i servizi di FastLab, accetti di essere vincolato da questi Termini di Servizio. Se non sei d'accordo con qualsiasi parte di questi termini, non dovresti utilizzare i nostri servizi.",
      },
      {
        title: "2. Descrizione dei Servizi",
        content: "FastLab è un'azienda di sviluppo software che offre servizi di creazione di prodotti digitali, inclusi ma non limitati a: sviluppo di applicazioni web, soluzioni di intelligenza artificiale, dashboard, sistemi di automazione e consulenza tecnologica.",
      },
      {
        title: "3. Prodotto Iniziale Gratuito",
        content: "FastLab offre un prodotto iniziale gratuito alle seguenti condizioni:",
        list: [
          "Il prodotto iniziale è uno sviluppo funzionale consegnato in circa 2 settimane.",
          "Il codice sorgente del prodotto iniziale è di proprietà del cliente.",
          "Non c'è obbligo di continuare con servizi aggiuntivi dopo il prodotto iniziale.",
          "FastLab si riserva il diritto di valutare e accettare progetti in base alla fattibilità tecnica.",
        ],
      },
      {
        title: "4. Proprietà Intellettuale",
        content: "Riguardo alla proprietà intellettuale:",
        list: [
          "<strong>Codice del cliente:</strong> Tutto il codice sviluppato specificamente per il cliente è proprietà esclusiva del cliente.",
          "<strong>Strumenti e librerie:</strong> FastLab può utilizzare strumenti, framework e librerie di terze parti soggetti alle proprie licenze.",
          "<strong>Contenuto del sito:</strong> Il contenuto, il design e il marchio di fastlab.art sono di proprietà di FastLab.",
        ],
      },
      {
        title: "5. Responsabilità del Cliente",
        content: "Il cliente si impegna a:",
        list: [
          "Fornire informazioni accurate e complete sui requisiti del progetto.",
          "Rispondere tempestivamente alle richieste di informazioni o chiarimenti.",
          "Non utilizzare i servizi per scopi illegali o non autorizzati.",
          "Mantenere la riservatezza di qualsiasi credenziale o accesso fornito.",
        ],
      },
      {
        title: "6. Limitazione di Responsabilità",
        content: "FastLab non sarà responsabile per danni indiretti, incidentali, speciali o consequenziali derivanti dall'uso o dall'impossibilità di utilizzare i nostri servizi. La nostra responsabilità massima sarà limitata all'importo pagato dal cliente per i servizi in questione.",
      },
      {
        title: "7. Riservatezza",
        content: "FastLab si impegna a mantenere la riservatezza di tutte le informazioni del cliente condivise durante il processo di sviluppo. Non divulgheremo informazioni riservate a terzi senza il previo consenso del cliente, salvo quando richiesto dalla legge.",
      },
      {
        title: "8. Garanzie e Supporto",
        content: "Per progetti contrattualizzati (dopo il prodotto iniziale gratuito):",
        list: [
          "Viene fornita documentazione tecnica completa.",
          "Viene offerto un periodo di correzione bug secondo l'accordo specifico del progetto.",
          "Il supporto continuo è disponibile con contratti di manutenzione separati.",
        ],
      },
      {
        title: "9. Risoluzione",
        content: "Ciascuna delle parti può terminare il rapporto di servizio con preavviso scritto. In caso di risoluzione, il cliente riceverà tutto il codice e la documentazione generati fino alla data di risoluzione.",
      },
      {
        title: "10. Modifiche ai Termini",
        content: "FastLab si riserva il diritto di modificare questi Termini di Servizio in qualsiasi momento. Le modifiche entreranno in vigore immediatamente dopo la pubblicazione sul sito web. L'uso continuato dei nostri servizi dopo tali modifiche costituisce l'accettazione dei nuovi termini.",
      },
      {
        title: "11. Legge Applicabile",
        content: "Questi Termini di Servizio saranno regolati e interpretati in conformità con le leggi della Repubblica di Colombia. Qualsiasi controversia sarà sottoposta alla giurisdizione dei tribunali competenti della Colombia.",
      },
      {
        title: "12. Contatto",
        content: "Per domande su questi Termini di Servizio, puoi contattarci attraverso il nostro modulo di contatto o inviando un'email a contacto@fastlab.art.",
      },
    ],
  },
  pt: {
    title: "Termos de Serviço",
    lastUpdate: "Última atualização: 1 de dezembro de 2025",
    backHome: "← Voltar ao início",
    footer: "Sua fábrica de software.",
    sections: [
      {
        title: "1. Aceitação dos Termos",
        content: "Ao acessar e usar o site fastlab.art e os serviços da FastLab, você concorda em estar vinculado a estes Termos de Serviço. Se você não concordar com qualquer parte destes termos, não deve usar nossos serviços.",
      },
      {
        title: "2. Descrição dos Serviços",
        content: "FastLab é uma empresa de desenvolvimento de software que oferece serviços de criação de produtos digitais, incluindo, mas não se limitando a: desenvolvimento de aplicações web, soluções de inteligência artificial, dashboards, sistemas de automação e consultoria tecnológica.",
      },
      {
        title: "3. Produto Inicial Gratuito",
        content: "A FastLab oferece um produto inicial gratuito sob as seguintes condições:",
        list: [
          "O produto inicial é um desenvolvimento funcional entregue em aproximadamente 2 semanas.",
          "O código-fonte do produto inicial é propriedade do cliente.",
          "Não há obrigação de continuar com serviços adicionais após o produto inicial.",
          "A FastLab reserva-se o direito de avaliar e aceitar projetos com base na viabilidade técnica.",
        ],
      },
      {
        title: "4. Propriedade Intelectual",
        content: "Em relação à propriedade intelectual:",
        list: [
          "<strong>Código do cliente:</strong> Todo o código desenvolvido especificamente para o cliente é propriedade exclusiva do cliente.",
          "<strong>Ferramentas e bibliotecas:</strong> A FastLab pode usar ferramentas, frameworks e bibliotecas de terceiros sujeitas às suas próprias licenças.",
          "<strong>Conteúdo do site:</strong> O conteúdo, design e marca do fastlab.art são propriedade da FastLab.",
        ],
      },
      {
        title: "5. Responsabilidades do Cliente",
        content: "O cliente concorda em:",
        list: [
          "Fornecer informações precisas e completas sobre os requisitos do projeto.",
          "Responder prontamente a solicitações de informações ou esclarecimentos.",
          "Não usar os serviços para fins ilegais ou não autorizados.",
          "Manter a confidencialidade de quaisquer credenciais ou acessos fornecidos.",
        ],
      },
      {
        title: "6. Limitação de Responsabilidade",
        content: "A FastLab não será responsável por danos indiretos, incidentais, especiais ou consequenciais resultantes do uso ou da impossibilidade de usar nossos serviços. Nossa responsabilidade máxima será limitada ao valor pago pelo cliente pelos serviços em questão.",
      },
      {
        title: "7. Confidencialidade",
        content: "A FastLab compromete-se a manter a confidencialidade de todas as informações do cliente compartilhadas durante o processo de desenvolvimento. Não divulgaremos informações confidenciais a terceiros sem o consentimento prévio do cliente, exceto quando exigido por lei.",
      },
      {
        title: "8. Garantias e Suporte",
        content: "Para projetos contratados (após o produto inicial gratuito):",
        list: [
          "Documentação técnica completa é fornecida.",
          "Um período de correção de bugs é oferecido de acordo com o acordo específico do projeto.",
          "Suporte contínuo está disponível sob contratos de manutenção separados.",
        ],
      },
      {
        title: "9. Rescisão",
        content: "Qualquer uma das partes pode encerrar o relacionamento de serviço com notificação por escrito. Em caso de rescisão, o cliente receberá todo o código e documentação gerados até a data de rescisão.",
      },
      {
        title: "10. Modificações aos Termos",
        content: "A FastLab reserva-se o direito de modificar estes Termos de Serviço a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação no site. O uso continuado de nossos serviços após tais alterações constitui sua aceitação dos novos termos.",
      },
      {
        title: "11. Lei Aplicável",
        content: "Estes Termos de Serviço serão regidos e interpretados de acordo com as leis da República da Colômbia. Qualquer disputa será submetida à jurisdição dos tribunais competentes da Colômbia.",
      },
      {
        title: "12. Contato",
        content: "Para perguntas sobre estes Termos de Serviço, você pode nos contatar através do nosso formulário de contato ou enviando um email para contacto@fastlab.art.",
      },
    ],
  },
};

function TermsContent() {
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
              <p className="text-muted-foreground leading-relaxed mb-4">{section.content}</p>
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

export default function TermsOfService() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center">Loading...</div>}>
      <TermsContent />
    </Suspense>
  );
}
