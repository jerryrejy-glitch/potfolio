const items = [
  "Instagram", "Facebook", "LinkedIn", "YouTube",
  "Google My Business", "Reels & Short-form Video",
  "Paid Ads", "Content Strategy", "Lead Generation", "Community Building",
];

export default function Ticker() {
  const doubled = [...items, ...items];
  return (
    <div className="border-y border-[#E8E8ED] py-5 overflow-hidden bg-white">
      <div className="ticker-animate flex w-max gap-0">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-5 px-10 text-[15px] font-medium text-[#6E6E73] whitespace-nowrap">
            {item}
            <span className="text-[#E8E8ED]">·</span>
          </div>
        ))}
      </div>
    </div>
  );
}
