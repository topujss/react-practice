/**
 * Array.from() /> to convert an   object to array
 * always use cors for image to bypass error
 */

import { useState } from 'react';
import Title from '../../components/Title/Title';
import { FaRegTimesCircle } from 'react-icons/fa';
import { RingLoader } from 'react-spinners';
import axios from 'axios';

const ImgPrev = () => {
  const [img, setImgs] = useState([]);
  const [loader, setLoader] = useState(false);

  const handleImg = (e) => {
    // set images to setState
    setImgs((prevState) =>
      // leave the previous state and merge the new state
      [...prevState, ...Array.from(e.target.files)]
    );
  };

  const handleDelete = (singleImg) => {
    // filter out the image that we want to delete
    const filterImg = img.filter((data) => data !== singleImg);

    // set the new state
    setImgs(filterImg);
  };

  const handleUpload = () => {
    setLoader(true);
    const cloudName = `dieggor6k`;
    const preSet = `a7fh1vif`;
    const URL = `https://api.cloudinary.com/v1_1/dieggor6k/image/upload`;

    // create a new form data
    const form_data = new FormData();

    // append the image to the form data
    img.forEach((data) => {
      form_data.append('file', data);
      form_data.append('cloud_name', cloudName);
      form_data.append('upload_preset', preSet);

      // send the form data to the server
      axios
        .post(URL, form_data)
        .then((res) => {
          console.log(res.data);
          setImgs([]); // make the state empty after uploading
          // setLoader(false);
        })
        .catch((err) => {
          console.log(err.message);
        });
    });
  };

  return (
    <>
      <Title
        title="our Image Preview page"
        subTitle="Computer programmers, are responsible for developing, coding, installing, and maintaining software systems."
        divider={true}
      />
      <div className="max-w-screen-lg mx-auto p-6 bg-white rounded-md">
        <section className="text-center">
          <label htmlFor="image" className="text-6xl inline-block rounded-md my-4 cursor-pointer">
            <img
              className="w-28 h-28"
              src="https://www.pngall.com/wp-content/uploads/2/Upload-PNG-HD-Image.png"
              alt=""
            />
            <input type="file" id="image" className="hidden" accept="image/*" multiple onChange={handleImg} />
          </label>

          {/* show the loader when the image is uploading */}
          {loader ? (
            <RingLoader color="#36d7b7" className="text-center w-full mx-auto" />
          ) : (
            <button
              className="bg-green-600 hover:bg-green-300 px-2 py-3 font-semibold rounded transition-all duration-200 text-white"
              onClick={handleUpload}
            >
              Upload Image
            </button>
          )}
        </section>
        {img.length > 0 && (
          <section className="img-show grid grid-cols-3 grid-flow-row gap-3 shadow p-3">
            {img.map((singleImg, index) => {
              // make an object url
              const imgUrl = URL.createObjectURL(singleImg);

              return (
                <div
                  key={index}
                  className="bg-slate-500 relative group transition-all duration-400 hover:bg-slate-300"
                >
                  <img className="h-full w-full object-cover border-2 border-sky-500" src={imgUrl} alt="" />
                  <button
                    className="absolute top-1 right-2 hidden group-hover:block"
                    onClick={() => handleDelete(singleImg)}
                  >
                    <FaRegTimesCircle className="text-indigo-500 bg-sky-300 rounded-full" />
                  </button>
                </div>
              );
            })}
          </section>
        )}
      </div>
    </>
  );
};

export default ImgPrev;
