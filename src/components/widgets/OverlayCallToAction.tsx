import React, { useEffect, useState } from 'react';
import { youTubeChannelUrl } from '../../data';
import { overlayStorage } from '~/utils/overlayStorage';

const INITIAL_DELAY = 15_000;

export const OverlayCallToAction = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!overlayStorage.shouldShowOverlay()) return;

    const timeout = setTimeout(() => {
      setShow(true);
    }, INITIAL_DELAY);
    return () => clearTimeout(timeout);
  }, []);

  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    if (!show) return;

    const timeout = setTimeout(() => {
      setAnimate(true);
    }, 50);

    return () => clearTimeout(timeout);
  }, [show]);

  const close = () => {
    setShow(false);
    overlayStorage.setLastSeen();
  };

  return show ? (
    <div
      className={`fixed h-full w-full bg-black bg-opacity-25 z-10 transition-opacity ease-in duration-700 opacity-0 ${
        animate ? 'opacity-100' : ''
      }`}
      onClick={close}
    >
      <div
        className="fixed flex flex-col gap-6 w-[500px] xl:w-[600px] max-w-[80%] translate-y-1/2 bottom-[50%] translate-x-1/2 right-[50%] rounded-lg text-center p-6 bg-light dark:bg-dark shadow-2xl"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <section>
          <h2 className="text-2xl font-bold">Are you enjoying this article?</h2>
        </section>
        <section className="flex flex-col gap-4">
          {/* <p>
            Did you know there's also a video version?{' '}
            <a href="" className="underline cursor-pointer">
              Watch it here
            </a>
            .
          </p> */}
          <p>
            I run a YouTube channel called Dev Leonardo - learning Web Development through Open Source - come have a
            look!
          </p>
        </section>
        <section className="flex flex-col md:flex-row gap-4 md:gap-2 justify-evenly items-center mt-1">
          <div className="underline cursor-pointer" onClick={close}>
            Maybe later
          </div>
          <a className="btn btn-primary cursor-pointer" href={youTubeChannelUrl + '?sub_confirmation=1'}>
            Go to YouTube
          </a>
        </section>
      </div>
    </div>
  ) : null;
};
