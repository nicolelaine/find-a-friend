const UserDetails = ({ data, fetchData }) => (
  <div className="user-details">
    {console.log(data)}
    <p className="name ">
      {data.name.title} {data.name.first} {data.name.last}
    </p>
    <p className="country">{data.location.country}</p>
    <p className="email">{data.email}</p>
    <figure>
      <img src={data.picture.large} alt="ranodm user avatar" />
    </figure>
    <button onClick={fetchData}>Fetch Another</button>
  </div>
);

export default UserDetails;
