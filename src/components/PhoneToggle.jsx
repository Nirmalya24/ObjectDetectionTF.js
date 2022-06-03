const PhoneToggle = () => {
  return (
    <label className="swap swap-active text-6xl">
      {/* Front Facing Camera */}
      <div className="swap-on">
        <i className="bi bi-phone"></i>
      </div>
      {/* Rear facing camera */}
      <div className="swap-off">
        <i className="bi bi-phone-flip"></i>
      </div>
    </label>
  );
};

export default PhoneToggle;
