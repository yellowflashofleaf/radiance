import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Button } from "@material-ui/core";
import AlertDialog from "./dialog";
import SlotsDialog from "../views/Dashboard/MyEvents/slots";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function EventCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [isMyEvent, setIsMyEvent] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSlots, setIsOpenSlots] = useState(false);
  const [slots, setSlots] = useState([]);
  const [slotId, setSlotId] = useState("");

  useEffect(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (props.type === "myEvent") setIsMyEvent(true);
    else setIsMyEvent(false);
  }, [props]);

  const getSlotsForEvent = (eid) => {
    var config = {
      method: "get",
      url: "https://api-ems.pulzion.in/myevents/slots/" + eid,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        Cookie: "__cfduid=d2cfc1cb73f6e94d0f882b1a4b7cc82b41613815019",
      },
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        setSlots(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    console.log(slotId);
  }, [slotId]);

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={props.image}
        // image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fourcodeworld.com%2Farticles%2Fread%2F966%2Fcoding-is-it-the-most-important-skill-for-the-future&psig=AOvVaw16ufXDYnNETngLwk71MKHu&ust=1613066668345000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNiOkuHz3-4CFQAAAAAdAAAAABAX"
        title={props.eName}
      />
      <CardContent>
        <Typography variant="h4" color="textPrimary">
          {props.eName}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.content}
        </Typography>
      </CardContent>

      {/* For Register */}
      {!isMyEvent && (
        <>
          <CardActions disableSpacing>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setIsOpen(true)}
            >
              Register
            </Button>

            {/* <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton> */}
          </CardActions>
          {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Method:</Typography>
              <Typography paragraph>
                Heat 1/2 cup of the broth in a pot until simmering, add saffron
                and set aside for 10 minutes.
              </Typography>
              <Typography paragraph>
                Heat oil in a (14- to 16-inch) paella pan or a large, deep
                skillet over medium-high heat. Add chicken, shrimp and chorizo,
                and cook, stirring occasionally until lightly browned, 6 to 8
                minutes. Transfer shrimp to a large plate and set aside, leaving
                chicken and chorizo in the pan. Add pimentón, bay leaves,
                garlic, tomatoes, onion, salt and pepper, and cook, stirring
                often until thickened and fragrant, about 10 minutes. Add
                saffron broth and remaining 4 1/2 cups chicken broth; bring to a
                boil.
              </Typography>
              <Typography paragraph>
                Add rice and stir very gently to distribute. Top with artichokes
                and peppers, and cook without stirring, until most of the liquid
                is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
                reserved shrimp and mussels, tucking them down into the rice,
                and cook again without stirring, until mussels have opened and
                rice is just tender, 5 to 7 minutes more. (Discard any mussels
                that don’t open.)
              </Typography>
              <Typography>
                Set aside off of the heat to let rest for 10 minutes, and then
                serve.
              </Typography>
            </CardContent>
          </Collapse> */}

          <AlertDialog
            title={"Confirmation"}
            data={"Register for " + props.eName}
            isOpen={isOpen}
            onAccept={() => {
              props.register(props.id);
              setIsOpen(false);
            }}
            onDeny={() => setIsOpen(false)}
          />
        </>
      )}
      {isMyEvent && (
        <>
          {
            <>
              <CardActions disableSpacing>
                {!props.slotId ? (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      setIsOpenSlots(true);
                      getSlotsForEvent(props.eid);
                    }}
                  >
                    Book Slot
                  </Button>
                ) : (
                  <Button variant="contained" color="primary" disabled>
                    Slot Booked
                  </Button>
                )}{" "}
              </CardActions>
              <SlotsDialog
                title={"Slot Booking"}
                isOpen={isOpenSlots}
                slots={slots}
                onSlotChange={setSlotId}
                onBook={() => {
                  props.bookSlots(props.id, slotId);
                  setIsOpenSlots(false);
                }}
                onDeny={() => setIsOpenSlots(false)}
              ></SlotsDialog>
            </>
          }
        </>
      )}
    </Card>
  );
}
