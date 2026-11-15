import React, { useEffect, useRef, useState } from "react";

/* ---------- Content: edit the text, links and photos here ---------- */

const CARS_PAGE = "https://www.facebook.com/2frceramic";
const MOTO_PAGE = "https://www.facebook.com/2frmotoprotection";
const PHONE_DISPLAY = "0905 521 0652";
const PHONE_LINK = "tel:+639055210652";
const CONTACT_PERSON = "Francis John Paul V. Ricafort";
const HOURS = "Open daily, 9:00 AM – 10:00 PM";

const NAV = [
  ["services", "Services"],
  ["gallery", "Gallery"],
  ["motorcycles", "Motorcycles"],
  ["branches", "Branches"],
  ["contact", "Contact"],
];

const SERVICES = [
  {
    name: "Paint Protection Film",
    image: "/img/car-mini-ppf.jpg",
    alt: "Front of a cream MINI Cooper S under studio lights",
    text: "A clear film applied over the paint that takes the stone chips, scratches and scuffs so the paint underneath does not.",
  },
  {
    name: "Graphene Coating",
    image: "/img/work-coating.jpg",
    alt: "Gloved hand applying coating to a green motorcycle panel",
    text: "A hand-applied coating that bonds to the paint for deeper gloss, strong water beading and a surface that is easier to keep clean.",
  },
  {
    name: "Nano Ceramic Tint",
    image: "/img/car-alphard.jpg",
    alt: "Black Toyota Alphard with tinted windows in the studio",
    text: "Window film that cuts heat and UV inside the cabin while keeping a clear view of the road.",
  },
  {
    name: "Detailing Services",
    image: "/img/work-wheel-wash.jpg",
    alt: "Detailer rinsing the wheel of a black car",
    text: "A thorough clean inside and out, from wheels and paint decontamination to machine polishing that brings the shine back.",
  },
  {
    name: "Repaint",
    image: "/img/work-polishing.jpg",
    alt: "Detailer polishing the door of a green Toyota Corolla",
    text: "Panel or full-body repaint for faded, scratched or damaged paint, finished and polished in the studio.",
  },
];

const GALLERY = {
  cars: [
    { src: "/img/car-gtr.jpg", label: "Nissan GT-R" },
    { src: "/img/car-jaecoo.jpg", label: "Jaecoo SUV" },
    { src: "/img/car-alphard.jpg", label: "Toyota Alphard" },
    { src: "/img/car-jeep.jpg", label: "Jeep Grand Cherokee" },
    { src: "/img/car-byd.jpg", label: "BYD sedan" },
    { src: "/img/car-montero.jpg", label: "Mitsubishi Montero Sport" },
  ],
  motorcycles: [
    { src: "/img/moto-ducati.jpg", label: "Ducati Panigale V4" },
    { src: "/img/moto-lambretta.jpg", label: "Lambretta" },
    { src: "/img/moto-zx4rr.jpg", label: "Kawasaki Ninja ZX-4RR" },
    { src: "/img/moto-scooters.jpg", label: "Scooter line-up" },
    { src: "/img/moto-adv.jpg", label: "Honda ADV" },
    { src: "/img/work-inspection.jpg", label: "Yamaha Aerox" },
  ],
};

const BRANCHES = [
  {
    city: "San Juan, Manila",
    address: "154 M. Paterno, Brgy. Pasadena, San Juan, Manila",
    landmark: "Beside Petron M. Paterno, in front of Pataya Massage",
    waze: "https://www.waze.com/en/live-map/directions/ph/ncr/san-juan-city/2fr-ceramic?place=ChIJ7QcEAw-VvqsR2UyKMmvhzW0",
    maps: "https://maps.app.goo.gl/qc69EurXzvZtet2u9?g_st=ic",
  },
  {
    city: "Quezon City",
    address: "252 Calderon St., Brgy. Matandang Balara, Quezon City",
    landmark: "Beside Diliman Hospital and Toyota Commonwealth",
    waze: "https://www.waze.com/en/live-map/directions/calderon-252-quezon-city?place=w.79364243.793511355.21233982",
    maps: "https://maps.app.goo.gl/GL6ps5itdKt8Vao87?g_st=ic",
  },
];

/* ---------- Icons ---------- */

const ICONS = {
  pin: "M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0C18.5 15.4 12 21 12 21zm0-8.500a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
  clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm0-14v5l3.5 2",
  phone: "M5 4h4l2 5-2.5 1.500a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z",
  car: "M5 11l1.5-4.500A2 2 0 0 1 8.4 5h7.200a2 2 0 0 1 1.9 1.500L19 11m-14 0h14m-14 0a2 2 0 0 0-2 2v4h2m14-6a2 2 0 0 1 2 2v4h-2M5 17v1.500M19 17v1.500M5 17h14M7.5 14h.01M16.5 14h.01",
  arrow: "M5 12h14m-6-6 6 6-6 6",
  menu: "M4 7h16M4 12h16M4 17h16",
  close: "M6 6l12 12M18 6 6 18",
};

