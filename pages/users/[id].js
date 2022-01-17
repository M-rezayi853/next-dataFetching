import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import axios from 'axios'

export default function UserDetails({ user }) {
  return (
    <div className={styles.container}>
      <table id='users'>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone No</th>
          <th>Website</th>
        </tr>

        <tr>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
          <td>{user.website}</td>
        </tr>
      </table>

      <Link href={'/'}>
        <a style={{ marginTop: '3rem', textAlign: 'center', display: 'block' }}>
          Go Back
        </a>
      </Link>
    </div>
  )
}

// export const getServerSideProps = async (context) => {
//   const { data } = await axios.get(
//     `https://jsonplaceholder.typicode.com/users/${context.params.id}`
//   )

//   return {
//     props: {
//       user: data,
//     },
//   }
// }

export const getStaticProps = async (context) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${context.params.id}`
  )

  return {
    props: {
      user: data,
    },
  }
}

export const getStaticPaths = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')

  const ids = data.map((user) => user.id)
  const paths = ids.map((id) => ({ params: { id: id.toString() } }))

  // paths: { parmas: { id: '1, id: '2' } }

  return {
    paths,
    fallback: false,
  }
}
