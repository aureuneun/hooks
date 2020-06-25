export const useConfirm = (message, onSuccess, onError) => {
  const confirmAction = () => {
    const bool = window.confirm(message);
    if (bool) {
      onSuccess();
    } else {
      onError();
    }
  };
  return confirmAction;
};
