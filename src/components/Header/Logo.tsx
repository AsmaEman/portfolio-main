import OptimizedImage from "../UI/OptimizedImage";

export default function Logo({ color }: { color: string }) {
  return (
    <div
      className="flex-center cursor-pointer transition-all duration-300 ease-in hover:scale-110"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <OptimizedImage
        src="/img/favi.svg"
        alt="Logo"
        className="w-12 h-12 md:w-14 md:h-14 rounded-lg"
        loading="eager"
        priority={true}
        style={{ filter: color === 'white' ? 'brightness(0) invert(1)' : 'none' }}
        placeholder="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iOCIgZmlsbD0iIzMzMzMzMyIvPgo8L3N2Zz4K"
      />
    </div>
  );
}
