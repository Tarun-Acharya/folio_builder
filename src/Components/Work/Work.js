import React from "react";
import ExpCard from "./ExpCard";
import { useDispatch } from "react-redux";
import "./Work.css";
import { workActions } from "../../store";

function Work() {
  const dispatch = useDispatch();
  const workEx = [
    {
      Company: "ABC",
      Role: "Eng 1",
      Description:
        "Finding the truth wouldn't be easy, that's for sure. Then there was the question of whether or not Jane really wanted to know the truth. That's the thing that bothered her most. It wasn't the difficulty of actually finding out what happened that was the obstacle, but having to live with that information once it was found.",
      From: "2007",
      To: "2010",
    },
    {
      Company: "DEF",
      Role: "Eng 2",
      Description:
        "Hopes and dreams were dashed that day. It should have been expected, but it still came as a shock. The warning signs had been ignored in favor of the possibility, however remote, that it could actually happen. That possibility had grown from hope to an undeniable belief it must be destiny. That was until it wasn't and the hopes and dreams came crashing down.",
      From: "2010",
      To: "2012",
    },
    {
      Company: "GHI",
      Role: "Eng 3",
      Description:
        "She wanted rainbow hair. That's what she told the hairdresser. It should be deep rainbow colors, too. She wasn't interested in pastel rainbow hair. She wanted it deep and vibrant so there was no doubt that she had done this on purpose.",
      From: "2012",
      To: "2016",
    },
    {
      Company: "JKL",
      Role: "Eng 4",
      Description:
        "Cake or pie? I can tell a lot about you by which one you pick. It may seem silly, but cake people and pie people are really different. I know which one I hope you are, but that's not for me to decide. So, what is it? Cake or pie?",
      From: "2016",
      To: "Present",
    },
  ];
  dispatch(workActions.addExperience(workEx));

  return (
    <div className="Work">
      {workEx.map((workE) => (
        <ExpCard key={workE} work={workE}></ExpCard>
      ))}
    </div>
  );
}

export default Work;
