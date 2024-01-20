import Card from './components/Card'

function App() {
  const user = {
    name: "Ranjit Yadav",
    bio: "Adipisicing amet nulla qui incididunt consectetur eu. Adipisicing amet nulla qui incididunt consectetur eu. Adipisicing amet nulla qui incididunt consectetur eu.",
    interests: ['web3', 'AI', 'DevOps'],
    socials: [
      {title: 'Twitter', href: "https://twitter.com/iamranjity"},
      {title: 'GitHub', href: "https://github.com/13yadav"},
      {title: 'Facebook', href: "https://facebook.com/13ydv"},
    ]
  }

  return (
    <div className='flex flex-wrap justify-center gap-5 px-5 py-8'>
      <Card user={user} />
      <Card user={user} />
      <Card user={user} />
      <Card user={user} />
      <Card user={user} />
    </div>
  )
}

export default App
