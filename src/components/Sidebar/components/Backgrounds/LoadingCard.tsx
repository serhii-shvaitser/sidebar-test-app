function LoadingCard() {
  return (
    <div className="relative flex h-full items-center justify-center text-white">
      <span className="text-sm">25%</span>
      <p className="absolute bottom-2.75 text-center text-xs">1 minute left</p>
    </div>
  );
}

export default LoadingCard;
