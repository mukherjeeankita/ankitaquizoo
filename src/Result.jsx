import { Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./Result.css";


const Result = ({ name, score }) => {
  const[state, setState]=useState();
  const history = useHistory();
const Fscore=()=>{
  if(score>=5){
    setState("Great, You Are Passed 👍")
  }else{
    setState("Sorry, You are Failed 👎")
  }
}
  useEffect(() => {
    Fscore();
    if (!name) {
     
      history.push("/");
    }
  }, [name, history]);

 
  return (
    <div className="result">
      <span className="title">Final Score : {score}<br/>{state}</span>

      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 40 }}
        href="/"
      >
        Play Again
      </Button>
    </div>
  );
};

export default Result;
