import Button from "@mui/material/Button";

function ButtonComponent(props) {
  const { title = "", onClick = () => {} } = props;

  return (
    <>
      <Button
        onClick={() => {
          onClick();
        }}
      >
        {title}
      </Button>
    </>
  );
}

export default ButtonComponent;
