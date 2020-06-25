import useNotification from "../useNotification";

const About = () => {
const triggerNotification = useNotification("first notofication", {
body: "Have a good time",
});
return <div onClick={triggerNotification}>Notification</div>;
};
