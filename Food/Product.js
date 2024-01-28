import { Paper, Typography, IconButton } from "@mui/material";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { useDispatch } from "react-redux";
import { add_1_amount, subtract_1_amount } from "../state/ProductSlice";
import "../styles/Product.css";

export default function Product(props) {
  const dispatch = useDispatch();

  return (
    <>
      <Paper
        elevation={8}
        sx={{
          width: "22%",
          height: "390px",
          margin: "9px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/${props.img}`}
          style={{ width: "100%", height: "150px", marginRight: "30px" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: "1",
            justifyContent: "space-between",
            overflow: "hidden", // Hide overflow content
          }}
        >
          <div style={{ flex: "1", overflow: "hidden" }}>
            {/* Ensure the inner container also respects the flex and overflow properties */}
            <h2 className="product-title">{props.title}</h2>
            <h3 className="product-desc">{props.desc}</h3>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingRight: "27px",
              paddingLeft: "27px",
            }}
          >
            <h5 className="product-price">{props.price}$</h5>
            {!props.amount ? (
              <button
                className="add-to-cart"
                onClick={() => dispatch(add_1_amount(props.id))}
              >
                Add To Cart
              </button>
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "7%",
                  marginRight: "25px",
                }}
              >
                <IconButton onClick={() => dispatch(subtract_1_amount(props.id))}>
                  <RemoveRoundedIcon />
                </IconButton>
                <Typography>{props.amount}</Typography>
                <IconButton onClick={() => dispatch(add_1_amount(props.id))}>
                  <AddRoundedIcon />
                </IconButton>
              </div>
            )}
          </div>
        </div>
      </Paper>
    </>
  );
}
