import * as React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProgressiveImage from "react-progressive-image";
//Styles
import "../scss/Bio.scss";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const Bio = ({ imageDetails, image }) => (
  <>
    <main>
      <div className='bio-container'>
        <div className='row center'>
          <div className='image-container'>
            <div
              className='thumbnail'
              ref={image}
              style={{
                width: imageDetails.width,
                height: imageDetails.height,
              }}>
              <div className='frame'>
                <Link to={`/model/LimEanHan`}>
                  <ProgressiveImage
                    // src={require("../images/yasmeen.webp")}
                    // placeholder={require("../images/compressed-image.jpg")}
                    src={require("../images/myphoto.jpg").default}
                    placeholder={require("../images/myphoto2.jpg").default}>
                    {(src) => (
                      <motion.img
                        src={src}
                        alt='Ean Han Lim'
                        whileHover={{ scale: 1.1 }}
                        transition={transition}
                      />
                    )}
                  </ProgressiveImage>
                </Link>
              </div>
            </div>
            <motion.div
              exit={{ opacity: 0 }}
              transition={transition}
              className='information'>
              <div className='title'>EAN HAN LIM</div>
              <div className='location'>
                <span>CLICK</span>
                <span>MY PHOTO</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  </>
);

export default Bio;
