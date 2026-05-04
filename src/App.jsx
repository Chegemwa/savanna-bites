const IMAGES = {
  hero: "https://images.unsplash.com/photo-1596703206949-2fda6aaa8643?q=80&w=1031&auto=format&fit=crop",
  story:
    "https://images.unsplash.com/photo-1535758933269-a63ceca92b02?q=80&w=869&auto=format&fit=crop",
  nyamaChoma:
    "https://images.pexels.com/photos/31927206/pexels-photo-31927206.jpeg",
  tilapia:
    "https://images.pexels.com/photos/30987055/pexels-photo-30987055.jpeg",
  ugali: "https://images.pexels.com/photos/22735421/pexels-photo-22735421.jpeg",
  rice: "https://images.pexels.com/photos/19781592/pexels-photo-19781592.jpeg",
};

const menuItems = [
  {
    name: "Nyama Choma",
    desc: "Slow-grilled beef or goat, served with kachumbari",
    price: "KES 850",
    img: IMAGES.nyamaChoma,
  },
  {
    name: "Whole Tilapia",
    desc: "Fried or grilled tilapia with ugali and sukuma wiki",
    price: "KES 750",
    img: IMAGES.tilapia,
  },
  {
    name: "Pilau",
    desc: "Spiced rice cooked with meat and aromatic spices",
    price: "KES 450",
    img: IMAGES.rice,
  },
  {
    name: "Ugali & Matumbo",
    desc: "Classic tripe stew served with fresh ugali",
    price: "KES 380",
    img: IMAGES.ugali,
  },
  {
    name: "Chapati & Beans",
    desc: "Soft layered chapati with slow-cooked beans",
    price: "KES 250",
    img: IMAGES.ugali,
  },
  {
    name: "Mutura",
    desc: "Traditional Kenyan sausage, grilled over charcoal",
    price: "KES 300",
    img: IMAGES.nyamaChoma,
  },
];

function App() {
  return (
    <main className="bg-[#FFFDF7] min-h-screen text-[#1A1A1A] font-sans">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 flex justify-between items-center px-6 md:px-16 py-4 bg-[#FFFDF7] shadow-sm z-10">
        <span className="text-[#C4501A] font-bold text-xl">Savanna Bites</span>
        <div className="hidden md:flex gap-8 text-sm text-[#555]">
          <a href="#menu" className="hover:text-[#C4501A] transition">
            Menu
          </a>
          <a href="#about" className="hover:text-[#C4501A] transition">
            About
          </a>
          <a href="#contact" className="hover:text-[#C4501A] transition">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section
        className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center"
        style={{
          backgroundImage: `url(${IMAGES.hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10">
          <p className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
            Westlands, Nairobi
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl text-white">
            Authentic Kenyan Flavours, Right in the Heart of Nairobi
          </h1>
          <p className="text-gray-300 text-base md:text-lg mt-4 max-w-xl mx-auto text-center">
            From smoky nyama choma to fresh tilapia and pilau — come hungry,
            leave happy.
          </p>
          <div className="flex gap-4 mt-8 flex-wrap justify-center">
            <a
              href="#menu"
              className="bg-[#C4501A] text-white font-bold px-8 py-3 rounded-lg hover:bg-[#a84315] transition"
            >
              View Menu
            </a>
            <a
              href="#contact"
              className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white hover:text-[#1A1A1A] transition"
            >
              Reserve a Table
            </a>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="px-6 md:px-16 py-16 bg-[#FFF8F0]">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
          Our Menu
        </h2>
        <p className="text-center text-[#555] mb-10">
          Fresh ingredients, traditional recipes
        </p>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-xl overflow-hidden shadow-sm flex"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-24 h-24 object-cover flex-shrink-0"
              />
              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-bold text-base">{item.name}</h3>
                  <p className="text-[#555] text-sm mt-1">{item.desc}</p>
                </div>
                <span className="text-[#C4501A] font-bold text-sm mt-2">
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 md:px-16 py-16">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10 items-center">
          <img
            src={IMAGES.story}
            alt="Our restaurant"
            className="w-full md:w-1/2 rounded-xl object-cover h-72"
          />
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-[#555] leading-relaxed">
              Savanna Bites was born from a love of Kenyan home cooking. We
              started as a small roadside grill in Westlands and grew into a
              full restaurant — but our commitment to authentic flavours has
              never changed. Every dish is made fresh daily, using locally
              sourced ingredients from farmers we know by name.
            </p>
            <p className="text-[#C4501A] font-semibold mt-4">
              📍 Westlands, Nairobi
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 md:px-16 py-16 bg-[#FFF8F0]">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Find Us
        </h2>
        <div className="max-w-md mx-auto bg-white rounded-xl p-8 shadow-sm flex flex-col gap-4">
          <p className="text-sm text-[#555]">📍 Westlands, Nairobi, Kenya</p>
          <p className="text-sm text-[#555]">🕐 Mon–Sun: 9:00 AM – 10:00 PM</p>
          <p className="text-sm text-[#555]">📞 +254 700 000 000</p>

          {/* Fixed: added missing <a tag */}
          <a
            href="https://wa.me/254700000000"
            className="bg-[#25D366] text-white font-bold text-sm py-3 rounded-lg text-center hover:bg-[#20bd5a] transition"
          >
            💬 Reserve on WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-[#999] text-xs py-8">
        © 2026 Savanna Bites — Westlands, Nairobi
      </footer>
    </main>
  );
}

export default App;