function Icon({ name }) {
  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d={ICONS[name]} />
    </svg>
  );
}

/* ---------- Page ---------- */

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [tab, setTab] = useState("cars");
  const [photo, setPhoto] = useState(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (photo && !dialog.open) dialog.showModal();
    if (!photo && dialog.open) dialog.close();
  }, [photo]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site">
      <header className="topbar">
        <div className="wrap topbar-in">
          <a className="brand" href="#top" onClick={closeMenu}>
            <img src="/logo.png" alt="2FR Ceramic" width="927" height="90" />
          </a>
          <nav className={`nav${menuOpen ? " open" : ""}`} id="site-nav" aria-label="Sections">
            {NAV.map(([id, label]) => (
              <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>
            ))}
            <a className="btn btn-red nav-cta" href="#contact" onClick={closeMenu}>Book now</a>
          </nav>
          <button
            className="menu-btn"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? "close" : "menu"} />
          </button>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="hero">
          <div className="hero-photo">
            <img src="/img/car-gtr.jpg" alt="Red Nissan GT-R in the 2FR Ceramic studio" width="1400" height="1400" />
          </div>
          <div className="wrap hero-in">
            <div className="hero-text">
              <p className="eyebrow">Graphene coating · Paint protection film</p>
              <h1>Protection that keeps the <em>showroom shine.</em></h1>
              <p className="lede">
                Paint protection film, graphene coating, nano ceramic tint, detailing and repaint for cars and motorcycles. Two studios in Metro Manila, open every day.
              </p>
              <div className="actions">
                <a className="btn btn-red" href="#contact">Book now</a>
                <a className="btn btn-ghost" href="#services">See our services</a>
              </div>
            </div>
          </div>
        </section>

        {/* Quick facts */}
        <section className="facts" aria-label="At a glance">
          <ul className="wrap facts-in">
            <li><Icon name="car" /><span><strong>Cars and motorcycles</strong>One studio standard for both</span></li>
            <li><Icon name="pin" /><span><strong>Two branches</strong>San Juan and Quezon City</span></li>
            <li><Icon name="clock" /><span><strong>Open daily</strong>9:00 AM to 10:00 PM</span></li>
            <li><Icon name="phone" /><span><strong>{PHONE_DISPLAY}</strong>Call or text to inquire</span></li>
          </ul>
        </section>

        {/* About */}
        <section className="wrap section split" id="about">
          <div className="split-text">
            <p className="eyebrow">About us</p>
            <h2>A studio built for paint protection.</h2>
            <p>
              2FR Ceramic protects and restores vehicle finishes. Every car and motorcycle is worked on indoors, under full studio lighting, so the film, the coating and the paint can be checked panel by panel before it leaves.
            </p>
            <p>
              Daily drivers, family vans, sports cars and big bikes all come through the same doors and get the same attention.
            </p>
            <a className="text-link" href="#gallery">See recent work <Icon name="arrow" /></a>
          </div>
          <div className="split-photo">
            <img src="/img/work-inspection.jpg" alt="Detailer inspecting the panels of a blue Yamaha Aerox" width="1400" height="1400" loading="lazy" />
          </div>
        </section>

        {/* Services */}
        <section className="band" id="services">
          <div className="wrap section">
            <div className="section-head">
              <div>
                <p className="eyebrow">Our services</p>
                <h2>What we do</h2>
              </div>
              <a className="text-link" href="#contact">Ask for a quote <Icon name="arrow" /></a>
            </div>
            <ul className="services">
              {SERVICES.map((service, index) => (
                <li className="service" key={service.name}>
                  <div className="service-photo">
                    <img src={service.image} alt={service.alt} width="1400" height="1400" loading="lazy" />
                    <span className="service-no">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="service-body">
                    <h3>{service.name}</h3>
                    <p>{service.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Gallery */}
        <section className="wrap section" id="gallery">
          <div className="section-head">
            <div>
              <p className="eyebrow">Gallery</p>
              <h2>Fresh out of the studio</h2>
            </div>
            <div className="tabs" role="group" aria-label="Show photos of">
              <button type="button" aria-pressed={tab === "cars"} onClick={() => setTab("cars")}>Cars</button>
              <button type="button" aria-pressed={tab === "motorcycles"} onClick={() => setTab("motorcycles")}>Motorcycles</button>
            </div>
          </div>
          <ul className="gallery">
            {GALLERY[tab].map((item) => (
              <li key={item.src}>
                <button type="button" className="shot" onClick={() => setPhoto(item)}>
                  <img src={item.src} alt={item.label} width="1400" height="1400" loading="lazy" />
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </section>

        {/* Motorcycles */}
        <section className="band" id="motorcycles">
          <div className="wrap section split split-flip">
            <div className="split-photo">
              <img src="/img/moto-ducati.jpg" alt="Red Ducati Panigale V4 in the studio" width="1400" height="1400" loading="lazy" />
            </div>
            <div className="split-text">
              <p className="eyebrow">2FR Moto Protection</p>
              <h2>Two wheels get the full treatment too.</h2>
              <p>
                Scooters, sport bikes and big bikes are handled by 2FR Moto Protection, our motorcycle page. Paint protection film and coating are fitted to fairings, tanks and panels with the same care as a car.
              </p>
              <div className="actions">
                <a className="btn btn-red" href={MOTO_PAGE} target="_blank" rel="noopener">Message 2FR Moto Protection</a>
              </div>
            </div>
          </div>
        </section>

        {/* Branches */}
        <section className="wrap section" id="branches">
          <div className="section-head">
            <div>
              <p className="eyebrow">Branches</p>
              <h2>Visit a studio</h2>
            </div>
            <p className="hours"><Icon name="clock" />{HOURS}</p>
          </div>
          <ul className="branches">
            {BRANCHES.map((branch) => (
              <li className="branch" key={branch.city}>
                <h3><Icon name="pin" />{branch.city}</h3>
                <p className="address">{branch.address}</p>
                <dl>
                  <dt>Landmark</dt>
                  <dd>{branch.landmark}</dd>
                </dl>
                <div className="actions">
                  <a className="btn btn-ghost" href={branch.maps} target="_blank" rel="noopener">Google Maps</a>
                  <a className="btn btn-ghost" href={branch.waze} target="_blank" rel="noopener">Waze</a>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Contact */}
        <section className="cta" id="contact">
          <div className="cta-photo" aria-hidden="true">
            <img src="/img/car-jeep.jpg" alt="" width="1400" height="1400" loading="lazy" />
          </div>
          <div className="wrap cta-in">
            <p className="eyebrow">Book now</p>
            <h2>Ready to protect your ride?</h2>
            <p className="lede">Send us a message on Facebook with your vehicle and the service you want. Choose the page that matches what you drive.</p>
            <div className="choices">
              <a className="choice" href={CARS_PAGE} target="_blank" rel="noopener">
                <span className="choice-kind">Cars</span>
                <strong>Message 2FR Ceramic</strong>
                <span className="choice-go">Open Facebook page <Icon name="arrow" /></span>
              </a>
              <a className="choice" href={MOTO_PAGE} target="_blank" rel="noopener">
                <span className="choice-kind">Motorcycles</span>
                <strong>Message 2FR Moto Protection</strong>
                <span className="choice-go">Open Facebook page <Icon name="arrow" /></span>
              </a>
            </div>
            <p className="call">
              <Icon name="phone" />
              <span>Or call or text <a href={PHONE_LINK}>{PHONE_DISPLAY}</a> and look for {CONTACT_PERSON}.</span>
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-in">
          <div className="footer-brand">
            <img src="/logo.png" alt="2FR Ceramic" width="927" height="90" loading="lazy" />
            <p>Paint protection film, graphene coating, nano ceramic tint, detailing and repaint.</p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              {NAV.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}
            </ul>
          </div>
          <div>
            <h4>Branches</h4>
            <ul>
              {BRANCHES.map((branch) => <li key={branch.city}>{branch.address}</li>)}
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href={PHONE_LINK}>{PHONE_DISPLAY}</a></li>
              <li>{HOURS}</li>
              <li><a href={CARS_PAGE} target="_blank" rel="noopener">Facebook: 2FR Ceramic</a></li>
              <li><a href={MOTO_PAGE} target="_blank" rel="noopener">Facebook: 2FR Moto Protection</a></li>
            </ul>
          </div>
        </div>
        <div className="wrap footer-base">
          <span>© {new Date().getFullYear()} 2FR Ceramic</span>
          <a href="#top">Back to top</a>
        </div>
      </footer>

      <dialog
        className="lightbox"
        ref={dialogRef}
        aria-label={photo?.label || "Photo"}
        onClose={() => setPhoto(null)}
        onClick={(event) => { if (event.target === event.currentTarget) setPhoto(null); }}
      >
        {photo && (
          <figure>
            <img src={photo.src} alt={photo.label} />
            <figcaption>
              <span>{photo.label}</span>
              <button type="button" className="btn btn-ghost" onClick={() => setPhoto(null)}>Close</button>
            </figcaption>
          </figure>
        )}
      </dialog>
    </div>
  );
}
