import React, { useState, useEffect } from "react";
import "./Chat.css";
import SidebarChat from "./SidebarChat";
import { fb } from "../../services";

export const Sidebar = () => {
  const [conversations, setConversations] = useState([]);
  const uid = fb.auth.currentUser.uid;

  useEffect(() => {
    const unsubscribe = fb.firestore
      .collection("users")
      .doc(uid)
      .collection("conversations")
      .onSnapshot((snapshot) => {
        setConversations(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
    return () => {
      unsubscribe();
    };
  }, [uid]);
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>Cuộc trò chuyện</h3>
      </div>
      <div className="sidebar-chatlist">
        {/* <SidebarChat newChat /> */}
        {conversations.map((con) => (
          <SidebarChat
            key={con.id}
            id={con.id}
            title={con.data.title}
            seller={con.data.sellerId}
            real={con.data.realId}
            buyer={con.data.buyerId}
          />
        ))}
      </div>
    </div>
  );
};
