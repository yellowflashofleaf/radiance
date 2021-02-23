import React, {useEffect} from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import {Checkbox, Table, TableBody, TableCell, TableHead, TableRow, Typography,} from "@material-ui/core";
import moment from "moment";

export default function SlotsDialog(props) {
    const [open, setOpen] = React.useState(false);

    //   const handleClickOpen = () => {
    //     setOpen(true);
    //   };

    useEffect(() => {
        if (props.isOpen) setOpen(true);
        else setOpen(false);
    }, [props, open]);

    const handleClose = () => {
        setOpen(false);
    };

    // useEffect(() => {
    //   getSlotsForEvent();
    // }, []);

    return (
        <div>
            {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {props.slots.length > 0 ? (
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Time</TableCell>
                                        {/* <TableCell>Customer</TableCell>
                    <TableCell>Method</TableCell>
                    <TableCell>Total</TableCell>
                    <TableCell>Status</TableCell> */}
                                        <TableCell align="right"></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {props.slots.map((slot) => (
                                        <TableRow key={slot._id}>
                                            <TableCell padding="checkbox">
                                                <Checkbox
                                                    // checked={selectedOrders.indexOf(order.id) !== -1}
                                                    color="primary"
                                                    onChange={() => props.onSlotChange(slot._id)}
                                                    value={slot._id}
                                                />
                                            </TableCell>
                                            <TableCell>
                                                {/* {order.payment.ref} */}
                                                <Typography variant="body2">
                                                    {moment(slot.start_time).format("DD MMM YYYY")}
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                {/* {order.payment.ref} */}
                                                <Typography variant="body2">
                                                    {moment(slot.start_time).format(" hh:mm")} -{" "}
                                                    {moment(slot.end_time).format(" hh:mm")}
                                                </Typography>
                                            </TableCell>

                                            <TableCell align="right">
                                                <Button
                                                    color="primary"
                                                    // component={RouterLink}
                                                    size="small"
                                                    // to="/management/orders/1"
                                                    variant="contained"
                                                >
                                                    Book
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        ) : (
                            ""
                        )}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={() => {
                            handleClose();
                            props.onDeny();
                        }}
                        color="primary"
                    >
                        Discard
                    </Button>
                    <Button
                        onClick={() => {
                            handleClose();
                            props.onBook();
                        }}
                        color="primary"
                        variant="contained"
                        autoFocus
                    >
                        Book
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
