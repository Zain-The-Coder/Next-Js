import Image from "next/image";

const Blogs = ({src , para , alt , dur}) => {
  return (
<div className="max-w-sm bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4">
  
  {/* Image wrapper */}
  <div className="relative w-full h-44 rounded-xl overflow-hidden">
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
    />
  </div>

  <div className="pt-4 space-y-3">
    <p className="text-gray-700 text-sm leading-relaxed font-bold">
      This approach ensures new React features work reliably in the App </p>

    <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t">
      <p className="font-medium">{para}</p>
      <p>{dur}</p>
    </div>
  </div>
</div>


  );
};

export default Blogs;
