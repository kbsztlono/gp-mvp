import { useState } from 'react'
import './App.css'
import { useScrollReveal } from './useScrollReveal'

const FIGMA = 'https://ring-quartz-32940245.figma.site/_assets/v11'
const IMG1 = `${FIGMA}/e21ae90596e6a088f1dee1adfaa41a28a0251368.png`
const IMG2 = `${FIGMA}/9c976f8848d22698a39bc1f7aaed48bb58eaf74d.png`
const IMG3 = `${FIGMA}/7e3b9d0e9ee8bdc03839126663ecb818de613f4a.png`

function PathSVG1() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 179 427"
      width="200" height="700" overflow="visible" aria-hidden="true">
      <g opacity="0.6">
        <path d="M49.1442 422.914C49.9379 422.119 50.7869 421.22 51.6851 420.234"
          stroke="rgba(235,89,42,0.8)" strokeMiterlimit="10" strokeWidth="2"/>
        <path d="M56.5208 414.601C65.2816 403.916 75.7897 388.818 79.3703 380.752C95.9076 343.507 52.1281 314.741 28.1343 294.276C6.8167 276.091 -0.479876 254.196 0.744423 229.664C2.04255 203.745 29.0817 175.731 84.2613 158.298C103.666 152.166 120.061 148.044 137.195 140.963C154.834 133.673 179.898 122.519 178.311 99.5709C176.779 77.3988 155.16 61.6294 134.328 45.4287C118.732 33.3012 100.017 21.9687 85.4733 8.12195"
          stroke="rgba(235,89,42,0.8)" strokeDasharray="12.06 12.06" strokeMiterlimit="10" strokeWidth="2"/>
        <circle cx="87.8705" cy="9.607" r="4.079" fill="rgba(235,89,42,0.8)"/>
        <circle cx="49.858" cy="422.914" r="4.079" fill="rgba(235,89,42,0.8)"/>
      </g>
    </svg>
  )
}

function PathSVG2() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 89.5679 399.408"
      width="300" height="600" overflow="visible" aria-hidden="true">
      <g opacity="0.6">
        <path d="M44.6067 369.106C44.1568 366.247 46.703 363.884 49.5472 364.522C51.1368 364.874 52.3808 366.201 52.6338 367.799C53.0837 370.658 50.5375 373.021 47.6934 372.384C46.1037 372.032 44.8598 370.705 44.6067 369.106Z"
          fill="rgba(235,89,42,0.8)"/>
        <path d="M36.4864 25.6475C36.0365 22.788 38.5827 20.4252 41.4268 21.0629C43.0165 21.4149 44.2604 22.7418 44.5135 24.34C44.9634 27.1995 42.4172 29.5623 39.5731 28.9246C37.9834 28.5727 36.7394 27.2457 36.4864 25.6475Z"
          fill="rgba(235,89,42,0.8)"/>
        <path d="M34.5458 34.4503C6.87348 75.4418 6.13395 105.45 14.9147 124.968C23.6894 144.485 41.7751 160.278 41.2651 181.639C40.7115 204.662 22.6757 222.772 20.4625 245.696C19.6519 254.104 20.0238 263.661 26.1974 269.478C28.4575 271.607 31.2943 273.012 34.1293 274.283C42.0121 277.813 50.2653 280.545 57.8588 284.65C65.4524 288.748 72.5256 294.456 76.2286 302.212C80.6766 311.534 79.6281 322.822 75.1428 332.117C70.6573 341.419 55.2651 363.754 46.9397 369.918"
          stroke="rgba(235,89,42,0.8)" strokeDasharray="12 12" strokeMiterlimit="10" strokeWidth="1.5"/>
      </g>
    </svg>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="navbar">
      <div className="navbar-pill">
        <nav className={`nav-links${open ? ' open' : ''}`}>
          <a href="#misja" onClick={() => setOpen(false)}>Misja</a>
          <a href="#oferta" onClick={() => setOpen(false)}>Oferta</a>
          <a href="#wspolpraca" onClick={() => setOpen(false)}>Współpraca</a>
          <a href="#kontakt" onClick={() => setOpen(false)}>Kontakt</a>
        </nav>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? '✕' : '☰'}
        </button>
      </div>
    </header>
  )
}

