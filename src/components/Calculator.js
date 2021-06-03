import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Typography, useMediaQuery, Button } from "@material-ui/core";
import Digit from "./Digit";
import Operator from "./Operator";
import Equal from "./Equal";
import { create, all } from "mathjs";
import { ResultsService } from "../services/";
import HttpStatus from "http-status-codes";

const useStyles = (smallMedia) =>
  makeStyles((theme) => ({
    container: {
      //   height: "auto",
      //   width: "100%",
      //   margin: "auto",
      display: "flex",
      backgroundColor: theme.palette.primary.contrastText,
      alignItems: "center",
      justifyContent: "center",
    },
    column: {
      display: "flex",
      flexDirection: "column",
    },
    row: {
      display: "flex",
      flexDirection: "row",
    },
    subtitle: {
      color: theme.palette.primary.light,
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      textAlign: "center",
      fontSize: smallMedia ? "2rem" : "",
      marginLeft: smallMedia ? theme.spacing(1) : "",
    },
    caption: {
      color: theme.palette.primary.main,
      marginBottom: theme.spacing(2),
      textAlign: "right",
      marginRight: theme.spacing(0),
      minHeight: "15px",
    },
    button: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      width: "50%",
      margin: "auto",
      backgroundColor: theme.palette.primary.light,
    },
  }));

function Calculator(props) {
  const theme = useTheme();
  const smallMedia = useMediaQuery(theme.breakpoints.down("xs"));
  const classes = useStyles(smallMedia)();
  const resultsService = new ResultsService();

  const [result, setResult] = useState("");
  const [number, setNumber] = useState("");
  const [history, setHistory] = useState([]);

  const config = {};
  const math = create(all, config);

  React.useEffect(() => {allResults()}, []);
  
  const allResults = async () => {
    const results = await resultsService.getResults();
    let res = await results.json();
    console.log(res);
    setHistory(res);
  }

  const addDigit = (value) => {
    if (result.slice(-1) === "=") {
      setResult("");
      setNumber(value);
    } else {
      setNumber(number + value);
    }
  };

  const addOperator = (value) => {
    if (!result || result.slice(-1) === "=") {
      setResult(number + value);
    } else if (number) {
      setResult(result + number + value);
    } else {
      setResult(result.slice(0, -1) + value);
    }
    setNumber("");
  };

  const calculateResult = () => {
    let total = 0;
    let expressionToCalculate = result;
    if (number) {
      expressionToCalculate = expressionToCalculate + number;
    }
    if (!expressionToCalculate) return;

    console.log("calculating: " + expressionToCalculate);
    try {
      total = math.evaluate(expressionToCalculate);
      console.log(total);
      if (total === math.Infinity || total === math.NaN) {
        setNumber("");
        setResult("");
      } else {
        setNumber(total.toString());
        setResult(expressionToCalculate + "=");
      }
    } catch (error) {
      setNumber("");
      setResult("");
    }
  };

  const save = async () => {
    if (result.slice(-1) === "=") {
      //save only if result is currently displayed
      let body = {
        result: result + number,
      };
      let response = await resultsService.createResult(body);

      if (response.status === HttpStatus.CREATED) {
        //success
        console.log("success");
        allResults();
      } else if (response.status === HttpStatus.BAD_REQUEST) {
        //error
        console.log("error");
        window.alert("Results exceed 5, please clear results");
      }
    }
  };

  const clearResults = async () => {
    let response = await resultsService.deleteResults();

    if (response.status === HttpStatus.OK) {
        //success
        console.log("delete success");
        allResults();
      } else  {
        //error
        console.log("error");
      }
  };

  return (
    <div className={classes.container}>
      <div className={classes.column}>
        <Typography variant="h3" className={classes.subtitle}>
          Calculator
        </Typography>
        <Typography variant="caption" className={classes.caption}>
          {result}
        </Typography>
        <Typography variant="h5" className={classes.caption}>
          {number}
        </Typography>
        <div className={classes.row}>
          <Digit value="7" addDigit={addDigit} />
          <Digit value="8" addDigit={addDigit} />
          <Digit value="9" addDigit={addDigit} />
          <Operator value="*" addOperator={addOperator} />
        </div>

        <div className={classes.row}>
          <Digit value="4" addDigit={addDigit} />
          <Digit value="5" addDigit={addDigit} />
          <Digit value="6" addDigit={addDigit} />
          <Operator value="-" addOperator={addOperator} />
        </div>

        <div className={classes.row}>
          <Digit value="1" addDigit={addDigit} />
          <Digit value="2" addDigit={addDigit} />
          <Digit value="3" addDigit={addDigit} />
          <Operator value="+" addOperator={addOperator} />
        </div>

        <div className={classes.row}>
          <Digit value="0" addDigit={addDigit} />
          <Digit value="." addDigit={addDigit} />
          <Equal submit={calculateResult} />
          <Operator value="/" addOperator={addOperator} />
        </div>

        <div className={classes.row}>
        <Button
            size="medium"
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={clearResults}
          >
            Clear
          </Button>
          <Button
            size="medium"
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={save}
          >
            Save
          </Button>
        </div>
      </div>

      <div className={classes.column}>
            {history.map((object, index) => {
            return <Typography key={index} variant="subtitle1" className={classes.subtitle}>
                {object}
            </Typography>
    })}
      </div>
    </div>
  );
}

export default Calculator;
