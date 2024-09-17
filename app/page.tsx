'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useContext } from 'react';

import { CursorContext } from '@/provider/CursorContext';

const Home = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="flex min-h-screen items-center overflow-x-hidden"
    >
      <div className="container mx-auto">
        <div className="flex h-full flex-col items-center xl:flex-row">
          <div className="w-full pt-[120px] text-center xl:w-[500px] xl:text-left">
            {/* ここにロゴ */}
            {/* <motion.h1
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="h2 mb-6"
            >
              グループホーム <br /> わおんイキシア
            </motion.h1> */}
            <motion.p
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="lead mx-auto max-w-xl"
            >
              わおんイキシアは保護犬・猫とともに暮らす
              <br />
              障がい者グループホームです。
            </motion.p>
            <div className="mx-auto flex max-w-max flex-col items-center gap-6 xl:mx-0 xl:flex-row">
              <motion.button
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
                className="btn"
              >
                お問い合わせはこちら
              </motion.button>
              <motion.div
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
              ></motion.div>
            </div>
          </div>
          <div className="flex-1">
            <div className="fixed bottom-0 hidden xl:flex">
              <Image
                src={'/assets/home/img.png'}
                width={864}
                height={650}
                quality={100}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
