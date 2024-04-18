import React from "react";

const List = ({ data, startIndex }) => {
  

  return (
    <>
      {data.slice(startIndex, startIndex+ 5).map((item) => {
        const { id, name, image, age, email } = item;
        return (
          <div className="person" key={id}>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age}</p>
              <p>{email}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default List;
