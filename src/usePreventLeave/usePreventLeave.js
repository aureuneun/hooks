export const usePreventLeave = () => {
  const onPrevent = (e) => {
    e.preventDefault();
    e.returnValue = "";
  };
  const enablePrevent = () =>
    window.addEventListener("beforeunload", onPrevent);
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", onPrevent);
  return { enablePrevent, disablePrevent };
};
