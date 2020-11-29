import Nav from '../../components/nav'

export default function IndexPage() {
    return (
      <div>
        <Nav/>
        <div className="py-20">
          <h1 className="text-5xl text-center text-accent-1">
            Sobre Mim
          </h1>
          <h1 className="text-5xl text-center text-accent-1">
            Nascido em Volta Redonda
          </h1>
        </div>
      </div>
    )
  }