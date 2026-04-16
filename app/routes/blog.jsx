import React from "react";
import Footer from "../Components/Footer";
import bikes from "../Components/bikes.jpg";

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "How to Fix a Bike Chain",
      excerpt:
        "A simple step-by-step guide to diagnosing and fixing a loose or slipping bike chain.",
      category: "Maintenance",
      date: "April 2026",
      readTime: "4 min read",
    },
    {
      id: 2,
      title: "Preventing Punctures",
      excerpt:
        "Practical tips to reduce punctures, improve tyre life, and stay riding for longer.",
      category: "Tips",
      date: "April 2026",
      readTime: "3 min read",
    },
    {
      id: 3,
      title: "When Should You Replace Brake Pads?",
      excerpt:
        "Learn the warning signs of worn brake pads and when it is time to replace them for safe riding.",
      category: "Safety",
      date: "April 2026",
      readTime: "5 min read",
    },
    {
      id: 4,
      title: "Why Regular Servicing Matters",
      excerpt:
        "Regular bike servicing helps prevent expensive repairs and keeps your bike performing at its best.",
      category: "Servicing",
      date: "April 2026",
      readTime: "4 min read",
    },
  ];

  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

  return (
    <div className="w-full overflow-x-hidden bg-gray-50 min-h-screen">
      {/* HERO */}
      <section
        className="relative min-h-[42vh] md:min-h-[50vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${bikes})`,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-36 md:pt-44 pb-16">
          <div className="max-w-2xl text-white">
            <h1 className="text-3xl md:text-5xl font-semibold uppercase leading-tight">
              Bike Maintenance Blog
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-200 leading-relaxed">
              Helpful tips, repair advice, and servicing guidance to keep your
              bike safe, smooth, and ready to ride.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED POST */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-widest text-yellow-500 font-semibold">
            Featured Post
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md overflow-hidden grid md:grid-cols-2">
          <div className="bg-gray-100 min-h-[250px] md:min-h-full flex items-center justify-center">
            <span className="text-gray-400 text-lg font-medium">Featured Image</span>
          </div>

          <div className="p-8 md:p-10 flex flex-col justify-center">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="bg-yellow-400 text-black text-sm font-semibold px-3 py-1 rounded-full">
                {featuredPost.category}
              </span>
              <span className="text-sm text-gray-500">{featuredPost.date}</span>
              <span className="text-sm text-gray-500">{featuredPost.readTime}</span>
            </div>

            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-tight">
              {featuredPost.title}
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed text-base md:text-lg">
              {featuredPost.excerpt}
            </p>

            <button className="mt-6 w-fit bg-yellow-400 text-black font-semibold px-6 py-3 rounded-md hover:bg-yellow-300 transition">
              Read More
            </button>
          </div>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-16 md:pb-20">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Latest Articles
          </h2>
          <p className="mt-2 text-gray-600">
            Explore maintenance advice, repair tips, and practical cycling guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {remainingPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition overflow-hidden"
            >
              <div className="h-48 bg-gray-100 flex items-center justify-center">
                <span className="text-gray-400 font-medium">Blog Image</span>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="bg-yellow-100 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 leading-snug">
                  {post.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                  <button className="text-sm font-semibold text-yellow-600 hover:text-yellow-700 transition">
                    Read Article →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Need help with your bike?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600 leading-relaxed">
            From puncture repairs to full servicing, Steve Does Bikes provides
            reliable mobile bike maintenance across Swansea and surrounding areas.
          </p>
          <button className="mt-6 bg-yellow-400 text-black font-semibold px-8 py-3 rounded-md hover:bg-yellow-300 transition">
            Contact Us
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}