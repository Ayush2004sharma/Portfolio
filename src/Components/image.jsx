const Image = () => {
  return (
    <div className="relative w-96 h-auto">
      {/* Glowing Effect */}
      <div className="absolute inset-0 rounded-full bg-black blur-2xl opacity-75"></div>
      
      {/* Image */}
      <img 
        src="/download.jpg" 
        alt="Decorative Element"
        className="relative w-full h-full rounded-full object-cover shadow-2xl"
      />
    </div>
  );
};

export default Image;
