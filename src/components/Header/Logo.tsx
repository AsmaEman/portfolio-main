export default function Logo({ color }: { color: string }) {
  return (
    <div
      className="flex-center cursor-pointer transition-all duration-300 ease-in hover:scale-110"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <img
        src="/img/favi.svg"
        alt="Logo"
        className="w-12 h-12 md:w-14 md:h-14 rounded-lg"
        style={{ filter: color === 'white' ? 'brightness(0) invert(1)' : 'none' }}
      />
    </div>
  );
}
