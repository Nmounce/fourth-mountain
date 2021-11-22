import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import axios from "axios";

function AddLike() {
    const uri = "https://portfolio-backend.vercel.app/likes/getLikes";
    const postUri = "https://portfolio-backend.vercel.app/updateLikes";

    const [numLikes, updateLikes] = useState(0);
    const [likeCount, updateCount] = useState(0);
    const [btnState, updateBtnState] = useState(true);
    const [likeClass, updateClass] = useState("far fa-heart");

    useEffect(() => {
        axios
            .get(uri)
            .then((res) => {
                updateLikes(res.data.data);
                updateBtnState(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    function clickLike() {
        updateClass("far fa-heart animate-like");
        updateLikes(numLikes + 1);
        updateCount(likeCount + 1);

        if (likeCount > 3) {
            updateBtn(true);
        }

        axios
            .post(postUri)
            .then((res) => {
                console.log(res.data.status);
            })
            .catch((err) => {
                console.log(err);
            });
        setTimeout(() => {
            updateClass("far fa-heart");
        }, 800);
    }

    return (
        <Nav.Item className="likeItem">
            <Button className="likeBtn" onClick={clickLike} disabled={btnState}>
                <i className={likeClass} style={{ color: "white" }}></i> {numLikes}
            </Button>
        </Nav.Item>
    );
}

export default AddLike;