export default function App() {
  const refPause   = useScrollReveal()
  const refWhat    = useScrollReveal()
  const refCustom  = useScrollReveal()
  const refResults = useScrollReveal()
  const refValues  = useScrollReveal()
  const refProcess = useScrollReveal()
  const refMission = useScrollReveal()
  const refContact = useScrollReveal()

  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-top">
          <div className="logo">Grupa Przyrodnicza</div>
          <a href="#kontakt" className="btn-primary">Porozmawiaj <span className="btn-arrow">↗</span></a>
        </div>
        <div className="hero-text">
          <h1 className="hero-title">Połącz swój biznes z naturą</h1>
          <h2 className="hero-subtitle">bez greenwashingu</h2>
        </div>
        <div className="hero-path">
          <PathSVG1 />
        </div>
      </section>

      {/* ── ZATRZYMAJ SIĘ ── */}
      <section ref={refPause} className="pause-section reveal">
        <div className="pause-inner">
          <h2 className="pause-title">Zatrzymaj się na chwilę</h2>
          <p>
            Ta strona powstała z szacunkiem dla Twojej uwagi. Nie chcemy jej nadużywać.
            Znajdziesz tu tylko konkretne informacje, które chętnie pogłębimy podczas
            bezpośredniej rozmowy. Zapoznaj się, nawiąż kontakt, a następnie wyłącz
            ekran i… chodź do lasu!
          </p>
          <div className="pause-path">
            <PathSVG2 />
          </div>
        </div>
      </section>

      {/* ── CO ROBIMY ── */}
      <section ref={refWhat} className="what-we-do reveal" id="oferta">
        <div className="green-label">Zamieniamy screeny na leśne gęstwiny</div>
        <div className="what-we-do-content">
          <h2>Co robimy?</h2>
          <div className="services-list">
            <p className="service-item">
              Tworzymy autorskie, skrojone do potrzeb Twojej organizacji programy
              edukacyjne w całej Polsce. Organizujemy lokalne wyprawy, rozbudzające
              ciekawość przyrodniczą, promujące lokalną przyrodę i wzmacniające
              poczucie zespołowości. Najlepsze pomysły rodzą się pod koronami drzew,
              a najsilniejsze zespoły buduje się z dala od zasięgu Wi-Fi.
            </p>
            <p className="service-item">
              Dostarczamy gotowe rozwiązania dla działów <strong>HR, ESG i Wellbeing</strong>,
              wpisując kontakt z naturą w strategię rozwoju Twojej organizacji.
            </p>
          </div>
        </div>
        <div className="what-we-do-image">
          <img src={IMG1} alt="Przyroda" />
        </div>
      </section>


      {/* ── DLA LUDZI NIE DLA SCHEMATÓW ── */}
      <section ref={refCustom} className="custom-section reveal" id="wspolpraca">
        <div className="custom-inner">
          <div className="custom-block">
            <span className="green-label">Dla ludzi, nie dla schematów</span>
            <h2>Programy szyte na miarę</h2>
            <p>
              Natura jest dla każdego — od zarządu po pracowników fizycznych,
              od małych organizacji po duże korporacje. Poziom zaawansowania
              i charakter każdego wydarzenia dostosowujemy zarówno do potrzeb
              i możliwości Twojej organizacji, jak również do kondycji, wieku,
              wiedzy i wrażliwości osób uczestniczących.
            </p>
          </div>
          <div className="custom-block">
            <span className="green-label">Pełna logistyka</span>
            <h2>Jeden partner, Cała Polska</h2>
            <p>
              Organizacja ciekawych wydarzeń jest dużym wyzwaniem — zdejmujemy
              ten ciężar z Twoich barków. Zamiast koordynować wielu lokalnych
              dostawców, współpracujesz tylko z nami. My zarządzamy projektem
              centralnie, zapewniając spójność i najwyższą jakość w każdym
              zakątku Polski.
            </p>
          </div>
        </div>
      </section>

      {/* ── MIERZALNE EFEKTY ── */}
      <section ref={refResults} className="results-section reveal">
        <span className="green-label">Mierzalne efekty działań</span>
        <h2>Wsparcie raportowania i komunikacji</h2>
        <div className="results-list">
          <div className="result-item">
            <h3>Raporty</h3>
            <p>Raporty z działań w obszarze społecznym i środowiskowym</p>
          </div>
          <div className="result-item">
            <h3>Dokumentacja</h3>
            <p>Profesjonalna dokumentacja foto/wideo</p>
          </div>
          <div className="result-item">
            <h3>Webinary</h3>
            <p>Webinary edukacyjne i wsparcie komunikacji wewnętrznej</p>
          </div>
        </div>
        <div className="results-image">
          <img src={IMG2} alt="Przyroda" />
        </div>
      </section>

      {/* ── VALUE PROPS ── */}
      <section ref={refValues} className="values-section reveal">
        <span className="green-label">Nasze działania w praktyce</span>
        <h2 className="values-heading">Value Propositions</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Employer Branding i Wellbeing</h3>
            <p>Dostarczamy narzędzia do budowy zdrowej kultury organizacji opartej na odporności psychicznej i autentycznym dobrostanie. Wspieramy pracowników w nauce samoregulacji, wykorzystując naturę jako najskuteczniejsze narzędzie do walki ze stresem i wypaleniem.</p>
          </div>
          <div className="value-card">
            <h3>Integracja i Teambuilding</h3>
            <p>Inspirujemy się naturą, by budować trwale zintegrowane zespoły. Przenosimy mechanizmy współpracy znane z ekosystemów na grunt Twojej organizacji, łącząc edukację przyrodniczą z warsztatami terenowymi.</p>
          </div>
          <div className="value-card">
            <h3>Edukacja Przyrodnicza</h3>
            <p>Przekładamy Twoje cele na konkretne działania w terenie. Pomagamy realizować strategię ESG w obszarze „Social", budując świadomość ekologiczną, która staje się częścią DNA Twojej firmy, a nie tylko zapisem w raporcie rocznym.</p>
          </div>
          <div className="value-card">
            <h3>Aktywizacja Klientów</h3>
            <p>Oferujemy unikalne doświadczenia, które wyróżniają Twoją markę na tle konkurencji i budują głęboką lojalność. Zamiast tradycyjnych eventów, zapraszamy Twoich klientów do wspólnego odkrywania natury.</p>
          </div>
        </div>
      </section>

      {/* ── PROCES ── */}
      <section ref={refProcess} className="process-section reveal">
        <h2 className="process-heading">To bardzo łatwe</h2>
        <p className="process-subtitle">Wspieramy Cię organizacyjnie i komunikacyjnie na każdym etapie:</p>
        <div className="process-steps">
          <div className="process-step">
            <span className="step-number">01</span>
            <h3>Rozmowa</h3>
            <p>Analizujemy Twoje potrzeby, cele biznesowe i&nbsp;możliwości.</p>
          </div>
          <div className="process-step">
            <span className="step-number">02</span>
            <h3>Projekt</h3>
            <p>Przygotowujemy spersonalizowany program&nbsp;wydarzeń.</p>
          </div>
          <div className="process-step">
            <span className="step-number">03</span>
            <h3>Realizacja</h3>
            <p>Razem ruszamy w naturę. Ty odpoczywasz, my dbamy o&nbsp;resztę.</p>
          </div>
        </div>
        <div className="process-cta">
          <a href="#kontakt" className="btn-primary">Porozmawiaj <span className="btn-arrow">↗</span></a>
        </div>
      </section>

      {/* ── MISJA ── */}
      <section ref={refMission} className="mission-section reveal" id="misja">
        <div className="mission-inner">
          <div className="mission-content">
            <span className="green-label">Od wytchnienia do świadomości</span>
            <h2>Misja</h2>
            <p>
              Łączymy otoczenie Twojej firmy z kojącą mocą ekosystemów.
              W świecie pełnym bodźców dostarczamy narzędzi do samoregulacji
              i wytchnienia, odkrywając piękno natury 30 minut od&nbsp;Twojego domu.
            </p>
            <p>
              Na wszechobecny greenwashing odpowiadamy realnymi działaniami,
              edukując o&nbsp;otaczających nas siedliskach. Głęboko wierzymy,
              że&nbsp;przystępna edukacja przyrodnicza bez ideologii i doznawanie piękna
              natury przysłużą się jej, prowadząc do podniesienia poziomu jej&nbsp;ochrony.
            </p>
          </div>
          <div className="mission-image">
            <img src={IMG3} alt="Misja Grupy Przyrodniczej" />
          </div>
        </div>
        <div className="contact-path">
          <PathSVG1 />
        </div>
      </section>

      {/* ── KONTAKT ── */}
      <section ref={refContact} className="contact-section reveal">
        <h2 id="kontakt">Zacznijmy od rozmowy</h2>
        <p>Napisz do nas lub zadzwoń. Chętnie dowiemy się, jak możemy połączyć Twój biznes z naturą, z&nbsp;korzyścią dla&nbsp;wszystkich.</p>
        <a href="mailto:kontakt@grupaprzyrodnicza.pl" className="btn-primary">Porozmawiaj <span className="btn-arrow">↗</span></a>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-logo">© 2026 Grupa Przyrodnicza</div>
          <div className="footer-copy">Wszelkie prawa zastrzeżone</div>
        </div>
      </footer>
    </>
  )
}
