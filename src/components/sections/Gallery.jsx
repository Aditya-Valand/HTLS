import { motion } from 'framer-motion';
import { Image as ImageIcon, Video } from 'lucide-react';

// Replace these with your actual image URLs
import img1 from '../../assets/img1.PNG'; 
import img2 from '../../assets/img2.PNG';
import img3 from '../../assets/img3.PNG';
import img4 from '../../assets/img4.PNG';
import img5 from '../../assets/img5.PNG';

// Use the imported variables in the array. External URLs can remain as strings.
const galleryImages = [
  img1,
  img2,
  img3,
  img4,
  "https://images.trvl-media.com/lodging/77000000/76890000/76889800/76889781/93ded020_z.jpg", // This one is fine as a string
  img5,
];

export function Gallery() {
  return (
    <motion.section
      id="gallery"
      className="py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
            Venue Glimpse
          </h2>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            A sneak peek into the majestic setting of our unforgettable night.
          </p>
        </motion.div>

        {/* Image Gallery */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-2xl border-2 border-yellow-400/20 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                className="w-full h-auto object-cover"
                src={src}
                alt={`Venue Image ${index + 1}`}
              />
            </motion.div>
          ))}
        </div>

        {/* Video Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
            <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent mb-8">
                Watch The Venue Tour
            </h3>
            <div className="aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden border-2 border-purple-400/30 shadow-2xl shadow-purple-500/20">
                {/* Replace this with your actual video embed iframe */}
                <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/2IN13igqQVg?start=5" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                ></iframe>
            </div>
        </motion.div>
      </div>
    </motion.section>
  );
}