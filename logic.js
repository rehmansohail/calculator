function appendNumber(number) {
    document.getElementById("result").value += number;
  }

  function appendOperator(operator) {
    document.getElementById("result").value += operator;
  }

  function calculate() {
    try {
      var result = eval(document.getElementById("result").value);
      document.getElementById("result").value = result;
    } catch (error) {
      document.getElementById("result").value = "Error";
    }
  }

  function clearResult() {
    document.getElementById("result").value = "";
  }