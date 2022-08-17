import {Link} from 'react-router-dom'


import './notfound.css'

const Notfound = () => {
  return (
    <section>
      <div className="container notfound_container">
        <h2>Page Not Found</h2>
        <Link to="/" className='btn'>GO Back Home</Link>
      </div>
    </section>
  )
}

export default Notfound