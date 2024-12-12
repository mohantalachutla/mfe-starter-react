export const Hello = ({ message, onClick }) => {
  return (
    <div>
      <h1 data-testid="message">{message}</h1>
      <button type="button" data-testid="button" onClick={onClick}>
        Click
      </button>
    </div>
  );
};
