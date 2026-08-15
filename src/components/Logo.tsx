import Image from "next/image";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export function Logo({ className = "h-12 w-12", priority = false }: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="Lider Çocuklar Anaokulu"
      width={512}
      height={512}
      sizes="(max-width: 640px) 80px, 176px"
      className={`bg-transparent object-contain ${className}`}
      style={{ backgroundColor: "transparent", backgroundImage: "none" }}
      preload={priority}
    />
  );
}
