import React, {
  useMemo,
  useEffect,
  useState,
  useCallback,
  useRef,
} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Fab from "@material-ui/core/Fab";
import Container from "@material-ui/core/Container";
import SendIcon from "@material-ui/icons/Send";
import Shadow from "../../../components/Shadow/shadow";
import "firebase/firestore";
import { useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { useCollection } from "react-firebase-hooks/firestore";
import firebase from "firebase/app";
import axios from "axios";
import { IBMUserAPI } from "../../../config";
import { useFirestore, useFirestoreDocData } from "reactfire";
import moment from "moment";
import _ from "lodash";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  chatSection: {
    width: "100%",
    height: "80vh",
  },
  headBG: {
    backgroundColor: "#e0e0e0",
  },
  borderRight500: {
    borderRight: "1px solid #e0e0e0",
  },
  messageArea: {
    height: "70vh",
    overflowY: "auto",
  },
});

const getUserInfo = (id) => {
  return axios.post(`${IBMUserAPI}/auth`, {
    _id: id,
  });
};

const Chat = () => {
  let history = useHistory();

  const classes = useStyles();
  const userState = useSelector((state) => state.userState.userData);
  let [receiver, setReceiver] = useState();
  let { id } = useParams();
  const firestore = useFirestore();
  const conversationRef = useMemo(
    () => firestore.collection("conversation"),
    [firestore]
  );

  const [conversation, setConversation] = useState("/empty");
  useEffect(() => {
    const senderId = userState?._id;
    const revId = receiver?._id;
    if (senderId && revId) {
      (async () => {
        const conversation = await conversationRef
          .where(`user.${revId}`, "==", true)
          .where(`user.${senderId}`, "==", true)

          .get();
        setConversation(conversation?.docs[0]?.id || "/empty");
      })();
    }
  }, [userState, receiver]);
  const { status, data } = useFirestoreDocData(
    conversationRef.doc(conversation)
  );
  const [input, setInput] = useState("");
  const onClickSend = async () => {
    const senderId = userState._id;
    const revId = receiver._id;
    if (senderId && revId) {
      setInput("");
      if (conversation === "/empty") {
        const res = await conversationRef.add({
          user: { [senderId]: true, [revId]: true },
          message: [
            {
              from: senderId,
              timestamp: moment().toISOString(),
              message: input,
              type: "text",
            },
          ],
        });
        setListMessage([receiver, ...listMessage]);
        setConversation(res.id);
      } else {
        conversationRef.doc(conversation).update({
          message: firebase.firestore.FieldValue.arrayUnion({
            timestamp: moment().toISOString(),
            message: input,
            type: "text",
            from: senderId,
          }),
        });
      }
    }
  };
  useEffect(() => {
    (async () => {
      try {
        let userInfo = await getUserInfo(id);
        setReceiver(userInfo.data);
      } catch (e) {
        alert("User not found");
      }
    })();
  }, [id]);

  const [listMessage, setListMessage] = useState([]);
  useEffect(() => {
    if (userState._id) {
      const query = conversationRef.where(`user.${userState._id}`, "==", true);
      query.onSnapshot(
        async (querySnapshot) => {
          const data = await Promise.all(
            querySnapshot.docs.map(async (doc) => {
              const { user: users } = doc.data();
              const idParner = _.find(
                Object.keys(users),
                (_user) => _user != userState._id
              );
              return (await getUserInfo(idParner)).data;
            })
          );
          setListMessage(data);
        },
        (err) => {
          console.log(`Encountered error: ${err}`);
        }
      );
    }
  }, [userState]);

  return (
    <React.Fragment>
      <Shadow />

      <Container style={{ marginTop: "20px", marginBottom: "20px" }}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h5" className="header-message">
              Private Chatbox
            </Typography>
          </Grid>
        </Grid>
        <br />
        <Grid container component={Paper} className={classes.chatSection}>
          <Grid item xs={3} className={classes.borderRight500}>
            <List>
              {listMessage.map((v, i) => (
                <ListItem
                  button
                  key={i}
                  onClick={() => {
                    history.push(`/chatbox/${v._id}`);
                  }}
                >
                  <ListItemIcon>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://material-ui.com/static/images/avatar/1.jpg"
                    />
                  </ListItemIcon>
                  <ListItemText primary={`${v.firstname} ${v.lastname}`} />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={9}>
            <List className={classes.messageArea}>
              {status === "success" &&
                data?.message &&
                data?.message.map((v, i) => {
                  return (
                    <ListItem key={i}>
                      <Grid container>
                        <Grid item xs={12}>
                          <ListItemText
                            align={v.from === userState?._id ? "right" : "left"}
                            primary={v.message}
                          ></ListItemText>
                        </Grid>
                        <Grid item xs={12}>
                          <ListItemText
                            align={v.from === userState?._id ? "right" : "left"}
                            secondary={moment(v.timestamp).format("HH:mm")}
                          ></ListItemText>
                        </Grid>
                      </Grid>
                    </ListItem>
                  );
                })}
            </List>
            <Divider />
            <Grid container style={{ padding: "20px" }}>
              <Grid item xs={11}>
                <TextField
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  id="outlined-basic-email"
                  label="Type Something"
                  fullWidth
                />
              </Grid>
              <Grid xs={1} align="right">
                <Fab color="primary" aria-label="add" onClick={onClickSend}>
                  <SendIcon />
                </Fab>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Chat;
