interface CustomButtonProps {
  name: string;
  link?: string;
  size?: string;
  icon?: string;
}
const CustomButton: React.FC<CustomButtonProps> = ({ name, link, size, icon }) => {
  return (
    <a
      href={link}
      rel="noopener noreferrer"
      className={`relative flex items-center gap-1.5 overflow-hidden rounded-full p-[1px] min-w-[120px] font-semibold text-foreground shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary group ${size}`}
    >
      <span className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#F54180_0%,#338EF7_50%,#F54180_100%)] animate-[spin_3s_linear_infinite]"></span>
      <div className="relative inline-flex items-center justify-center w-full h-full px-3 py-1 text-sm font-medium text-foreground bg-background rounded-full backdrop-blur-3xl cursor-pointer transition-background group-hover:bg-background/70">
        {icon && <i className={`${icon} me-1`}></i>}
        {name}
      </div>
    </a>
  );
};
export default CustomButton;