"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { blogPosts, BlogPost } from "../data/blog-posts";
import { Button } from "../components/ui/button";

export function BlogSection() {
  const [currentPostIndex, setCurrentPostIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPostIndex((prevIndex) => (prevIndex + 1) % blogPosts.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const currentPost = blogPosts[currentPostIndex];

  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8">Нашиот Блог</h2>
        <div className="relative h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPost.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <div className="bg-slate-800 rounded-lg overflow-hidden shadow-lg flex h-full">
                <div className="w-1/2">
                  <img
                    src={currentPost.imageUrl}
                    alt={currentPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-1/2 p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {currentPost.title}
                    </h3>
                    <p className="text-slate-300 mb-4">{currentPost.excerpt}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 mb-4">
                      {currentPost.author} | {currentPost.date}
                    </p>
                    <Link to={`/blog/${currentPost.id}`}>
                      <Button variant="outline">Прочитај повеќе</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center mt-8">
          {blogPosts.map((post, index) => (
            <button
              key={post.id}
              className={`w-3 h-3 rounded-full mx-2 ${
                index === currentPostIndex ? "bg-red-500" : "bg-slate-600"
              }`}
              onClick={() => setCurrentPostIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
