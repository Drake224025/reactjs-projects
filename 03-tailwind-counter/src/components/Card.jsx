/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

const Card = ({
  username = "Placeholder",
  image,
  post = "Not Assigned Yet",
}) => {
  return (
    <div>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src={image}
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              provident modi id expedita ipsum pariatur sunt? Autem provident
              at, dolores dolorum esse alias quasi commodi delectus dicta
              debitis impedit praesentium? Earum fugit iste animi nihil
              distinctio iure a saepe eveniet id in aut suscipit amet, sint
              accusamus deserunt ducimus doloremque dicta nobis maiores. Harum
              vero minima sequi, facere quam tempora!
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">{username}</div>
            <div className="text-slate-700 dark:text-slate-500">
              Best {post} Award, Nice!
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};

export default Card;
