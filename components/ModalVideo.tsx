import Image from 'next/image';
import ReactPlayer from 'react-player';

import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const ModalVideo = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex cursor-pointer items-center gap-4">
          <button className="relative flex size-[58px] items-center justify-center rounded-full bg-white shadow-2xl">
            <Image src="/assets/home/play.svg" width={36} height={36} alt="" />
          </button>
          <span className="font-primary text-lg">Watch Video</span>
        </div>
      </DialogTrigger>
      <DialogContent>
        <ReactPlayer
          width={'100%'}
          height={'100%'}
          url="https://www.youtube.com/watch?v=0fGzpgqmLFY"
        />
      </DialogContent>
    </Dialog>
  );
};

export default ModalVideo;
