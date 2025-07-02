const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-400 to-orange-500 rounded-xl p-8 mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          About Our Bookstore
        </h1>
        <p className="text-xl text-white max-w-3xl mx-auto">
          Discover the story behind our passion for literature and our
          commitment to connecting readers with their next favorite book.
        </p>
      </div>

      {/* Our Story */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
          <span className="w-4 h-4 bg-amber-400 mr-3 rounded-full"></span>
          Our Story
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Founded in 2010, our bookstore began as a small neighborhood shop
              with just 200 titles. What started as a passion project between
              two literature enthusiasts has grown into one of the most beloved
              independent bookstores in the region.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We've maintained our commitment to curating exceptional books
              while creating a welcoming space for book lovers of all ages. Our
              shelves now hold over 20,000 titles, each carefully selected by
              our team of dedicated bibliophiles.
            </p>
          </div>
          <div className="bg-gray-100 rounded-xl p-6 h-full">
            <img
              src="https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Our bookstore"
              className="w-full h-auto rounded-lg object-cover shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="mb-12 bg-amber-50 rounded-xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          We believe in the transformative power of books. Our mission is to:
        </p>
        <ul className="grid sm:grid-cols-2 gap-4">
          <li className="flex items-start">
            <span className="text-amber-500 mr-2">✓</span>
            <span className="text-gray-700">
              Connect readers with books that inspire, educate, and entertain
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-amber-500 mr-2">✓</span>
            <span className="text-gray-700">
              Support local authors and independent publishers
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-amber-500 mr-2">✓</span>
            <span className="text-gray-700">
              Foster a vibrant community of book lovers
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-amber-500 mr-2">✓</span>
            <span className="text-gray-700">
              Promote literacy and lifelong learning
            </span>
          </li>
        </ul>
      </section>

      {/* Team Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Meet Our Team</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: "Sarah Johnson",
              role: "Founder & Head Buyer",
              bio: "With 15 years in the industry, Sarah curates our fiction collection.",
            },
            {
              name: "Michael Chen",
              role: "Operations Manager",
              bio: "Keeps our store running smoothly since 2015.",
            },
            {
              name: "Emma Rodriguez",
              role: "Children's Specialist",
              bio: "Creates magical reading experiences for young readers.",
            },
            {
              name: "David Wilson",
              role: "Events Coordinator",
              bio: "Organizes our popular author talks and book clubs.",
            },
          ].map((person, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-20 h-20 bg-amber-100 rounded-full mb-4 flex items-center justify-center text-amber-600 font-bold text-xl">
                {person.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <h3 className="font-bold text-lg text-gray-800">{person.name}</h3>
              <p className="text-amber-600 text-sm mb-2">{person.role}</p>
              <p className="text-gray-600 text-sm">{person.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Community Section */}
      <section className="bg-gray-800 text-white rounded-xl p-8 mb-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Become part of our reading community with monthly book clubs, author
            events, and exclusive member benefits.
          </p>
          <button className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold px-6 py-3 rounded-lg transition-colors">
            Learn About Membership
          </button>
        </div>
      </section>

      {/* Store Info */}
      <section className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="font-bold text-lg text-gray-800 mb-3">Visit Us</h3>
          <p className="text-gray-600 mb-2">123 Book Lane</p>
          <p className="text-gray-600 mb-2">Literary District</p>
          <p className="text-gray-600">Open 9am-8pm daily</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="font-bold text-lg text-gray-800 mb-3">Contact</h3>
          <p className="text-gray-600 mb-2">helloshelf.com</p>
          <p className="text-gray-600 mb-2">(555) 123-4567</p>
          <p className="text-gray-600">@bookshelf on social</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="font-bold text-lg text-gray-800 mb-3">Newsletter</h3>
          <p className="text-gray-600 mb-3">
            Get monthly reading recommendations
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <button className="bg-amber-400 hover:bg-amber-500 text-gray-900 px-4 py-2 rounded-r-lg transition-colors">
              Join
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
