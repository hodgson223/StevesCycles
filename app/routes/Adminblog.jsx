import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import Footer from "../Components/Footer";
import bikes from "../Components/bikes.jpg";

export default function AdminBlog() {
  const navigate = useNavigate();

  // 🔐 Protect route
  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");

    if (!isAdmin) {
      navigate("/signin");
    }
  }, [navigate]);

  // 🚪 Logout function
  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/signin");
  };

  const posts = [
    {
      id: 1,
      title: "How to Fix a Bike Chain",
      excerpt:
        "A simple step-by-step guide to diagnosing and fixing a loose or slipping bike chain.",
      status: "Published",
      date: "16 April 2026",
    },
    {
      id: 2,
      title: "Preventing Punctures",
      excerpt:
        "Practical tips to reduce punctures, improve tyre life, and stay riding for longer.",
      status: "Draft",
      date: "14 April 2026",
    },
  ];

  return (
    <div className="w-full overflow-x-hidden bg-gray-50 min-h-screen">
      {/* HERO */}
      <section
        className="relative min-h-[38vh] md:min-h-[45vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bikes})`,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-36 md:pt-44 pb-16 flex justify-between items-start">
          <div className="max-w-2xl text-white">
            <p className="text-sm uppercase tracking-widest text-yellow-400 font-semibold">
              Admin Dashboard
            </p>
            <h1 className="mt-3 text-3xl md:text-5xl font-semibold uppercase">
              Manage Blog Posts
            </h1>
          </div>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-5 py-2 rounded-md hover:bg-red-400 transition"
          >
            Logout
          </button>
        </div>
      </section>

      {/* MAIN */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* FORM */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
            <h2 className="text-xl font-semibold mb-4">Create New Post</h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Post Title"
                className="w-full border px-4 py-3 rounded-md"
              />

              <input
                type="text"
                placeholder="Excerpt"
                className="w-full border px-4 py-3 rounded-md"
              />

              <textarea
                rows="6"
                placeholder="Blog content..."
                className="w-full border px-4 py-3 rounded-md"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-yellow-400 py-3 rounded-md font-semibold hover:bg-yellow-300"
              >
                Publish Post
              </button>
            </form>
          </div>
        </div>

        {/* POSTS */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold mb-6">Existing Posts</h2>

            <div className="space-y-4">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="border rounded-lg p-4 flex justify-between items-start"
                >
                  <div>
                    <h3 className="font-semibold text-lg">{post.title}</h3>
                    <p className="text-gray-600 mt-2">{post.excerpt}</p>

                    <div className="mt-2 text-sm text-gray-500">
                      {post.status} • {post.date}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className="bg-yellow-400 px-3 py-1 rounded-md text-sm">
                      Edit
                    </button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded-md text-sm">
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}