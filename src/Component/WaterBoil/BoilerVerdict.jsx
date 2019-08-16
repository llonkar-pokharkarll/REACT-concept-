function BoilerVerdict(props) {
  if (props.value > 100)
    return "water will boil";
  return " : water will not boil";
}

export default BoilerVerdict;