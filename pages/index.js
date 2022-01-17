import axios from 'axios'
import Link from 'next/link'

import styles from '../styles/Home.module.css'

export default function Home({ users }) {
  return (
    <div className={styles.container}>
      <table id='users'>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Details</th>
        </tr>

        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <Link href={`/users/${user.id}`}>
                <a style={{ color: '#4acf50' }}>View Details</a>
              </Link>
            </td>
          </tr>
        ))}
      </table>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users')

  const users = await res.data

  return {
    props: {
      users,
    },
  }
}
