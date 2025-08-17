function Card({ msg, num }) {
  return (
    <div
      className="flex flex-col rounded-xl p-4 h-[60vh] overflow-hidden"
      style={{
        border: '0.88px solid',
        backdropFilter: 'saturate(180%) blur(14px)',
        background: '#ffffff0d',
      }}
    >
      {/* Image: 60% of 30vh */}
      <div className="h-[60%]">
        <img
          src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652470298/9StaF0UBJfih_df0248.gif"
          className="rounded-xl w-full h-full object-cover"
        />
      </div>

      {/* Text: 40% of 30vh, scrollable if content grows */}
      <div className="h-[40%] flex flex-col rounded-b-xl py-1 overflow-y-auto">
        <div className="flex justify-between text-sm">
          <h1 className="font-RubikBold">{msg}</h1>
          <h1 className="font-bold font-RubikBold">Price</h1>
        </div>
        <div className="flex justify-between font-mono text-xs">
          <p>{num}</p>
          <p>0.01</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
