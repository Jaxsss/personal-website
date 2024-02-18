export const SKILLS = [
  {
    title: "Programování",
    icon: "./assets/images/frontend-icon.png",
    skills: [
      { skill: "Python", percentage: "85%" },
      { skill: "SQL", percentage: "75%" },
      { skill: "HTML", percentage: "70%" },
      { skill: "CSS", percentage: "60%" },
      { skill: "JavaScript", percentage: "35%" },
    ],
  },
  {
    title: "Nástroje",
    icon: "./assets/images/backend-icon.png",
    skills: [
      { skill: "Jira", percentage: "90%" },
      { skill: "Jenkins", percentage: "70%" },
      { skill: "Git", percentage: "80%" },
      { skill: "AWS - S3, Managed Airflow, Glue, Lambda", percentage: "80%" },
      { skill: "Snowflake", percentage: "85%" },
      { skill: "PostgreSQL", percentage: "75%" },
      { skill: "ETL / ELT", percentage: "80%" },
      { skill: "Apache Airflow", percentage: "80%" },
      { skill: "Data Warehouse", percentage: "70%" },
    ],
  },
  {
    title: "Jazyky",
    icon: "./assets/images/tools-icon.png",
    skills: [
      { skill: "Český", percentage: "100%" },
      { skill: "Anglický (C2 Certificate)", percentage: "85%", link: "https://cert.efset.org/KJf5Ej" },
      { skill: "Španělský", percentage: "20%" },
    ],
  },
  {
    title: "Soft Skills",
    icon: "./assets/images/soft-skills-icon.png",
    skills: [
      { skill: "Týmová práce", percentage: "80%" },
      { skill: "Problem-solving", percentage: "70%" },
      { skill: "Přizpůsobitelnost", percentage: "85%" },
      { skill: "Samostatnost", percentage: "80%" },
      { skill: "Kreativní myšlení", percentage: "80%" },
    ],
  },
];

export const WORK_EXPERIENCE = [
  {
    title: "DWH Engineer ve společnosti IDC",
    date: "Květen 2022 - dosud",
    responsibilities: [
      "U IDC jsem začínal jako ETL Developer, kde mým úkolem bylo migrovat původní ETL joby z platformy Kettle na Airflow v Python kódu.",
      "Následně jsem se přesunul na pozici DWH Engineer, kde mám za úkol tvorbu architektury, optimalizaci a také integraci nových dat..",
      "Největším projektem byla tvorba Python skriptu na automatizaci celého procesu integrace nových dat. Mé řešení zefektivnilo celý proces zhruba o 70%, díky čemuž nás tým dokáže data zpracovat mnohem rychleji a klientům dodat reporty včas.",
      "Nejvíce pracuji s následujícími technologiemi: AWS, Python, Snowflake, DBT, PostgreSQL, Apache Airflow, Jenkins, Jira, Git.",
    ],
  },
  {
    title: "Python vývojář ve společnosti SolidSun",
    date: "Duben 2021 - Srpen 2022",
    responsibilities: [
      "Při této práci jsem primárně používal Python, Linux ale také Raspberry Pi nebo phpMyAdmin.",
      "Má práce spočívala ve tvorbě Python skriptů pro ovládání GoodWe solárních panelů.",
      "Největším projektem byla tvorba skriptu pro automatickou regulaci nabíjení baterií na základě dat o vytíženosti sítě a solárních panelů.",
      "Mé skripty byly použity u několika klientů a splnily svůj účel.",
    ],
  },
  {
    title: "Anotátor na Karlově Univerzitě, Praha",
    date: "Březen 2020 - Prosinec 2021",
    responsibilities: [
      "Korekce automatických překladů textů z češtiny do angličtiny pomocí různých nástrojů.",
      "Tvorba zápisů z konferencí, přednášek a meetingů.",
      "Přidělování částí konference k automatickému zápisu pro lepší přehlednost a relevanci.",
      "Cílem bylo vylepšení strojového učení později použitého ke tvorbě automaticky přeložených titulků pro Evropský Kongres.",
      "www.elitr.eu",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Django CRM",
    img1: "./assets/images/no-img.png",
    technology: "Python, PostgreSQL, Django",
    link: "https://github.com/Jaxsss/django_crm",
    description: "osobní projekt",
    responsibilities: [
      "Tímto projektem jsem chtěl zlepšit své zkušenosti s Djangem.",
      "Jako databázi jsem zvolil PostgreSQL, jelikož jsem chtěl vyzkoušet něco nového.",
      "Základní funkcionalitou je vytvoření nového zákazníka, jeho editace a smazání.",
      "Samozřejmostí také registrace a přihlášení uživatele.",
    ],
  },
  {
    title: "Nástroj pro seřazení souřadnic",
    img1: "./assets/images/coordinates-sorter-showcase-1.png",
    technology: "Python, GoogleMaps API",
    link: "https://github.com/Jaxsss/sort_coordinates",
    description: "osobní projekt",
    responsibilities: [
      "Cílem projektu bylo vytvořit Python skript, na seřazení souřadnic z textového souboru.",
      "Skript byl napsán v Pythonu a využíval GoogleMaps API pro správnost vzdálenosti po cestě mezi dvěmi body.",
      "Jediným problémem při tvorbě byl formát souřadnic, bylo třeba jej unifikovat.",
      "Výsledkem byla vygenerovaná satelitní mapa se všemi souřadnicemi.",
    ],
  }
];
