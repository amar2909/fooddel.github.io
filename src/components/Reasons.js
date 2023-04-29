import IndividualReason from "./IndividualReason";
function Reasons() {
  return (
    <div>
      <IndividualReason
        name="Pizza"
        price="400"
        imageUrl="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
      />
      <IndividualReason
        name="Burger"
        price="180"
        imageUrl="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
      />
      <IndividualReason
        name="Taco"
        price="250"
        imageUrl="https://images.unsplash.com/photo-1604467715878-83e57e8bc129?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGFjb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
      />
    </div>
  );
}

export default Reasons;
