interface ImagePlaceholderProps {
  text?: string;
  className?: string;
}

const ImagePlaceholder = ({ 
  text = "Image Placeholder", 
  className = "" 
}: ImagePlaceholderProps) => {
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-deep-blue to-deep-blue-dark flex items-center justify-center ${className}`}>
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle at 20% 30%, white 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center p-4">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
          <span className="text-white text-3xl font-bold">K</span>
        </div>
        <p className="text-white font-semibold">{text}</p>
        <p className="text-gray-300 text-sm mt-2">Replace with actual image</p>
      </div>
    </div>
  );
};

export default ImagePlaceholder;