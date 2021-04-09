const App = () =>  {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Makoto", age: 46 },
    { name: "Unknown" },
  ]

  return (
    <div>
      {
        profiles.map((profile, i) => {
          return <User name={profile.name} age={profile.age} key={i} />
        })
      }
    </div>
  )
}

const User = (props) => {
  return (
    <div>
      Hi, I am {props.name}!, and {props.age} years old!
    </div>
  )
}

User.defaultProps = {
  age: 1
}

export default App;

