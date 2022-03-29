import React from "react";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import Chip from "@mui/material/Chip";
import Icon from "@mui/material/Icon";
import StarOutline from "@mui/icons-material/StarOutline";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";

import Review from "./Review";

class RestaurantPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.props.goToReviewPage();
    }
    render() {
        return (
            <>
                <Paper
                    style={{
                        backgroundColor: this.props.colors.CAROLINA_BLUE,
                        margin: 25,
                        padding: 30,
                        overflow: "scroll",
                    }}
                >
                    <div
                        class="row"
                        style={{
                            display: "flex",
                            flexDirection: "row",
                        }}
                    >
                        <Paper
                            style={{
                                backgroudColor: "white",
                                height: 160,
                                width: 160,
                            }}
                        />
                        <Paper
                            style={{
                                backgroudColor: "white",
                                height: 160,
                                width: 160,
                            }}
                        />
                        <Paper
                            style={{
                                backgroudColor: "white",
                                height: 160,
                                width: 160,
                            }}
                        />
                    </div>
                    <div
                        style={{
                            display: "grid",
                            margin: 10,
                        }}
                    >
                        <Typography
                            fontSize="36px"
                            style={{
                                display: "grid", gridColumn: "1/3"
                            }}
                        >
                            restaurant
                        </Typography>
                        <Typography fontSize="28px" style={{
                            display: "grid", gridColumn: "4/5"
                        }}> $$$ </Typography>
                    </div>
                    <div
                        style={{
                            display: "grid",
                            flexDirection: "row",
                        }}
                    >
                        <Typography fontSize="28px" style={{
                            display: "grid", gridColumn: "1/3"
                        }}> open 10 am - 8 pm </Typography>
                        <Typography fontSize="28px" style={{
                            display: "grid", gridColumn: "4/6"
                        }}> not too busy </Typography>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            margin: 10,
                        }}
                    >
                        <Chip label="website" />
                        <Chip label="menu" />
                        <Chip label="directions" />
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            margin: 10,
                        }}
                    >
                        <Typography fontSize="28px"> vibes: </Typography>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            margin: 10,
                        }}
                    >
                        <Chip label="#studygrind" />
                        <Chip label="#quirky" />
                        <Chip label="#cozy" />
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            margin: 10,
                        }}
                    >
                        <Typography fontSize="28px"> leave a review: </Typography>
                        <List>
                            <ListItemButton onClick={this.handleClick}>
                                <Icon
                                    style={{
                                        color: this.props.colors.GOLDENISH,
                                    }}
                                >

                                    <StarOutline fontSize="small" />
                                </Icon>
                                <Icon
                                    style={{
                                        color: this.props.colors.GOLDENISH,
                                    }}
                                >

                                    <StarOutline fontSize="small" />
                                </Icon>
                                <Icon
                                    style={{
                                        color: this.props.colors.GOLDENISH,
                                    }}
                                >

                                    <StarOutline fontSize="small" />
                                </Icon>
                                <Icon
                                    style={{
                                        color: this.props.colors.GOLDENISH,
                                    }}
                                >

                                    <StarOutline fontSize="small" />
                                </Icon>
                                <Icon
                                    style={{
                                        color: this.props.colors.GOLDENISH,
                                    }}
                                >

                                    <StarOutline fontSize="small" />
                                </Icon>
                            </ListItemButton>
                        </List>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            margin: 10,
                        }}
                    >
                        <Typography fontSize="28px"> reviews: </Typography>
                        <FormControl
                            style={{
                                width: 200,
                            }}
                        >
                            <InputLabel> filter by </InputLabel>
                            <Select>
                                <MenuItem value={10}> upvotes </MenuItem>
                                <MenuItem value={20}> recent </MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            margin: 10,
                            overflow: "scroll",
                            gap: 10,
                        }}
                    >
                        <Review colors={this.props.colors}> </Review>
                        <Review colors={this.props.colors}> </Review>
                        <Review colors={this.props.colors}> </Review>
                        <Review colors={this.props.colors}> </Review>
                    </div>
                </Paper>
            </>
        );
    }
}

export default RestaurantPage;
