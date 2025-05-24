import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center justify-center leading-none gap-3 text-black`}
    >
      {/*<GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />*/}
      <Image 
        src="/customers/salvaxe.png"
        alt="logo" 
        width={48} 
        height={48}
      />
      <p className="text-[14px]">SALVAXE DASHBOARD</p>
    </div>
  );
}
