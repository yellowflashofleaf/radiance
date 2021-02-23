import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import {red} from "@material-ui/core/colors";
import {Button, Tooltip} from "@material-ui/core";
import AlertDialog from "./dialog";
import SlotsDialog from "../views/Dashboard/MyEvents/slots";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: "fit-content",
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

    const [isMyEvent, setIsMyEvent] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenSlots, setIsOpenSlots] = useState(false);
    // eslint-disable-next-line
    const [slots, setSlots] = useState([]);
    const [slotId, setSlotId] = useState("");

    useEffect(() => {
        setIsOpen(false);
    }, []);

    useEffect(() => {
        if (props.type === "myEvent") setIsMyEvent(true);
        else setIsMyEvent(false);
    }, [props]);

    useEffect(() => {
        console.log(slotId);
    }, [slotId]);

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={props.image}
                title={props.eName}
                style={{backgroundSize: "contain"}}
            />
            <CardContent>
                <Typography variant="h5" color="textPrimary">
                    {props.eName}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.content}
                </Typography>
                {isMyEvent && (
                    <Typography variant="body2" color="textSecondary" component="p">
                        Ticket Id:- {props.regId}
                    </Typography>
                )}
            </CardContent>

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
                    </CardActions>

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
                                    <Tooltip title="Coming soon">
                                        <Button
                                            variant="contained"
                                            color="primary"
                                        >
                                            Book Slot (coming soon)
                                        </Button>
                                    </Tooltip>
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
