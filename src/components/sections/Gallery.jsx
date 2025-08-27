import { motion } from 'framer-motion';
// Your image imports remain the same
import img1 from '../../assets/img1.PNG';
import img2 from '../../assets/img2.PNG';
import img3 from '../../assets/img3.PNG';
import img4 from '../../assets/img4.PNG';
import img5 from '../../assets/img5.PNG';

export function Gallery() {
  // We place the images manually in the grid for a custom layout
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

        {/* --- UPDATED CSS GRID LAYOUT --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Image 1: Main focal point, larger */}
          <motion.div
            className="col-span-2 row-span-2 overflow-hidden rounded-2xl border-2 border-yellow-400/20 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, zIndex: 10 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img className="w-full h-full object-cover" src={img1} alt="Venue Image 1" />
          </motion.div>

          {/* Image 2 */}
          <motion.div
            className="col-span-1 overflow-hidden rounded-2xl border-2 border-yellow-400/20 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, zIndex: 10 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <img className="w-full h-full object-cover" src={img2} alt="Venue Image 2" />
          </motion.div>

          {/* Image 3 */}
          <motion.div
            className="col-span-1 overflow-hidden rounded-2xl border-2 border-yellow-400/20 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, zIndex: 10 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img className="w-full h-full object-cover" src={img3} alt="Venue Image 3" />
          </motion.div>

          {/* Image 4: Spans two columns */}
          <motion.div
            className="col-span-2 overflow-hidden rounded-2xl border-2 border-yellow-400/20 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, zIndex: 10 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <img className="w-full h-full object-cover" src={img4} alt="Venue Image 4" />
          </motion.div>
          
          {/* Image 5 would continue to fill the grid... */}
          {/* You can add img5 here if you like, e.g., <div className="col-span-2">...</div> */}
        </div>
      </div>
    </motion.section>
  );
}