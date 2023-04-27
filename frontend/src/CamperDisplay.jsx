import React from "react";

const CamperDispaly = (props) => {
  const { campers } = props;
  // props.campers

  return (
    <div>
      {campers.map((camper) => {
        // console.log(camper);

        return (
          <div key={camper.id} style={{padding:"1em"}}>
            <p>ID : {camper.id}</p>
            <p>Firstname : {camper.firstname}</p>
            <p>Lastname : {camper.lastname}</p>
            <p>Grade : {camper.grade}</p>
            <p>
              Birth date : {new Date(camper.birthdate).toLocaleDateString()}
            </p>
            <p>
              Record created date :{" "}
              {new Date(camper.created).toLocaleDateString()}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default CamperDispaly;
