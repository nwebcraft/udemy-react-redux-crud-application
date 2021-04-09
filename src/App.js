import PropTypes from 'prop-types'

const App = () =>  {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Makoto", age: 46 },
    { name: "Unknown", age: 99 }
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

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;

