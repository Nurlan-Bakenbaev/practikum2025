"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { motion } from "framer-motion";
const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("/api/posts")
      .then(res => setPosts(res.data))
      .catch(() => setPosts([
        {
          id: 1,
          title: "Mein erster Post",
          content: "Das ist die Beschreibung meines ersten Posts.",
          imageUrl: "/praktikum/server.jpg",
        },
        {
          id: 2,
          title: "Netzwerkausrüstung",
          content: "Alles über Switches, Router und Kabel.",
          imageUrl: "/praktikum/Netzwerkausrüstung.jpg",
        },
        {
          id: 3,
          title: "Speichersysteme",
          content: "RAID, NAS und SAN erklärt.",
          imageUrl: "/praktikum/speicher-system.jpg",
        },
       
      
      ]));
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-8">Meine Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {posts.map((post) => (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            key={post.id}
            className="flex flex-col rounded-lg shadow-md bg-slate-800  p-4 h-full"
          >
            <div className="w-full h-48 mb-4 relative">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                style={{ objectFit: "cover", borderRadius: "0.5rem" }}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-base">{post.content}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PostsPage;