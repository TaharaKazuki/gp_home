'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useContext } from 'react';

import ModalVideo from '@/components/ModalVideo';
import { CursorContext } from '@/provider/CursorContext';

const Home = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="flex min-h-screen items-center overflow-x-hidden"
    >
      <div />
      <video
        autoPlay
        loop
        muted
        className="absolute left-0 top-0 size-full object-cover"
      >
        <source src="/assets/home/video.mp4" type="video/mp4" />
        このブラウザではvideoタグがサポートされておりません。
      </video>

      <div className="container z-30 mx-auto mt-32 lg:mt-0">
        <div className="flex h-full flex-col items-center xl:flex-row">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                bottom: 0,
                transition: { delay: 2.4, duration: 1.2, ease: 'easeInOut' },
              }}
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="hidden xl:flex"
            >
              <div className="relative hidden h-[250px] w-[600px] object-cover xl:flex">
                <Image src={'/assets/home/img.svg'} fill quality={100} alt="" />
              </div>
            </motion.div>
          </div>
          <div className="w-full text-center xl:w-[500px] xl:text-left">
            <motion.div
              className="bottom-36 flex justify-center xl:hidden"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                bottom: 0,
                transition: { delay: 2.4, duration: 1.2, ease: 'easeInOut' },
              }}
            >
              <div className="relative h-[300px] w-[400px] object-cover">
                <Image src={'/assets/home/img.svg'} fill alt="" />
              </div>
            </motion.div>

            <motion.p
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="lead mx-auto max-w-xl"
            >
              私たち、わおんイキシアは保護犬・猫とともに暮らす
              <br />
              障がい者グループホームです。
            </motion.p>
            <div className="mx-auto flex max-w-max flex-col items-center gap-6 xl:mx-0 xl:flex-row">
              <motion.button
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
                className="btn"
              >
                お問い合わせはコチラ
              </motion.button>
              <motion.div
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
              >
                <ModalVideo />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
